import regularIcons from './icons/all.js';

export function selectIconRegular(name: any, type: any) {
  return name && type && regularIcons[name as keyof object];
}
