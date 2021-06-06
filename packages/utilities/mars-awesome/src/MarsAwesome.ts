import solidIcons from './icons/solid-icons';
import regularIcons from './icons/regular-icons';
import brandsIcons from './icons/brands-icons';

interface iconSetI {
  solid: object;
  regular: object;
  brands: object;
}

export const iconSet: iconSetI = {
  solid: { ...solidIcons },
  regular: { ...regularIcons },
  brands: { ...brandsIcons },
};

export function selectIcon(name: any, type: any) {
  return name && type && iconSet[type as keyof iconSetI][name as keyof object];
}
