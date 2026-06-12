// Static catalog of carbon-credit projects backing the marketplace listings.
// Each project represents a verified emission-reduction initiative.
export const PROJECTS = [
  {
    id: 'amazon-redd',
    name: 'Amazon REDD+ Conservation',
    type: 'Forestry',
    country: 'Brazil',
    registry: 'Verra VCS',
    description:
      'Avoided deforestation across 120,000 hectares of primary Amazon rainforest, protecting biodiversity and indigenous land.',
  },
  {
    id: 'kenya-cookstoves',
    name: 'Kenya Efficient Cookstoves',
    type: 'Energy Efficiency',
    country: 'Kenya',
    registry: 'Gold Standard',
    description:
      'Distribution of clean cookstoves reducing firewood demand and household air pollution for 40,000 families.',
  },
  {
    id: 'india-solar',
    name: 'Rajasthan Solar Grid',
    type: 'Renewable Energy',
    country: 'India',
    registry: 'Verra VCS',
    description:
      'A 200 MW utility-scale solar farm displacing coal-fired generation on the western Indian grid.',
  },
  {
    id: 'indonesia-mangrove',
    name: 'Sumatra Mangrove Restoration',
    type: 'Blue Carbon',
    country: 'Indonesia',
    registry: 'Plan Vivo',
    description:
      'Replanting coastal mangroves that sequester carbon and protect shorelines from erosion and storm surge.',
  },
  {
    id: 'iceland-dac',
    name: 'Hellisheidi Direct Air Capture',
    type: 'Engineered Removal',
    country: 'Iceland',
    registry: 'Puro.earth',
    description:
      'Geothermal-powered direct air capture mineralizing CO2 into basalt rock for permanent storage.',
  },
  {
    id: 'ghana-biochar',
    name: 'Ashanti Biochar Carbon Sink',
    type: 'Engineered Removal',
    country: 'Ghana',
    registry: 'Puro.earth',
    description:
      'Converting agricultural residue into stable biochar that locks carbon into soils while improving farm yields.',
  },
  {
    id: 'scotland-peatland',
    name: 'Highlands Peatland Restoration',
    type: 'Wetland Restoration',
    country: 'United Kingdom',
    registry: 'Woodland Carbon Code',
    description:
      'Rewetting degraded blanket bog to halt peat oxidation and restore one of the most carbon-dense habitats on land.',
  },
  {
    id: 'chile-wind',
    name: 'Atacama Wind Cluster',
    type: 'Renewable Energy',
    country: 'Chile',
    registry: 'Gold Standard',
    description:
      'A 150 MW wind cluster feeding clean power into the northern Chilean grid and displacing diesel generation.',
  },
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id) || null;
}
