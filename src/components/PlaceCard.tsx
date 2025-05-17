import React, { useState } from "react";
import "./_placeCard.scss";
import Badge from "./Badge"; // Badge 컴포넌트 불러오기
import LikeIcon from "../assets/like.svg";

interface PlaceCardProps {
  title: string;
  likes: number;
  status: "waiting" | "solved";
  icon: string;
}

const PlaceCard = ({ title, likes, status, icon }: PlaceCardProps) => {
  const [liked, setLiked] = useState(false);

  // Badge에 넘길 type과 label 매핑
  const badgeType = status === "waiting" ? "waiting" : "complete";
  const badgeLabel = status === "waiting" ? "대기" : "해결";

  return (
    <div className="place-card">
      <div className="title">
        <img src={icon} alt="아이콘" className="icon" />
        <span>{title}</span>
      </div>

      <div className="likes" onClick={() => setLiked(!liked)}>
        <img
          src={liked ? heartActiveIcon : LikeIcon}
          alt="좋아요"
          className="heart"
        />
        <span className={`like-text ${liked ? "active" : ""}`}>
          {likes + (liked ? 1 : 0)}
        </span>

        <Badge type={badgeType} label={badgeLabel} />
      </div>
    </div>
  );
};

export default PlaceCard;
