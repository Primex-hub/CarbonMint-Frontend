// Reference data for the carbon-credit registries and standards that certify
// the projects backing marketplace listings. Used for badges and filters.
export const STANDARDS = [
  {
    id: 'verra-vcs',
    name: 'Verra VCS',
    fullName: 'Verified Carbon Standard',
    url: 'https://verra.org',
  },
  {
    id: 'gold-standard',
    name: 'Gold Standard',
    fullName: 'Gold Standard for the Global Goals',
    url: 'https://www.goldstandard.org',
  },
  {
    id: 'plan-vivo',
    name: 'Plan Vivo',
    fullName: 'Plan Vivo Standard',
    url: 'https://www.planvivo.org',
  },
  {
    id: 'puro-earth',
    name: 'Puro.earth',
    fullName: 'Puro Standard',
    url: 'https://puro.earth',
  },
  {
    id: 'woodland-carbon-code',
    name: 'Woodland Carbon Code',
    fullName: 'UK Woodland Carbon Code',
    url: 'https://woodlandcarboncode.org.uk',
  },
];

/**
 * Look up a standard by its display name.
 * @param {string} name
 * @returns {object | null}
 */
export function getStandardByName(name) {
  return STANDARDS.find((s) => s.name === name) || null;
}
