import React, { useState } from "react";
import styles from "./PlaceCard.module.scss";
import Badge from "./Badge"; // Badge 컴포넌트 불러오기
import LikeIcon from "../assets/like.svg";
import classNames from "classnames";
import WhiteLike from "@/assets/white-heart.svg";
interface PlaceCardProps {
  title: string;
  likes: number;
  status: "waiting" | "complete";
  icon: string;
  selected?: boolean;
  onClick?: () => void;
}

const PlaceCard = ({
  title,
  likes,
  status,
  icon,
  selected = false,
  onClick,
}: PlaceCardProps) => {
  const [liked, setLiked] = useState(false);

  // Badge에 넘길 type과 label 매핑
  const badgeType = status === "waiting" ? "waiting" : "complete";
  const badgeLabel = status === "waiting" ? "대기" : "완료";

  return (
    <div
      className={classNames(
        styles["place-card"],
        status === "complete" && styles["place-card--complete"],
        selected && styles["place-card--selected"]
      )}
      onClick={onClick}
    >
      <div className={styles.title}>
        <img src={icon} alt="아이콘" className="icon" />
        <span>{title}</span>
        <Badge type={badgeType} label={badgeLabel} selected={selected} />
      </div>

      <div className={styles.likes}>
        <img
          src={selected ? WhiteLike : LikeIcon}
          alt="좋아요"
          className="heart"
        />
        <span>{likes + (liked ? 1 : 0)}명</span>
      </div>
    </div>
  );
};

export default PlaceCard;
