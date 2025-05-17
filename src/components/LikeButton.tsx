import { useState } from "react";
import styles from "./LikeButton.module.scss";
import LikeIcon from "@/assets/like.svg"; // 비활성화 하트
import WhiteHeart from "@/assets/white-heart.svg"; // 활성화 하트
import classNames from "classnames";

interface LikeButtonProps {
  initialLikes: number;
}

const LikeButton = ({ initialLikes }: LikeButtonProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleClick = () => {
    if (!liked) {
      setLiked(true);
      setLikes((prev) => prev + 1);
    }
  };

  return (
    <button
      className={classNames(styles.button, liked && styles.liked)}
      onClick={handleClick}
    >
      <img
        src={liked ? WhiteHeart : LikeIcon}
        alt="좋아요"
        className={styles.icon}
      />
      <span className={styles.text}>{likes}명</span>
    </button>
  );
};

export default LikeButton;
