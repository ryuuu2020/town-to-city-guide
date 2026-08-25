#!/usr/bin/env python3
"""Town to City beach-biome-economy chart:
Relative importance of each income source inside the Beach biome,
ranked on a 1–5 qualitative scale drawn from the page table.
Bars use the site's blueprint dark palette.
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(sys.executable).parent.parent.parent))
from daimon_runtime import setup_plot  # noqa: E402

import matplotlib.pyplot as plt  # noqa: E402

setup_plot()

# Site palette, mirrored from town-to-city-guide tailwind.config.ts.
BG = "#0b1120"
CARD = "#1a2332"
TEXT = "#e2e8f0"
MUTED = "#94a3b8"
ACCENT = "#38bdf8"   # blueprint-accent (primary)
WARM = "#f97316"     # blueprint-warm (highlight)
GREEN = "#22c55e"    # blueprint-green
BORDER = "#334155"

# Same values as the "Beach biome income sources at a glance" table in page.tsx.
# The 1–5 scale is qualitative importance ranking for a Beach-biome city,
# not a fabricated dollar value.
sources = [
    "Coastal tourism",
    "Trattoria\nfood service",
    "Pizza Baker\nproduction",
    "Trade route\nexports",
    "Citizen-tier\nhousing tax",
    "Workshop\ncraft exports",
]
scores = [5, 4, 4, 3, 3, 2]
bar_colors = [WARM, WARM, ACCENT, ACCENT, GREEN, MUTED]

plt.rcParams.update({
    "figure.facecolor": BG,
    "axes.facecolor": CARD,
    "savefig.facecolor": BG,
    "text.color": TEXT,
    "axes.edgecolor": BORDER,
    "axes.labelcolor": TEXT,
    "xtick.color": TEXT,
    "ytick.color": MUTED,
    "font.size": 11,
})

fig, ax = plt.subplots(figsize=(11, 5.4))

x = list(range(len(sources)))
bars = ax.bar(x, scores, width=0.62, color=bar_colors,
              edgecolor=BORDER, linewidth=0.7)

for b, v in zip(bars, scores):
    ax.text(b.get_x() + b.get_width() / 2, v + 0.15, f"{v}",
            ha="center", va="bottom", fontsize=11, fontweight="bold",
            color=TEXT)

ax.set_xticks(x)
ax.set_xticklabels(sources, fontsize=10)
ax.set_ylabel("Player-reported importance in Beach biome (1–5)", color=TEXT)
ax.set_ylim(0, 6)
ax.set_yticks(range(0, 6, 1))

ax.set_title(
    "Town to City · Beach Biome Income-Source Ranking",
    color=ACCENT, fontsize=15, pad=14, fontweight="bold",
)
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
for spine in ("top", "right"):
    ax.spines[spine].set_visible(False)
ax.spines["left"].set_color(BORDER)
ax.spines["bottom"].set_color(BORDER)

from matplotlib.patches import Patch
legend_handles = [
    Patch(facecolor=WARM, edgecolor=BORDER, label="Core Beach loop"),
    Patch(facecolor=ACCENT, edgecolor=BORDER, label="Production chain"),
    Patch(facecolor=GREEN, edgecolor=BORDER, label="Baseline income"),
    Patch(facecolor=MUTED, edgecolor=BORDER, label="Low priority"),
]
ax.legend(handles=legend_handles, frameon=False, loc="upper right",
          fontsize=9, labelcolor=TEXT)

fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom",
         fontsize=9, color=MUTED)
fig.tight_layout(rect=[0, 0.03, 1, 0.96])

out = Path("/Users/wangxiaolong/program/游戏站/town-to-city-guide/public/images/beach-biome-economy-guide.png")
out.parent.mkdir(parents=True, exist_ok=True)
fig.savefig(out, dpi=200, bbox_inches="tight")
print(f"saved {out} {out.stat().st_size} bytes")
