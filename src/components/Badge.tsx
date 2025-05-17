import "./_badge.scss";
import classNames from "classnames";

interface BadgeProps {
  type?: "default" | "complete" | "waiting";
  label: string;
}

const Badge = ({ type = "default", label }: BadgeProps) => {
  return <span className={classNames("badge", `badge--${type}`)}>{label}</span>;
};

export default Badge;
