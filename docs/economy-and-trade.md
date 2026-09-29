# 💰 LlamaCraft Player Guide: Economy, Jobs & Player Trade

Welcome to the definitive economy and commerce handbook for LlamaCraft. Learn how to maximize your hourly earnings through Jobs, navigate market shops, avoid the peer-to-peer transfer tax, and trade securely across the server.

---

## 🗺️ Quick Navigation & Economy Commands

| Command | Action / Purpose |
| :--- | :--- |
| `/bal` (or `/balance`) | View your current Vault money balance. |
| `/baltop` | View the richest players on the server. |
| `/jobs` (or `/jobs menu`) | Open the Jobs graphical browser to join, leave, or view stats. |
| `/jobs browse` | View detailed payout tables for all 12 professions. |
| `/jobs shop` | Spend your earned Job Points on tools, enchantments, and Elytras. |
| `/shop` | Open the server commodity market to buy and sell raw materials. |
| `/sell` (or `/sellgui`) | Open the graphical sell chest to deposit and liquidate surplus items. |
| `/sellall` | Instantly sell all items in your inventory that exist in the shop. |
| `/ah` (or `/auctionhouse`) | Open the global player-to-player Auction House. |
| `/ah sell <price>` | List the item currently in your hand on the Auction House for 48 hours. |
| `/orders` (or `/market`) | Browse and fulfill active player buy-orders. |
| `/withdraw <amount>` | Convert digital balance into physical Banknotes ($0\% tax). |
| `/deposit` | Deposit held physical Banknotes back into your account balance. |
| `/pay <player> <amount>` | Send money to another player (**Warning**: 20% receiver tax applies!). |

---

## 🏦 1. Getting Started: Currency & Physical Banknotes

* **Starting Balance**: Every new player joins LlamaCraft with **\$1,000.00**.
* **Physical Banknotes (`/withdraw` & `/deposit`)**:
  - Prefer physical cash over digital bank transfers? You can convert your money into physical Banknote items at **zero fee and zero tax**!
  - **Commands**:
    - `/withdraw <amount>`: Issues a signed Banknote in your inventory.
    - Right-Click the note to redeem it back into your balance.
    - Shift + Right-Click to deposit an entire stack of notes at once.
    - Sneak + Left-Click to split note denominations.

---

## ⚒️ 2. The Jobs System (`/jobs`)

The primary engine for steady income on LlamaCraft is the **Jobs** system. Players can join up to **3 jobs simultaneously** (`max-jobs: 3`).

### 📈 Exponential Progression & Level Scaling
Jobs are capped at **Level 200**. Unlike servers with flat payouts, LlamaCraft uses an exponential income progression formula:

$$\text{Income} = \text{Base Payout} \times 1.05^{\text{JobLevel} - 1}$$

* **Every level increases your job earnings by 5% compounded!**
* A Level 50 Miner earns over **$10\times$** the base rate per block mined.
* Holding multiple jobs incurs a negligible $5\%$ multi-job penalty, making 3 active jobs vastly superior to 1.

### 💼 The 12 Professions & Best-In-Class Synergies

| Job | Best Earning Activities | Base Payout | Best Synergy & Strategy |
| :--- | :--- | :---: | :--- |
| **Fisherman** | Tropical Fish / Pufferfish<br>Salmon<br>Raw Cod | **\$625.00**<br>\$500.00<br>\$375.00 | **#1 HIGHEST PAYOUT**: Combine with `/warp siyonocean`. Earn massive job cash + EvenMoreFish catches + Spawner barter all at once! |
| **Hunter** | Ender Dragon Kill<br>Wither Kill<br>Ghast / Iron Golem<br>Blaze / Cave Spider<br>Hostile Mobs (Creeper/Zombie) | **\$50,000.00**<br>\$1,250.00<br>\$750.00<br>\$500.00<br>\$250.00 - \$375.00 | Combine with exploring Nether Fortresses and Trial Chambers. Great for active combatants. |
| **Farmer** | Shearing Sheep (Any Color)<br>Cocoa Pods<br>Wheat & Beetroots<br>Carrots & Potatoes | **\$100.00**<br>\$100.00<br>\$37.50<br>\$25.00 | **Auto-Replant Loop**: Right-click crops with any Hoe (`Harvester`). Replants instantly with zero durability cost! |
| **Miner** | Emerald Ore (Deepslate)<br>Diamond Ore (Deepslate)<br>Lapis / Gold / Iron Ore<br>Deepslate / Stone | **\$437.50**<br>\$312.50<br>\$112.50 - \$212.50<br>\$25.00 - \$31.25 | Strip-mining at $Y=-58$. Deepslate pays \$31.25 base, stacking rapid cash per chunk. |
| **Woodcutter** | Chopping Oak, Birch, Spruce, Dark Oak logs | \$15.00 - \$35.00 | Tree farms and deforesting for timber. |
| **Digger** | Clay, Soul Sand, Gravel, Dirt, Sand | \$5.00 - \$25.00 | Terraforming large plots. |
| **Builder** | Placing building blocks, glass, terracotta | \$2.50 - \$15.00 | Earn passive income while constructing bases. |
| **Crafter** | Crafting armor, tools, and bulk materials | Variable | Best paired with mass farm outputs. |
| **Brewer** | Brewing potions (Strength, Speed, Health) | \$25.00 - \$75.00 | Potion brewing for PvP and bosses. |
| **Enchanter** | Enchanting gear and combining books | Variable | Earn while gearing up at enchanting tables. |
| **Weaponsmith**| Smelting metals and crafting armaments | Variable | Great during bulk smelting sessions. |
| **Explorer** | Discovering new chunks and exploring biomes | Periodic | Earn money by running, flying, and mapping new terrain. |

### 🛡️ Anti-Exploit Rules to Know:
1. **Near-Spawner Mob Kills**: Mobs that spawn from monster spawners do **NOT** pay job income. (Spawner farming earns money via physical mob drops sold at `/shop`, not job wages).
2. **Re-Placing Ores**: Placing previously mined ores deducts money and XP (e.g., placing Diamond Ore costs $-\$10.00$). Silk-touch re-mining exploits are strictly blocked.

---

## 🌟 3. Job Points & The Rewards Shop (`/jobs shop`)

Every action that grants job money also awards **Job Points**. Job points are a permanent secondary currency that you can spend in the exclusive Job Shop (`/jobs shop`):

* **Super Pickaxe** (10,000 Points + \$10,000): Diamond Pickaxe with Efficiency V, Unbreaking III, Jump Boost Potion, and an apple! (Requires Miner 50, Woodcutter 10, Total Level 100).
* **Lure III Enchanted Book** (100 Points): Grants Lure III for fishing rods. (Requires Fisherman 100).
* **Angel Wings / Elytra** (100,000 Points): Authentic Elytra redeemable directly through dedication to your craft!

---

## 🛒 4. Server Shops & Liquidating Surplus (`/shop` & `/sellgui`)

### `/shop` (Server Commodity Market)
Buy building materials, redstone, food, armor, and farming seeds, or sell bulk crops and mob drops directly to the server.

### `/sellgui` (The Graphical Selling Chest)
Typing `/sell` or `/sellgui` opens a dedicated selling container:
1. Drop any sellable items, surplus mob loot, or farm yields into the container.
2. Click the green confirm button.
3. The server computes the highest market price for all matching items and credits your balance in one click!

> [!TIP]
> **Quick Selling**: Type `/sellall` to instantly sell all matching items in your inventory without opening the menu.

---

## 🏛️ 5. Player-to-Player Trade & The Auction House (`/ah`)

Want to trade custom gear, enchanted armor, shulker boxes, or rare fish with other players?

* **The Auction House (`/ah`)**:
  - Open the global market to browse, purchase, or list items.
  - **Listing an Item**: Hold the item and run `/ah sell <price>` (e.g. `/ah sell 5000`).
  - **Limits**: Every player can list up to **5 items simultaneously**.
  - **Duration**: Listings stay active for **48 hours** before expiring to your collection bin.
  - **Shulker Box Previews**: Hovering over a listed Shulker Box reveals its entire contents directly in the menu!

* **Market Orders (`/orders`)**:
  - Looking to buy specific building materials or mob drops in bulk?
  - Use `/orders` to place a public buy-order with your desired price. Other players can fulfill your order and receive instant payment.
  - Active orders remain open for **7 days** with **0% market tax**.

---

## ⚠️ 6. Direct Player Transfers & The 20% Tax (`/pay`)

> [!WARNING]
> **BEWARE OF THE 20% TRANSFER TAX ON `/pay`!**
> 
> LlamaCraft runs a server economy money-sink on direct player-to-player transfers:
> 1. When you run `/pay <player> <amount>`, the sender pays the exact amount.
> 2. The receiver initially sees the full sum credited to their account.
> 3. Exactly **2 seconds later**, a **20% server tax** is automatically deducted from the receiver's balance with a tax notification:
>    - *Example*: If you send someone **\$100,000**, the server will tax away **\$20,000**, leaving them with **\$80,000**!

### 💡 Pro-Tip: How to Trade with 0% Tax!
If you are buying or selling items from another player in person, **DO NOT USE `/pay`**!
Instead:
1. Run `/withdraw <amount>` to convert your cash into physical **Banknotes** ($0\%$ fee).
2. Drop or hand the physical Banknote directly to the player.
3. The recipient deposits the banknote with `/deposit` with **ZERO TAX DEDUCTION**!
