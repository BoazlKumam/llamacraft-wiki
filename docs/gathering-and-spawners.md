# LlamaCraft Player Guide: Fishing, Spawners & Mob Drops

Welcome to the definitive gathering guide for LlamaCraft. Whether you are an angler looking to reel in mythical sea creatures, a farmer automating crops, or an industrialist building 30,000-stack mob farms, this guide explains every mechanic, command, and optimal strategy.

---

## Quick Navigation & Core Commands

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

## 1. Multi-Dimensional Fishing Ecosystem

Fishing on LlamaCraft is completely overhauled with EvenMoreFish and custom dimension fishing. Every cast hooks custom species categorized across 5 primary tiers: **Common**, **Rare**, **Epic**, **Legendary**, and **Junk**.

### Dimensional Rates & Fishing Mediums

| Dimension / Zone | Fishing Medium | Catch Rates (Common / Rare / Epic / Legendary / Junk) | Environmental Mechanics |
| :--- | :--- | :--- | :--- |
| **Overworld Wild** (`world`) | Water | 84.0% / 8.4% / 2.5% / 0.8% / 4.2% | Vanilla waters, cold oceans, and rivers. Standard marine species pool. |
| **Spawn Pond** (`spawn_pond`) | Water | 0.28% / 8.5% / 17.1% / 71.2% / 0.03% | Sanctuary jackpot pool (`x: -143 to -75, z: -135 to 35`). 250x Legendary multiplier. |
| **The Nether** (`world_nether`) | **Lava** | 84.0% / 8.4% / 2.5% / 0.8% / 4.2% | Lava fishing active. Cast into magma oceans to catch molten and nether-exclusive species. |
| **The End** (`world_the_end`) | **Void** | 84.0% / 8.4% / 2.5% / 0.8% / 4.2% | Void fishing active. Cast rods directly into the abyss off island cliffs for cosmic entities. |
| **The Backrooms** (`world_backrooms`) | Puddles / Void | 84.0% / 8.4% / 2.5% / 0.8% / 4.2% | Liminal fishing. Hook aberrant artifacts, carpet-dwellers, and reality-glitched specimens. |

---

### Dimensional Species Catalog

#### Overworld Species Pool (Water)
- **Common (23)**: Cod, Atlantic Cod, Rockfish, Tuna, Mackerel, Spanish Mackerel, Salmon, Pufferfish, Tropical Fish, Red Mullet, Anchovy, Haddock, Bluefish, Carp, Silver Carp, Grass Carp, Koi Carp, Black Carp, Lemon Shark, Sea Snail, Eel, Tadpole, Seagull Feather.
- **Rare (13)**: Penguin Feather, Nemo, Dory, Squid Ink, Squid, Coral, Jellyfish, Temperate Frog, Cold Frog, Warm Frog, Electric Eel, Sunfish, Goldfish.
- **Epic (15)**: Glowing Jellyfish, Dolphin, Turtle, Anemone, Shiny Pickle, Penguin, Axolotl, Rainbow Trout, Crab, Hermit Crab, Whale, Clownfish, Breaded Fish Fillet, Coinfish, Kelpfish.
- **Legendary (16)**: King Mackerel, Salmon of Knowledge, Wumpus, Golden Frog, Chinese White Dolphin, Green Axolotl, Blue Axolotl, Starfish, Spongebob, Golden Hermit Crab, Golden Skull, BLAHAJ, MrCrayfish, Flower Fish, Copper Golem, KasaiSora.
- **Junk (5)**: Rusty Bucket, Rusty Spoon, Lost Fishing Rod, Explorers Boat, Old Fishers Hat.

#### The Nether Species Pool (Lava Fishing)
- **Common**: Magma Guppy, Ash Carp, Crimson Snapper, Warped Minnow.
- **Rare**: Obsidian Eel, Strider Trout, Soul Sand Flounder.
- **Epic**: Blaze Bass, Wither Fin, Ghast Tentacle Fish.
- **Legendary**: Netherite Carp, Hellfire Leviathan.
- **Junk**: Charred Bone, Cracked Magma Pebble.

#### The End Species Pool (Void Fishing)
- **Common**: Chorus Perch, Void Minnow, Purpur Darter.
- **Rare**: Shulker Crab, Ender Pearlfish, Ender Mite.
- **Epic**: Astral Starfish, Void Ray, Chorus Dragonfish.
- **Legendary**: Ender Leviathan, Cosmic Singularity.
- **Junk**: End Stone Shard, Popped Chorus Husk.

#### The Backrooms Species Pool (Liminal Fishing)
- **Common**: Damp Carpetfin, Fluorescent Minnow, Almond Guppy.
- **Rare**: Liquid Pain Eel, Level 0 Smilerfish, Static Bass.
- **Epic**: Anomalous Ray, Sanity Drinker.
- **Legendary**: Entity 30 Leviathan, NoClip Phantom.
- **Junk**: Wet Yellow Wallpaper, Broken Fluorescent Light.

---

### Fish Valuation Formula
Fish prices in `/emf shop` scale with rolled length:

$$\text{Payout} = \text{Length (cm)} \times \text{Rarity Multiplier}$$

| Rarity | Weight | Size Range | Multiplier | Barter Recommendation |
| :--- | :---: | :---: | :---: | :--- |
| **Common** | 100 | $1 - 30\text{ cm}$ | $\times 0.10$ | Sell immediately via `/emf sellall`. |
| **Rare** | 10 | $20 - 150\text{ cm}$ | $\times 0.20$ | Save in `/echest` for Tier 1 spawner redemptions. |
| **Epic** | 3 | $125 - 800\text{ cm}$ | $\times 0.15$ | Save in `/echest` for Tier 2 spawner redemptions. |
| **Legendary** | 1 | $800 - 4,000\text{ cm}$ | $\times 0.20$ | Save in `/echest` for Tier 3 and Tier 4 boss spawner redemptions. |

---

## 2. Custom Baits & Rod Upgrades

Up to **7 baits** can be applied simultaneously to a single fishing rod.

| Bait Name | In-Game Item | Vault Cost | Effect & Mechanics |
| :--- | :--- | :--- | :--- |
| **Stringy Worms** | String | \$250 | Doubles ($2\times$) Common & Legendary catch weight. Max 16 on rod. |
| **Shrimps** | Nautilus Shell | \$500 | Boosts Sunfish, Goldfish, Nemo, Carp ($2\times$). Max 100 on rod. |
| **Fresh Water** | Custom Head | \$1,500 | Doubles ($2\times$) both **Epic** & **Legendary** fish rates. Max 64 on rod. |
| **Epic Elixir** | Honey Bottle | \$5,000 | Pure $2\times$ multiplier for **Epic** tier fish. Max 64 on rod. |
| **Legendary Lure** | Golden Carrot | \$15,000 | Pure $2\times$ multiplier for **Legendary** tier fish. Max 20 on rod. |
| **Infinite Bait** | Ender Pearl | \$250,000 | Permanent $2\times$ Legendary boost that never depletes. |

### How to Apply Baits
1. Hold your fishing rod and type `/emf applybaits` (or drag and drop the bait item directly onto your fishing rod inside your inventory).
2. Socket your desired bait into an available slot.
3. Once equipped, bait slots appear in your rod's lore description.

---

## 3. The Deep Sea Spawner Merchant (`/spawners`)

Smart Spawners cannot be purchased directly with raw money. Instead, the server uses a dedicated physical barter system: exchange your custom fish directly for authentic Smart Spawners.

Type `/spawners` or `/fishbarter` anywhere on the server to open the merchant interface:

```
       DEEP SEA SPAWNER BARTER MATRIX
+-----------------------------------------------------------+
| Tier 1: Common Mobs    | Cost: 32x Rare Fish              |
|  - Zombie Spawner       - Skeleton Spawner                |
|  - Spider Spawner       - Cave Spider Spawner             |
+-----------------------------------------------------------+
| Tier 2: Valuable Mobs  | Cost: 16x Epic Fish              |
|  - Blaze Spawner        - Creeper Spawner                 |
|  - Magma Cube Spawner   - Slime Spawner                   |
+-----------------------------------------------------------+
| Tier 3: Endgame Mobs   | Cost: 4-6x Legendary Fish        |
|  - Enderman Spawner (4) - Witch Spawner (4)               |
|  - Guardian Spawner (4) - Iron Golem Spawner (6)          |
+-----------------------------------------------------------+
| Tier 4: Mythic Bosses  | Cost: 8-10x Legendary Fish       |
|  - Wither Skeleton (8)  - Evoker Spawner (8)              |
|  - Warden Spawner (10)                                    |
+-----------------------------------------------------------+
```

---

## 4. Smart Spawner Automation & Upgraded Limits

Spawners on LlamaCraft feature an upgraded high-capacity automation engine:

* **Internal Storage**: Smart Spawners hold up to **3 storage pages (135 item slots)** and up to **30,000 stored EXP**.
* **Massive Stacking**: Hold identical spawners and **Shift + Right-Click** a placed spawner to stack up to **30,000 spawners** into a single block.
* **Rapid Generation**: Spawners cycle every **5 seconds** (upgraded from 27s), generating 1 to 3 mob yields per cycle.
* **Mending Support**: Spawners automatically repair items enchanted with Mending using the spawner's stored EXP reserve.
* **Proximity Range**: Spawners activate whenever any player is within **16 blocks**.
* **Explosion Immunity**: Placed spawners are immune to TNT and Creeper blast destruction.
* **Hopper Automation**: Hoppers collect up to 5 item stacks per second.

### How to Break & Move Spawners
* **Silk Touch Requirement**: Use an **Iron, Golden, Diamond, or Netherite Pickaxe** enchanted with **Silk Touch I**.
* Mining consumes 50 tool durability.
* Spawners go directly into your inventory.
* **Shift + Break**: Break off up to 64 spawners from a massive stack at once.

### Natural Dungeon Spawners
Natural spawners found in dungeons and fortresses can be mined with Silk Touch. They have a **60% chance** to convert directly into a Smart Spawner item when broken.

---

## 5. Instant Crop Harvesting (`Harvester`)

Farming crops is streamlined on LlamaCraft:
* **One-Click Harvest**: Hold any **Hoe** and **Right-Click** fully grown wheat, carrots, potatoes, beetroot, or nether wart.
* **Zero Durability Loss**: Right-click harvesting does not consume hoe durability.
* **Instant Auto-Replant**: Mature crops drop their yield and automatically replant seeds instantly.

---

## 6. Mob Drops Economy Cheat Sheet (`/shop`)

Sell excess mob loot at `/shop` for continuous income (buffed by 1.5x):

| Mob Drop Item | Sells For (Each) | Sells For (Full 64 Stack) | Source Recommendation |
| :--- | :---: | :---: | :--- |
| **Shulker Shell** | \$750.00 | \$48,000.00 | End Dimension Farm |
| **Wither Skeleton Skull** | \$375.00 | \$24,000.00 | Tier 4 Spawner (`/spawners`) |
| **Zombie / Creeper Head** | \$225.00 | \$14,400.00 | Charged Creeper / Spawner Farm |
| **Phantom Membrane** | \$75.00 | \$4,800.00 | Night Hunter |
| **Blaze Rod** | \$45.00 | \$2,880.00 | Tier 2 Spawner (`/spawners`) |
| **Breeze Rod / Ender Pearl**| \$30.00 | \$1,920.00 | Trial Chamber / Enderman Farm |
| **Slime Ball** | \$7.50 | \$480.00 | Tier 2 Spawner (`/spawners`) |
| **Rotten Flesh / Bone** | \$2.25 - \$7.50 | \$144.00 - \$480.00 | Tier 1 Spawner (`/spawners`) |
