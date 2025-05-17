import { useEffect, useRef, useState } from 'react';
import styles from '@/components/Map/GoogleMap.module.scss';
import Marker from '@/components/Map/Marker';

const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const [center, setCenter] = useState({ lat: 37.5665, lng: 126.978 });
  const [isMapReady, setIsMapReady] = useState(false);
  const [isAdvancedMarkerReady, setIsAdvancedMarkerReady] = useState(false);

  useEffect(() => {
    if (document.querySelector('#google-maps-script')) return;

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=weekly&libraries=marker`;
    script.defer = true;

    script.onload = () => {
      if (!mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 13,
        disableDefaultUI: true,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
          },
        ],
      });

      mapInstance.current = map;
      setIsMapReady(true);
      if (google.maps?.marker?.AdvancedMarkerView) {
        console.log('✅ AdvancedMarkerView is available');
        setIsAdvancedMarkerReady(true);
      } else {
        console.warn('⚠️ AdvancedMarkerView is NOT available');
        setIsAdvancedMarkerReady(false);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.getElementById('google-maps-script')?.remove();
    };
  }, []);

  useEffect(() => {
    window.ReactNativeWebView?.postMessage(JSON.stringify({ type: 'ready' }));
  }, []);

  useEffect(() => {
    if (mapInstance.current) {
      mapInstance.current.setCenter(center);
    }
  }, [center]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        if (data.lat && data.lng) {
          setCenter({ lat: data.lat, lng: data.lng });
        }
      } catch (e) {
        console.warn('Invalid message data:', e);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      <span className={styles.debug}>
        {center.lat} {center.lng}
      </span>
      <div className={styles.container} ref={mapRef}>
        {isMapReady && isAdvancedMarkerReady && mapInstance.current && (
          <Marker
            map={mapInstance.current}
            position={center}
            title="서울 시청"
          />
        )}
      </div>
    </>
  );
};

export default GoogleMap;
