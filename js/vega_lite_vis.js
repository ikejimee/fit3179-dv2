// Minimal JavaScript: load each Vega-Lite spec into its container.
// (Same vegaEmbed pattern as the FIT3179 Week 7 studio.)

const embedOpt = { renderer: "svg", actions: false };

const charts = [
  { id: "#map_choropleth", spec: "choropleth_map.vg.json" },
  { id: "#chart_ranked",   spec: "ranked_bar.vg.json" },
  { id: "#chart_dumbbell", spec: "dumbbell_gender.vg.json" },
  { id: "#chart_heatmap",  spec: "heatmap_state_activity.vg.json" },
  { id: "#chart_age",      spec: "age_small_multiples.vg.json" },
  { id: "#map_protected",  spec: "capad_prop_symbol.vg.json" },
  { id: "#map_parks",      spec: "capad_dot_map.vg.json" },
  { id: "#chart_treemap",  spec: "treemap_category.vg.json" },
  { id: "#chart_slope",    spec: "slope_tourism.vg.json" },
  { id: "#chart_lollipop", spec: "lollipop_tourism.vg.json" },
  { id: "#chart_butterfly", spec: "butterfly_capital_regional.vg.json" }
];

charts.forEach(function (c) {
  vegaEmbed(c.id, c.spec, embedOpt).catch(console.error);
});
