import React from "react";
import PlaceCard from "../components/PlaceCard"; // 경로는 프로젝트 구조에 맞게 수정
import "./HomePage.scss";
import BuildingIcon from "../assets/building.svg";
import RoadIcon from "../assets/road.svg";
import TreeIcon from "../assets/park.svg";
import TrashIcon from "../assets/trashcan.svg";
import SearchInput from "../components/SearchInput";

const HomePage = () => {
  return (
    <div className="home-page">
      홈페이지입니다.
      <div className="card-list">
        <PlaceCard
          title="자연 훼손"
          icon={TreeIcon}
          likes={52}
          status="waiting"
        />
        <PlaceCard
          title="시설 파손"
          icon={BuildingIcon}
          likes={31}
          status="waiting"
        />
        <PlaceCard
          title="도로 안전"
          icon={RoadIcon}
          likes={127}
          status="solved"
        />
        <PlaceCard
          title="무단 투기"
          icon={TrashIcon}
          likes={127}
          status="solved"
        />
        <SearchInput />
      </div>
    </div>
  );
};

export default HomePage;
