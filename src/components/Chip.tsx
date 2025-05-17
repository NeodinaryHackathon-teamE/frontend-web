import React from "react";
import { useState } from "react";
import styles from "./Chip.module.scss";

interface ChipProps {
  icon?: string; // 아이콘 경로
  label: string; // 텍스트
  className?: string; // 외부 클래스 확장 (선택)
}

const Chip = ({ icon, label, className }: ChipProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`${styles.chip} ${selected ? styles["chip--selected"] : ""} ${className || ""}`}
      onClick={() => setSelected(!selected)} //
    >
      {icon && <img src={icon} alt="icon" className={styles.icon} />}
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default Chip;
