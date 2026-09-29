# 🎣 LlamaCraft Player Guide: Fishing, Spawners & Mob Drops

Welcome to the definitive gathering guide for LlamaCraft! Whether you are an angler looking to reel in mythical sea creatures, a farmer automating crops, or an industrialist building 10,000-stack mob farms, this guide explains every mechanic, command, and optimal strategy.

---

## 🗺️ Quick Navigation & Core Commands

| Command | Action / Purpose |
| :--- | :--- |
| `/warp siyonocean` | Teleport to the infinite Deep Cold Ocean fishing realm. |
| `/spawners` (or `/fishbarter`) | Open the Deep Sea Spawner Merchant to exchange custom fish for Spawners. |
| `/emf shop` | Open the fish market to sell your catches for Vault currency. |
| `/emf sellall` | Instantly sell all custom fish in your inventory for cash. |
| `/emf journal` | Browse your personal fishing logbook and caught species records. |
| `/emf applybaits` | Open the bait applicator to socket lures onto your fishing rod. |
| `/shop` | Open the server commodity market (sell mob drops, crops, and mob parts). |

---

## 🌊 1. Deep Sea Fishing (EvenMoreFish)

Fishing on LlamaCraft is completely overhauled. In addition to standard vanilla items, every cast can hook custom species categorized across 4 primary tiers: **Common**, **Rare**, **Epic**, and **Legendary**.

### 📍 Where to Fish for Maximum Yield
* **Primary Hotspot (`/warp siyonocean`)**: The dedicated oceanic realm is fixed to the `Deep Cold Ocean` biome. This biome satisfies the environmental conditions for high-tier marine life like *Atlantic Cod*, *Temperate Frogs*, and deep-sea cephalopods.
* **Weather Advantage**: Fishing during rain or thunderstorms significantly increases catch speeds and enables stormy-weather catches (*Temperate Frog*, *Cold Frog*).
* **Daylight Conditions**: Specific species like the *Sunfish* require daytime (`6:00 AM - 6:00 PM`), while deep-sea predators bite at all hours.

### 🐟 Fish Rarity Tiers & Size Value
Every fish has an individually rolled size (in centimeters). The sale price scales directly with its length:

$$\text{Payout} = \text{Length (cm)} \times \text{Rarity Multiplier}$$

| Rarity | Weight | Size Range | Multiplier | Special Features / Notable Catches |
| :--- | :---: | :---: | :---: | :--- |
| **Common** | 100 | $1 - 30\text{ cm}$ | $\times 0.10$ | Atlantic Cod, Tuna, Spanish Mackerel, Pufferfish, Eel |
| **Rare** | 10 | $20 - 150\text{ cm}$ | $\times 0.20$ | Nemo, Dory, Electric Eel (Zaps!), Sunfish, Goldfish |
| **Epic** | 3 | $125 - 800\text{ cm}$ | $\times 0.15$ | Glowing Jellyfish, Dolphin, Whale, Coinfish (gives \$50 on flip!) |
| **Legendary** | 1 | $800 - 4,000\text{ cm}$ | $\times 0.20$ | King Mackerel, Salmon of Knowledge, BLÅHAJ, Starfish |

> [!TIP]
> **Should you sell or save?**
> - **Common & Junk**: Sell immediately with `/emf sellall` for instant cash.
> - **Rare, Epic, & Legendary**: **DO NOT SELL!** Save these in your enderchest. They are the physical currency required to redeem Smart Spawners at `/spawners`.

---

## 🪱 2. Custom Baits & Rod Upgrades

Equipping custom bait dramatically boosts the catch weights for rare species. Up to **7 baits** can be applied simultaneously to a single fishing rod.

### Bait Catalog & Shop

| Bait Name | In-Game Item | Vault Cost | Effect & Mechanics |
| :--- | :--- | :--- | :--- |
| **Stringy Worms** | String | \$250 | Doubles ($2\times$) Common & Legendary catch weight. Max 16 on rod. |
| **Shrimps** | Nautilus Shell | \$500 | Boosts Sunfish, Goldfish, Nemo, Carp ($2\times$). Max 100 on rod. |
| **Fresh Water** | Custom Head | \$1,500 | Doubles ($2\times$) both **Epic** & **Legendary** fish rates. Max 64 on rod. |
| **Epic Elixir** | Honey Bottle | \$5,000 | Pure $2\times$ multiplier for **Epic** tier fish. Max 64 on rod. |
| **Legendary Lure** | Golden Carrot | \$15,000 | Pure $2\times$ multiplier for **Legendary** tier fish. Max 20 on rod. |
| **Infinite Bait** | Ender Pearl | \$250,000 | Permanent $2\times$ Legendary boost that never depletes! |

### How to Apply Baits
1. Hold your fishing rod and type `/emf applybaits` (or drag and drop the bait item directly onto your fishing rod inside your inventory).
2. Socket your desired bait into an available slot.
3. Once equipped, bait slots appear cleanly in your rod's lore description.

---

## 🏛️ 3. The Deep Sea Spawner Merchant (`/spawners`)

Smart Spawners cannot be purchased directly with raw money. Instead, the server uses a dedicated physical barter system: exchange your custom fish directly for authentic Smart Spawners!

Type `/spawners` or `/fishbarter` anywhere on the server to open the merchant interface.

```
       ✦ DEEP SEA SPAWNER BARTER MATRIX ✦
┌───────────────────────────────────────────────────────────┐
│ Tier 1: Common Mobs    │ Cost: 32x Rare Fish              │
│  • Zombie Spawner       • Skeleton Spawner                │
│  • Spider Spawner       • Cave Spider Spawner             │
├───────────────────────────────────────────────────────────┤
│ Tier 2: Valuable Mobs  │ Cost: 16x Epic Fish              │
│  • Blaze Spawner        • Creeper Spawner                 │
│  • Magma Cube Spawner   • Slime Spawner                   │
├───────────────────────────────────────────────────────────┤
│ Tier 3: Endgame Mobs   │ Cost: 4-6x Legendary Fish        │
│  • Enderman Spawner (4) • Witch Spawner (4)               │
│  • Guardian Spawner (4) • Iron Golem Spawner (6)          │
├───────────────────────────────────────────────────────────┤
│ Tier 4: Mythic Bosses  │ Cost: 8-10x Legendary Fish       │
│  • Wither Skeleton (8)  • Evoker Spawner (8)              │
│  • Warden Spawner (10)                                    │
└───────────────────────────────────────────────────────────┘
```

### Visual Indicators:
* **The Pouch Tracker (Slot 4)**: Shows your exact live balance of Rare, Epic, and Legendary fish in your inventory.
* **Ready to Pull (`✔ Ready to Pull!`)**: When you have enough fish in your inventory, the spawner lore turns green and lets you claim it in one click.
* **Insufficient Fish (`✘ Need X more`)**: Tells you exactly how many more fish of that rarity you need to catch.

---

## ⚙️ 4. Smart Spawner Mechanics & Automation

Spawners on LlamaCraft feature an advanced built-in automation engine:

* **No Mob Clutter**: Smart Spawners can store loot and experience directly inside the spawner block! Right-click the placed spawner to open its internal storage (holds up to 45 item stacks and 10,000 XP).
* **Massive Stacking**: Hold identical spawners and **Shift + Right-Click** a placed spawner to stack up to **10,000 spawners** into a single block!
* **Operating Delay**: Spawners cycle every **27 seconds**, generating 1 to 3 mob yields per spawner in the stack.
* **Player Proximity**: Spawners operate whenever any player is within **16 blocks**.
* **Explosion Immunity**: Placed spawners are 100% immune to TNT and Creeper blast destruction.
* **Hopper Collection**: Hoppers underneath Smart Spawners collect up to 5 item stacks per second.

### ⛏️ How to Break & Move Spawners
> [!IMPORTANT]
> **Silk Touch Requirement**:
> - You **MUST** use an **Iron, Golden, Diamond, or Netherite Pickaxe** enchanted with **Silk Touch I**.
> - Breaking a spawner consumes **50 tool durability**.
> - Spawners are sent **directly into your inventory** (they will not drop on the floor or fall into lava).
> - **Shift + Break**: Allows you to break off up to 64 spawners from a massive stack at once!

### 🗺️ Natural Dungeon Spawners
Exploring caves and dungeons? Natural spawners found in the wild can be broken with Silk Touch! They have a **60% chance** to convert directly into a Smart Spawner item when mined.

---

## 🌾 5. Instant Crop Harvesting (`Harvester`)

Farming crops is effortless on LlamaCraft:
* **One-Click Harvest**: Hold any **Hoe** and **Right-Click** fully grown wheat, carrots, potatoes, beetroot, or nether wart.
* **Zero Durability Loss**: Using a hoe to right-click harvest does **NOT** consume hoe durability!
* **Instant Auto-Replant**: The mature crop is harvested, drops to the ground, and seeds are automatically replanted instantly.

---

## 💰 6. Mob Drops Economy Cheat Sheet (`/shop`)

Once your spawners and farms are running, sell your excess mob loot at `/shop` for continuous income:

| Mob Drop Item | Sells For (Each) | Sells For (Full 64 Stack) | Farm Recommendation |
| :--- | :---: | :---: | :--- |
| **Shulker Shell** | \$500.00 | \$32,000.00 | End Dimension Farm |
| **Wither Skeleton Skull** | \$250.00 | \$16,000.00 | Tier 4 Spawner (`/spawners`) |
| **Zombie / Creeper Head** | \$150.00 | \$9,600.00 | Charged Creeper / Spawner Farm |
| **Phantom Membrane** | \$50.00 | \$3,200.00 | Night Hunter |
| **Blaze Rod** | \$30.00 | \$1,920.00 | Tier 2 Spawner (`/spawners`) |
| **Breeze Rod / Ender Pearl**| \$20.00 | \$1,280.00 | Trial Chamber / Enderman Farm |
| **Slime Ball** | \$5.00 | \$320.00 | Tier 2 Spawner (`/spawners`) |
| **Rotten Flesh / Bone** | \$1.50 - \$5.00 | \$96.00 - \$320.00 | Tier 1 Spawner (`/spawners`) |

### 🚀 Recommended Endgame Strategy:
1. Warp to `/warp siyonocean` during rain with an applied **Fresh Water** or **Legendary Lure** rod.
2. Store all **Rare**, **Epic**, and **Legendary** catches in your `/echest`.
3. Open `/spawners` and redeem **Blaze Spawners** (16 Epic fish each) or **Wither Skeleton Spawners** (8 Legendary fish each).
4. Stack your spawners inside your claimed base (`/claim`), place a hopper line underneath, and sell your drops automatically at `/shop`!
