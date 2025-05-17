// Marker.tsx 예시
import { useEffect, useRef } from 'react';

interface MarkerProps {
  map: google.maps.Map;
  position: google.maps.LatLngLiteral;
  title?: string;
}

const Marker = ({ map, position, title }: MarkerProps) => {
  const markerRef = useRef<google.maps.marker.AdvancedMarkerView | null>(null);

  useEffect(() => {
    if (!map) return;

    const marker = new google.maps.marker.AdvancedMarkerView({
      map,
      position,
      title,
    });

    markerRef.current = marker;
    console.log('AdvancedMarkerView created:', marker);

    return () => {
      marker.map = null;
      console.log('Marker removed from map');
    };
  }, [map, position, title]);

  return null;
};

export default Marker;
