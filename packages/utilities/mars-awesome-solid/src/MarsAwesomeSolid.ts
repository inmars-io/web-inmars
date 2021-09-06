import solidIcons from './icons/solid-icons';

declare global {
  interface Window {
    __webinmars: any;
  }
}

window.__webinmars = window.__webinmars || { iconSet: {} };
window.__webinmars.iconSet.solid = solidIcons;
