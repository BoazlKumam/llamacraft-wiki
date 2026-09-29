// LlamaCraft Wiki Client-Side Application
// Supports instant hash-routing, markdown parsing, in-memory caching, search index, and raw AI-access links.

const PAGES = {
  home: {
    title: 'Main Page',
    file: null,
    crumb: 'Main Page',
    rawUrl: 'https://raw.githubusercontent.com/BoazlKumam/llamacraft-wiki/main/docs/README.md'
  },
  gathering: {
    title: 'Fishing & Spawners Guide',
    file: 'docs/gathering-and-spawners.md',
    crumb: 'Resource Gathering & Spawners',
    rawUrl: 'https://raw.githubusercontent.com/BoazlKumam/llamacraft-wiki/main/docs/gathering-and-spawners.md'
  },
  economy: {
    title: 'Economy & Trade Guide',
    file: 'docs/economy-and-trade.md',
    crumb: 'Economy, Jobs & Trade',
    rawUrl: 'https://raw.githubusercontent.com/BoazlKumam/llamacraft-wiki/main/docs/economy-and-trade.md'
  },
  quests: {
    title: 'Quests & Events Guide',
    file: 'docs/quests-and-events.md',
    crumb: 'Quests, Narrative & Events',
    rawUrl: 'https://raw.githubusercontent.com/BoazlKumam/llamacraft-wiki/main/docs/quests-and-events.md'
  },
  ranks: {
    title: 'Ranks & Progression Guide',
    file: 'docs/ranks-and-progression.md',
    crumb: 'Ranks, Progression & Kits',
    rawUrl: 'https://raw.githubusercontent.com/BoazlKumam/llamacraft-wiki/main/docs/ranks-and-progression.md'
  },
  claims: {
    title: 'Worlds, Claims & PvP Guide',
    file: 'docs/worlds-claims-and-pvp.md',
    crumb: 'Worlds, Claims & Combat',
    rawUrl: 'https://raw.githubusercontent.com/BoazlKumam/llamacraft-wiki/main/docs/worlds-claims-and-pvp.md'
  }
};

const markdownCache = {};

// Switch Page Handler
async function switchPage(pageKey, targetAnchor) {
  if (!PAGES[pageKey]) pageKey = 'home';

  // Update URL hash without reload
  if (window.location.hash.replace('#', '') !== pageKey) {
    window.location.hash = pageKey;
  }

  // Update active top tab
  document.querySelectorAll('.nav-tab').forEach(tab => {
    if (tab.getAttribute('data-target') === pageKey) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  const portalHome = document.getElementById('portal-home');
  const articleReader = document.getElementById('article-reader');
  const crumbEl = document.getElementById('current-crumb');
  const articleContent = document.getElementById('article-content');
  const rawBtn = document.getElementById('raw-markdown-btn');

  if (pageKey === 'home') {
    portalHome.classList.remove('hidden');
    articleReader.classList.add('hidden');
    document.title = 'LlamaCraft Official Wiki';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  portalHome.classList.add('hidden');
  articleReader.classList.remove('hidden');

  const meta = PAGES[pageKey];
  crumbEl.textContent = meta.crumb;
  document.title = `${meta.title} — LlamaCraft Wiki`;
  rawBtn.href = meta.rawUrl;

  // Render markdown
  if (markdownCache[pageKey]) {
    articleContent.innerHTML = markdownCache[pageKey];
    handleAnchorScroll(targetAnchor);
  } else {
    articleContent.innerHTML = '<div class="loading-spinner">Fetching live forensic markdown from server archive...</div>';
    try {
      const res = await fetch(meta.file);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const rawMd = await res.text();
      
      // Parse markdown with marked
      const html = marked.parse(rawMd);
      markdownCache[pageKey] = html;
      articleContent.innerHTML = html;
      handleAnchorScroll(targetAnchor);
    } catch (err) {
      articleContent.innerHTML = `
        <div style="padding: 30px; text-align: center; color: #be123c;">
          <h3>Failed to load guide</h3>
          <p>${err.message}</p>
          <p><a href="${meta.rawUrl}" target="_blank">Click here to open raw markdown directly on GitHub</a></p>
        </div>
      `;
    }
  }
}

function handleAnchorScroll(anchor) {
  if (!anchor) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  setTimeout(() => {
    const el = document.getElementById(anchor) || document.querySelector(`[name="${anchor}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
}

// Copy Server IP
function copyServerIP() {
  const ip = 'play.llamacraft.net';
  navigator.clipboard.writeText(ip).then(() => {
    const badge = document.querySelector('.copy-badge');
    if (badge) {
      const orig = badge.textContent;
      badge.textContent = 'COPIED!';
      badge.style.backgroundColor = '#16a34a';
      setTimeout(() => {
        badge.textContent = orig;
        badge.style.backgroundColor = '';
      }, 2000);
    }
  }).catch(() => {
    alert(`Server IP: ${ip}`);
  });
}

// Search Index & Live Search
const SEARCH_INDEX = [
  { title: 'EvenMoreFish Rare Catches', desc: 'Custom marine fauna, baits, and Deep Cold Ocean fishing rules', page: 'gathering' },
  { title: 'SmartSpawner Upgrades & Stacking', desc: 'Max 10,000 spawner stacking, XP collection, and Silk Touch extraction', page: 'gathering' },
  { title: 'Fish Spawner Barter System', desc: 'Warp to SiyonOcean to trade catches for authentic spawners', page: 'gathering' },
  { title: 'Jobs Reborn & Salary Progression', desc: '12 survival careers with 5% compounding salary scaling formula', page: 'economy' },
  { title: '20% Delayed Pay Tax', desc: 'pay_tax.sk 2-second escrow tax mechanism on direct /pay transfers', page: 'economy' },
  { title: 'SmartWithdraw Banknotes Loophole', desc: 'Circumvent 20% /pay tax using 0% tax physical banknotes', page: 'economy' },
  { title: 'EconomyShopGUI Dynamic Pricing', desc: 'Live supply/demand price fluctuations and server market catalog', page: 'economy' },
  { title: '1,000 Quests Campaign', desc: 'Ten-tier quest ladder spanning beginner to mythic Netherite feats', page: 'quests' },
  { title: 'Dragon Egg Tracker & Relic Defense', desc: 'Container lockouts, compass tracking, and holder survival rewards', page: 'quests' },
  { title: 'NotBounties System', desc: 'Place, track, and claim bounties on rival survival players', page: 'quests' },
  { title: 'Custom Physics Hazards', desc: 'Skript hazards: void velocity negation, 1-hit anvils, fast cactus damage', page: 'quests' },
  { title: 'Rankup Ladder (Stone to Netherite)', desc: '$1.445M total cost progression, weekly rank kits, and bonus claim blocks', page: 'ranks' },
  { title: 'Permanent Fly Mode', desc: 'Unlocking /fly upon reaching top-tier Netherite rank', page: 'ranks' },
  { title: 'Multiverse 7 Realms', desc: 'Overworld, SiyonOcean, Nether, End, and PvP colosseums', page: 'claims' },
  { title: 'GriefPrevention Golden Shovel Claims', desc: 'Accruing 100 blocks/hour, subdivisions, and siege mechanics', page: 'claims' },
  { title: 'Hybrid Keep-Inventory & Combat Tag', desc: '100% item retention on mob/env deaths, full loot drops on 15s PvP tag', page: 'claims' }
];

function initSearch() {
  const input = document.getElementById('wiki-search');
  const dropdown = document.getElementById('search-dropdown');

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      dropdown.classList.add('hidden');
      dropdown.innerHTML = '';
      return;
    }

    const matches = SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.desc.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      dropdown.innerHTML = '<div style="padding: 10px 12px; font-size: 12px; color: #888;">No matching wiki articles found.</div>';
    } else {
      dropdown.innerHTML = matches.map(m => `
        <div class="search-result-item" onclick="switchPage('${m.page}'); document.getElementById('search-dropdown').classList.add('hidden'); document.getElementById('wiki-search').value = '';">
          <div class="search-result-title">${m.title}</div>
          <div class="search-result-desc">${m.desc}</div>
        </div>
      `).join('');
    }
    dropdown.classList.remove('hidden');
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
      dropdown.classList.add('hidden');
    }
  });
}

// Router Event Listeners
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  switchPage(hash);
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initSearch();

  // Tab click listeners
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');
      switchPage(target);
    });
  });

  // Initial route
  const initialHash = window.location.hash.replace('#', '') || 'home';
  switchPage(initialHash);
});
