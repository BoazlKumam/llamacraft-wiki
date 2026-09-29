# 🛡️ LlamaCraft Player Guide: Worlds, Land Claims & PvP Combat

Learn how to explore across all 7 server dimensions, protect your base with golden shovel claims, navigate the high-stakes PvP combat tag rules, and survive with the hybrid keep-inventory engine!

---

## 🗺️ Quick Navigation & Claim Commands

| Command | Action / Purpose |
| :--- | :--- |
| `/rtp` (or `/wild`) | Randomly teleport into the Overworld ($500 - 9,800$ blocks out). |
| `/spawn` (or `/survspawn`) | Teleport to the main lobby or survival spawn point. |
| `/warp <name>` | Browse and warp to server locations (`siyonocean`, `pvp`). |
| `/claim` | Automatically create a claim centered around your location. |
| `/trust <player>` | Grant a friend full build and break permissions in your claim. |
| `/containertrust <player>`| Grant permission to open chests, hoppers, barrels, and machines. |
| `/accesstrust <player>` | Grant permission to use buttons, levers, doors, and `/sethome`. |
| `/untrust <player>` | Revoke all permissions from a player. |
| `/abandonclaim` | Delete your current claim and **refund 100%** of your claim blocks. |
| `/trapped` | Safely escape if you are locked inside someone else's territory. |
| `/pvp` (or `/pvptoggle`) | Check your PvP combat status. |
| `/combattag` | Check remaining seconds on your combat tag timer. |

---

## 🌍 1. The 7 Active Server Dimensions

LlamaCraft hosts 7 distinct worlds with dedicated gameplay purposes:

| World Name | Environment | PvP State | Description & Role |
| :--- | :--- | :---: | :--- |
| **`overworld`** | Survival | Full PvP (Safe in Claims) | The main building, mining, and exploration continent. |
| **`siyonocean`** | Deep Cold Ocean | Full PvP (Safe in Claims) | Deep-sea fishing paradise. Catch rare marine life & barter for spawners. |
| **`the_nether`** | Nether Dimension | Full PvP (Safe in Claims) | Netherite scrap, fortresses, blaze rods, and ancient debris. |
| **`the_end`** | End Dimension | Full PvP (Safe in Claims) | Shulker boxes, Elytra, and the Dragon Egg relic hunt. |
| **`pvp`** | Arena | Active PvP | Dedicated combat colosseum for wagers and clan wars. |
| **`medievallobby`** | Spawn Lobby | Protected | Safe hub for NPC merchants, guides, and portals. |
| **`flatworld`** | Flat Continent | Protected | Event staging and testing grounds. |

---

## 🚩 2. Protecting Your Territory (GriefPrevention)

Never worry about griefers, thieves, or explosions ruining your hard work. Land claims provide 100% impenetrable protection.

### 📐 Claim Tools & Basic Dimensions
* **Inspection Tool**: Right-click any block with a **Stick** to see who owns the land and view boundary boundaries.
* **Claiming Tool**: Equip a **Golden Shovel** and right-click two opposite corners of your desired property to lock the claim.
* **Chest Auto-Claim**: Placing your very first chest automatically creates a free **$4 \times 4$** starter claim centered on the chest!
* **Dimensions**: Claims must be at least **$5$ blocks wide** and have a minimum area of **$100$ blocks** ($10 \times 10$).
* **Depth Protection**: Claims automatically extend from your placement point **all the way down to Bedrock**!

### ⏳ Earning Claim Blocks & Inactivity Rules
* **Hourly Accrual**: Every active hour of playtime awards **+100 Claim Blocks** (up to 80,000 blocks maximum).
* **Rank Bonuses**: Ranking up through `/rankup` awards up to **+17,500 Bonus Claim Blocks**!
* **100% Refund**: Running `/abandonclaim` refunds **100%** of the claim blocks back into your available pool.
* **Inactivity Protection**: If you take a break, your claims stay protected for **60 days**. If you have earned over 10,000 total claim blocks or 5,000 bonus blocks from ranks, **your claims NEVER expire!**

### 🤝 Trusting Other Players
Control exactly who can touch your base:

| Trust Command | Can Break/Place? | Can Open Chests? | Can Use Levers/Doors? | Can Use `/sethome`? |
| :--- | :---: | :---: | :---: | :---: |
| `/trust <player>` | ✅ **YES** | ✅ **YES** | ✅ **YES** | ✅ **YES** |
| `/containertrust <player>` | ❌ NO | ✅ **YES** | ✅ **YES** | ✅ **YES** |
| `/accesstrust <player>` | ❌ NO | ❌ NO | ✅ **YES** | ✅ **YES** |

---

## ⚔️ 3. PvP Combat, Combat Logging & Keep-Inventory Rules

LlamaCraft runs a unique **Hybrid Keep-Inventory & Combat Engine** designed to encourage fair PvE survival while keeping PvP fights thrilling:

### 💀 The Death Rules Matrix

| Cause of Death | Do You Keep Your Inventory? | Do You Keep Your XP? |
| :--- | :---: | :---: |
| **Monsters & Mobs** (Zombies, Creepers, Warden, Wither) | ✅ **100% KEPT** | ✅ **100% KEPT** |
| **Environmental Hazards** (Lava, Fire, Drowning, Fall) | ✅ **100% KEPT** | ✅ **100% KEPT** |
| **`/suicide` Command** | ✅ **100% KEPT** | ✅ **100% KEPT** |
| **Slayed by Another Player in PvP** | ❌ **DROPS ON GROUND** | ❌ **DROPS ON GROUND** |

> [!NOTE]
> **Safe Zones**: Land claims are 100% immune to PvP damage (`ProtectPlayersInLandClaims: true`). You cannot be harmed by other players while standing inside a claim!

---

### 🚨 The 15-Second Combat Tag Protocol

When you deal or receive damage from another player in the wilderness:
1. You are locked in **Combat Tag for 15 seconds**.
2. An on-screen action bar and glowing outline indicate active combat.
3. Throwing an **Ender Pearl** or using a **Wind Charge** immediately refreshes your combat tag.
4. **All Escape Commands Are Blocked**: `/home`, `/spawn`, `/tpa`, and `/warp` are disabled during combat.

> [!CAUTION]
> **DO NOT COMBAT LOG!**
> 
> If you disconnect or close your game while tagged:
> - You are **instantly executed**.
> - **Your entire inventory, armor, and XP drop on the ground** for your enemy to loot!
> - You suffer an immediate **25% balance penalty** deducted from your bank!
> - A server-wide broadcast announces your cowardly exit to all online players!

---

## 📱 4. Crossplay & Bedrock Support (Geyser & Floodgate)

LlamaCraft is fully crossplay-compatible:
* Bedrock players join using the standard Bedrock IP and port.
* Custom GUI menus automatically adjust for mobile touchscreens and console gamepads.
* Bedrock player skins are rendered natively across Java clients via `BedrockSkinRestorer`.
