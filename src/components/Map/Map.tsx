import { useCallback, useEffect, useState } from 'react';
import styles from '@/components/Map/Map.module.scss';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import CustomMarker from './CustomMarker';
import { Post, getAllPostList } from '@/api';

const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const containerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
};

const center = {
  lat: 37.5350711,
  lng: 126.9662972,
};

const Map = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  const fetchPosts = async () => {
    try {
      const postList = await getAllPostList();
      setPosts(postList);
    } catch (err) {
      console.error('Error fetching posts:', err);
    }
  };

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
    fetchPosts();
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
        zoom={14}
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
        {posts.map((post) => (
          <CustomMarker
            key={post.postId}
            position={{ lat: post.latitude, lng: post.longitude }}
            category={post.category}
            status={post.status}
            like={post.likeCount}
          />
        ))}
      </GoogleMap>
    </>
  );
};

export default Map;
