const brandsIcons = require('./icons/all.js').icon;
interface Window {
  __webinmars: any;
}

if (typeof window !== 'undefined') {
  window.__webinmars = window.__webinmars || { iconSet: {} };
  window.__webinmars.iconSet.brands = brandsIcons;
}
