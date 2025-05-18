// components/Map/CustomOverlay.tsx
import { OverlayView } from "@react-google-maps/api";
import styles from "@/components/Map/CustomMarker.module.scss";
import React from "react";
import classNames from "classnames";

import LikeIcon from "@/assets/black-heart.svg?react";
import WhiteLikeIcon from "@/assets/white-heart.svg?react";

import DeleteIcon from "@/assets/delete.svg?react";
import ParkIcon from "@/assets/park.svg?react";
import RoadIcon from "@/assets/road.svg?react";
import WhiteDeleteIcon from "@/assets/delete-white.svg?react";
import WhiteParkIcon from "@/assets/park-white.svg?react";
import WhiteRoadIcon from "@/assets/road-white.svg?react";

export interface CustomMarkerProps {
  position: google.maps.LatLngLiteral;
  category: string;
  status: boolean;
  like: number;
  onClick?: () => void;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({
  position,
  category,
  like,
  status,
  onClick,
}) => {
  const getCategoryIcon = (category: string, isPoint: boolean = false) => {
    switch (category) {
      case "자연훼손":
        return isPoint ? <WhiteParkIcon /> : <ParkIcon />;
      case "시설물파손":
        return isPoint ? <WhiteParkIcon /> : <ParkIcon />;
      case "쓰레기투기":
        return isPoint ? <WhiteDeleteIcon /> : <DeleteIcon />;
      case "도로안전":
        return isPoint ? <WhiteRoadIcon /> : <RoadIcon />;
    }
  };

  const markerClass = classNames(styles.marker, {
    [styles.point]: like >= 10,
  });

  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div className={markerClass} onClick={onClick}>
        <div className={styles.title}>
          {getCategoryIcon(category, like >= 10)}
          <strong className={styles.category}>{category}</strong>
          <span className={styles.status}>{status ? "완료" : "대기"}</span>
        </div>
        <div className={styles.like}>
          {like >= 10 ? <WhiteLikeIcon /> : <LikeIcon />}
          <span className={styles.count}>{like}명</span>
        </div>
      </div>
    </OverlayView>
  );
};

export default CustomMarker;
