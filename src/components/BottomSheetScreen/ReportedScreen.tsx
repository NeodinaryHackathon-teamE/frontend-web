import styles from "@/components/BottomSheetScreen/ReportedScreen.module.scss";
import imageArea from "@/assets/Image-area.svg";
import LikeButton from "@/components/LikeButton";
import axios from "axios";
import { useEffect, useState } from "react";

interface ReportedScreenProps {
  push: (screen: string) => void;
  postId: number;
}

const ReportedScreen = ({ push, postId }: ReportedScreenProps) => {
  const [post, setPost] = useState<any>(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `http://3.37.144.218:8080/api/v1/post/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.error("게시글 불러오기 실패", err);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) return <div className={styles.loading}>로딩 중...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>{post.title}</div>
      <div className={styles.info}>
        <p className={styles.address}>{post.place}</p>
        <p className={styles.description}>{post.content}</p>
      </div>
      <div className={styles.imageBox}>
        {post.imageUrls?.map((url: string, index: number) => (
          <img
            key={index}
            src={url}
            alt={`image-${index}`}
            className={styles.imageArea}
          />
        ))}
      </div>
      <div className={styles.likes}>
        <LikeButton initialLikes={post.likeCount} />
        좋아요를 눌러 이 제보에 공감을 표현해주세요
      </div>
    </div>
  );
};

export default ReportedScreen;
