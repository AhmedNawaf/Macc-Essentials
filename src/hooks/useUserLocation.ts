import { getLocation, LocationAPI } from '@/utils';
import { useState, useEffect } from 'react';

export default function useUserLocation() {
  const [location, setLocation] = useState<LocationAPI>({
    address: {
      country: '',
      state: '',
    },
  });
  useEffect(() => {
    getLocation().then((data) => setLocation(data));
  }, []);
  return {
    country: location.address.country,
    state: location.address.state.split(' ')[0],
  };
}
