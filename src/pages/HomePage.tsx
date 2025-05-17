import React from "react";
import PlaceCard from "../components/PlaceCard"; // 경로는 프로젝트 구조에 맞게 수정
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      홈페이지입니다.
      <div className="card-list">
        <PlaceCard title="자연 훼손" likes={52} status="waiting" />
        <PlaceCard title="시설 파손" likes={31} status="waiting" />
        <PlaceCard title="도로 안전" likes={127} status="solved" />
        <PlaceCard title="무단 투기" likes={127} status="solved" />
      </div>
    </div>
  );
};

export default HomePage;
