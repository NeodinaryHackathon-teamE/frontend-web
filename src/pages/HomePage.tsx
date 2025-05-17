import React from "react";
import PlaceCard from "../components/PlaceCard"; // 경로는 프로젝트 구조에 맞게 수정
import "./HomePage.scss";
import BuildingIcon from "../assets/building.svg";
import RoadIcon from "../assets/road.svg";
import TreeIcon from "../assets/park.svg";
import TrashIcon from "../assets/trashcan.svg";
import SearchInput from "../components/SearchInput";
import "./HomePage.scss";
import BottomSheet from "../components/BottomSheet";
import useBottomSheet from "../hooks/useBottomSheet";
import Button from "@/components/Button";
import GPS from "@/assets/gps.svg";
import Report from "@/assets/report.svg";
import Person from "@/assets/person.svg";
import BackArrow from "@/assets/back-arrow.svg";
import Alarm from "@/components/Alarm";
import LocationButton from "@/components/LocationButton";
import CloseIcon from "@/assets/close.svg";
import Chip from "@/components/Chip";

import "./HomePage.scss";
import { useBottomSheetStack } from "@/hooks/useBottomSheetStack";
import MainScreen from "@/components/BottomSheetScreen/MainScreen";
import ReportedScreen from "@/components/BottomSheetScreen/ReportedScreen";

const demoScreens = [
  { name: "main", title: "메인", component: MainScreen },
  { name: "detail", title: "상세", component: ReportedScreen },
];

const HomePage = () => {
  const { isOpen, open, close, push, pop, stack } = useBottomSheetStack();

  const current = stack[stack.length - 1];
  const canGoBack = stack.length > 1;
  const activeScreen = demoScreens.find((screen) => screen.name === current);
  const ScreenComponent = activeScreen?.component;

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
          status="complete"
        />
        <PlaceCard
          title="무단 투기"
          icon={TrashIcon}
          likes={127}
          status="complete"
        />
        <SearchInput />
      </div>
      <button onClick={open}>바텀 시트 열기</button>
      <BottomSheet
        isOpen={isOpen}
        onClose={close}
        onBack={canGoBack ? pop : undefined}
        title={activeScreen?.title}
        canGoBack={canGoBack}
      >
        {ScreenComponent && <ScreenComponent push={push} />}
      </BottomSheet>
      <Button iconOnly>
        <img src={GPS} alt="gps" />
      </Button>
      <LocationButton />
      <Button iconOnly>
        <img src={Report} alt="report" />
      </Button>
      <Button iconOnly>
        <img src={Person} alt="person" />
      </Button>
      <Button iconOnly>
        <img src={BackArrow} alt="person" />
      </Button>
      <Alarm />
      <Chip icon={CloseIcon} label="대기" />
    </div>
  );
};

export default HomePage;
