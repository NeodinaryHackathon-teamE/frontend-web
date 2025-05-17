import styles from "./Badge.module.scss";
import classNames from "classnames";

interface BadgeProps {
  type?: "default" | "complete" | "waiting";
  label: string;
  selected?: boolean;
}

const Badge = ({ type = "default", label, selected = false }: BadgeProps) => {
  return (
    <div
      className={classNames(
        styles.badge,
        styles[`badge--${type}`],
        selected && styles["badge--selected"]
      )}
    >
      {label}
    </div>
  );
};

export default Badge;
