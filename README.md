# Australia's Great Outdoors - FIT3179 Data Visualisation 2

An interactive single-page visualisation of adventure-tourism and outdoor-activity
participation across Australia, built with **Vega-Lite** and **Pure.css**.

**Author:** Bethany Aung - Student ID 34960627
**Live page:** https://ikejimee.github.io/fit3179-dv2/

## Topic
Adventure activities (bush walking, cycling, kayaking, mountain biking, rock
climbing, surfing, and more). The page compares activity types, participation,
sex and age across Australia.

## Files
```
index.html                      the page (hero, intro, 5 sections, footer)
hero.jpg                        hero photograph (Wineglass Bay, Tasmania)
css/styles.css                  two-colour theme, typography, layout
js/vega_lite_vis.js             minimal JS — embeds the 5 charts
choropleth_map.vg.json          MAP: participation by state (activity dropdown, single-hue scale)
ranked_bar.vg.json              most popular adventure activities
dumbbell_gender.vg.json         men vs women participation
heatmap_state_activity.vg.json  activity × state heatmap
age_small_multiples.vg.json     participation by age group (faceted)
data/activity_national.csv      national rate, male, female per activity
data/activity_by_state.csv      per-state rate for 9 adventure activities
data/activity_age_national.csv  national rate by age group
data/au_states.topojson         Australia state/territory boundaries (basemap)
```


## Data sources
- **AusPlay** survey, Jan–Dec 2025 data tables (national and 8 states/territories),
  Australian Sports Commission, released 30 April 2026. CC BY 4.0.
- **State boundaries:** ABS STE 2011, via the FIT3179 Vega-Lite teaching repository. CC BY.
- **Hero photograph:** Wineglass Bay, Tasmania, Signature Luxury Travel & Style.

