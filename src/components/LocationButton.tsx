import styles from "./LocationButton.module.scss";
import NearIcon from "@/assets/near_me.svg";

const LocationButton = () => {
  return (
    <div className={styles["location-button"]}>
      <img src={NearIcon} alt="화살표" />
      <span>서울특별시 마포구 공덕동</span>
    </div>
  );
};
export default LocationButton;
