import styles from "@/components/BottomSheetScreen/ReportedScreen.module.scss";
import imageArea from "@/assets/Image-area.svg";
import LikeButton from "@/components/LikeButton";

interface ReportedScreenProps {
  push: (screen: string) => void;

  title: string;
  address: string;
  description: string;
  likes: number;
  status: "waiting" | "complete";
}

const ReportedScreen = ({
  push,
  address,
  description,
  likes,
}: ReportedScreenProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.address}>{address}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageBox}>
        <img src={imageArea} className={styles.imageArea} />
        <img src={imageArea} className={styles.imageArea} />
      </div>

      <LikeButton initialLikes={likes} />
    </div>
  );
};

export default ReportedScreen;
