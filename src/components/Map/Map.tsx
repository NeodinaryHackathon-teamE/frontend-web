import { useCallback, useEffect, useState } from "react";
import styles from "@/components/Map/Map.module.scss";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import CustomMarker from "./CustomMarker";
import { Post, getAllPostList } from "@/api";
import { useBottomSheetStack } from "@/hooks/useBottomSheetStack";
import ReportedScreen from "@/components/BottomSheetScreen/ReportedScreen";
const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

import BottomSheet from "@/components/BottomSheet/BottomSheet";
const containerStyle: React.CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
};

const center = {
  lat: 37.5350711,
  lng: 126.9662972,
};

const Map = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });
  const { isOpen, open, push, stack, close } = useBottomSheetStack();
  const current = stack[stack.length - 1];
  const fetchPosts = async () => {
    try {
      const postList = await getAllPostList();
      setPosts(postList);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
    fetchPosts();
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMarkerClick = (postId: number) => {
    setSelectedPostId(postId); // ✅ 선택된 post 저장
    if (!isOpen) open(); // ✅ 바텀시트 열기
    push("reported"); // ✅ 'reported' 화면으로 전환
  };

  if (!isLoaded) return null;

  return (
    <>
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
              featureType: "poi",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
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
            onClick={() => handleMarkerClick(post.postId)}
          />
        ))}
      </GoogleMap>
      <BottomSheet isOpen={isOpen} onClose={close}>
        {current == "reported" && selectedPostId !== null && (
          <ReportedScreen postId={selectedPostId} push={push} />
        )}
      </BottomSheet>
    </>
  );
};

export default Map;
