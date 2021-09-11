import solidIcons from './icons/all.js';

declare global {
  interface Window {
    __webinmars: any;
  }
}

window.__webinmars = window.__webinmars || { iconSet: {} };
window.__webinmars.iconSet.solid = solidIcons;