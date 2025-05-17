import { useEffect, useRef, useState } from 'react';
import styles from '@/components/Map/GoogleMap.module.scss';

const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: 37.5665,
    lng: 126.978,
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    script.async = true;
    script.onload = () => {
      if (!mapRef.current) {
        console.error('Failed to load map');
        return;
      }
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 13,
        disableDefaultUI: true,
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
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
    function handleMessage(event: MessageEvent) {
      try {
        const data = JSON.parse(event.data);
        if (data.lat && data.lng) {
          setCenter({ lat: data.lat, lng: data.lng });
        }
      } catch (e) {
        console.warn('Invalid message data:', e);
      }
    }

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      <span className={styles.debug}>
        {center.lat} {center.lng}
      </span>
      <div className={styles.container} ref={mapRef} />
    </>
  );
};

export default GoogleMap;
