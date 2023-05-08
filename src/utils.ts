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
