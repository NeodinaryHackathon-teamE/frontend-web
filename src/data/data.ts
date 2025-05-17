import BuildingIcon from "../assets/building.svg";
import RoadIcon from "../assets/road.svg";
import TreeIcon from "../assets/park.svg";
import TrashIcon from "../assets/trashcan.svg";

const placeCardData = [
  {
    icon: TreeIcon,
    title: "자연 훼손",
    address: "서울 마포구 상암동",
    description:
      "흡연으로 인해 주변 환경이 많이 훼손된 상태입니다. 특히 흡연구역 근처 풀들이 많이 훼손되었습니다.",
    likes: 520,
    status: "waiting" as const,
  },
  {
    icon: RoadIcon,
    title: "도로 안전",
    address: "서울 종로구",
    description: "보도블럭이 깨져있습니다",
    likes: 300,
    status: "complete" as const,
  },
];

export default placeCardData;
