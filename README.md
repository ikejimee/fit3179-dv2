# Australia's Great Outdoors — FIT3179 Data Visualisation 2

An interactive single-page visualisation of adventure-tourism and outdoor-activity
participation across Australia, built with **Vega-Lite** and **Pure.css**.

**Live page:** _(add your GitHub Pages URL here once published)_

## Topic
Adventure tourism activities (bush walking, cycling, kayaking, mountain biking,
rock climbing, surfing, …) — comparing activity types, participation and how they
vary by state, sex and age across Australia.

## Structure
```
index.html                      the page (Pure.css layout, narrative, embeds)
css/styles.css                  styling and typography
js/vega_lite_vis.js             minimal JS — embeds the 5 charts
choropleth_map.vg.json          MAP: participation by state (activity dropdown)
ranked_bar.vg.json              most popular adventure activities
dumbbell_gender.vg.json         male vs female participation
heatmap_state_activity.vg.json  activity × state heatmap
age_small_multiples.vg.json     participation by age group (faceted)
data/activity_national.csv      national rate, male, female per activity
data/activity_by_state.csv      per-state rate for 9 adventure activities
data/activity_age_national.csv  national rate by age group
data/au_states.topojson         Australia state/territory boundaries (basemap)
```

## Data sources
- **AusPlay** survey, Jan–Dec 2025 data tables (national + 8 states/territories),
  Australian Sports Commission, released 30 April 2026. Licence CC BY 4.0.
- **Australia state/territory boundaries** — ABS STE 2011 (via the FIT3179
  Vega-Lite teaching repository). Licence CC BY.

## Colour
All palettes are colour-blind-safe: `yellowgreenblue` (map), `viridis` (heatmap),
and an Okabe–Ito blue/orange pair for the male/female comparison.

## AI use
AI (Claude) assisted with cleaning the AusPlay spreadsheets into tidy CSVs,
drafting the Vega-Lite specs, and page copy/layout. All values are unmodified
official AusPlay figures.
