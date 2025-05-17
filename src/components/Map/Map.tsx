import { memo, useCallback, useState } from 'react';
import styles from '@/components/Map/Map.module.scss';
import { GoogleMap, useJsApiLoader, MarkerF, OverlayView } from '@react-google-maps/api';

const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const containerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
};

const center = {
  lat: 37.5665,
  lng: 126.978,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded) return null;

  return (
    <>
      <span className={styles.debug}>
        {center.lat} {center.lng}
      </span>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          disableDefaultUI: true,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels.icon',
              stylers: [{ visibility: 'off' }],
            },
          ],
        }}
      >
      </GoogleMap>
    </>
  );
};

export default Map;
