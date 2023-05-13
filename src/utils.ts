export interface LocationAPI {
  address: {
    country: string;
    state: string;
  };
}

export function getLocation(): Promise<LocationAPI> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          resolve(data);
        } catch (error) {
          reject(error);
        }
      }
    );
  });
}

export interface FnParams {
  name: string;
  price: number;
  type: string;
}

type SortOptions = 'A-Z' | 'Z-A' | 'highest' | 'lowest';

export function sortProducts(
  filteredProducts: FnParams[],
  sortOption: SortOptions
) {
  switch (sortOption) {
    case 'A-Z':
      return filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

    case 'Z-A':
      return filteredProducts.sort((a, b) => b.name.localeCompare(a.name));

    case 'highest':
      return filteredProducts.sort((a, b) => b.price - a.price);

    case 'lowest':
      return filteredProducts.sort((a, b) => a.price - b.price);
  }
}
