import regularIcons from './icons/regular-icons';

export function selectIconRegular(name: any, type: any) {
  return name && type && regularIcons[name as keyof object];
}
