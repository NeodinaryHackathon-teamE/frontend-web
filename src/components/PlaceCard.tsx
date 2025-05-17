import React, { useState } from "react";
import "./_placeCard.scss";

const PlaceCard = ({
  title,
  likes,
  status,
}: {
  title: string;
  likes: number;
  status: "waiting" | "solved";
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="place-card">
      <div className="title">{title}</div>

      <div className="likes">
        <div
          className={`heart ${liked ? "active" : ""}`}
          onClick={() => setLiked(!liked)}
        />
        <span className={`like-text ${liked ? "active" : ""}`}>
          {likes + (liked ? 1 : 0)}
        </span>
      </div>

      <div className={`status ${status}`}>
        {status === "waiting" ? "대기" : "해결"}
      </div>
    </div>
  );
};

export default PlaceCard;
