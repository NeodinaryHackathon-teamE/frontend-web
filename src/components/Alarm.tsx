import styles from "./Alarm.module.scss";
import AlarmIcon from "@/assets/alarm.svg";

const Alarm = () => {
  return (
    <div className={styles.alarm}>
      <img src={AlarmIcon} alt="확성기" />
      <span>5,917명이 공감한 시설 파손 문제</span>
    </div>
  );
};
export default Alarm;
