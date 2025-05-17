import React from "react";
import { useState } from "react";
import PlaceCard from "../components/PlaceCard"; // 경로는 프로젝트 구조에 맞게 수정
import "./HomePage.scss";

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
import placeCardData from "@/data/data";
import "./HomePage.scss";
import { useBottomSheetStack } from "@/hooks/useBottomSheetStack";
import MainScreen from "@/components/BottomSheetScreen/MainScreen";
import ReportedScreen from "@/components/BottomSheetScreen/ReportedScreen";
import Badge from "@/components/Badge";
import reportedStyles from "@/components/BottomSheetScreen/ReportedScreen.module.scss";
import LoginScreen from "@/components/BottomSheetScreen/LoginScreen";
import SignupScreen from "@/components/BottomSheetScreen/SignupScreen";
import ReportScreen from "@/components/BottomSheetScreen/ReportScreen";

const demoScreens = [
  { name: "main", title: "메인", component: MainScreen },
  { name: "detail", title: "상세", component: ReportedScreen },
  { name: "login", title: "로그인", component: LoginScreen },
  { name: "signup", title: "회원가입", component: SignupScreen },
  { name: "report", title: "제보글 작성", component: ReportScreen },
];
type PlaceCardData = (typeof placeCardData)[number];
const HomePage = () => {
  const { isOpen, open, close, push, pop, stack } = useBottomSheetStack();
  const [selectedCard, setSelectedCard] = useState<PlaceCardData | null>(null);

  const current = stack[stack.length - 1];
  const canGoBack = stack.length > 1;
  const activeScreen = demoScreens.find((screen) => screen.name === current);
  const ScreenComponent = activeScreen?.component;

  return (
    <div className="home-page">
      홈페이지입니다.
      <div className="card-list">
        {placeCardData.map((card) => (
          <PlaceCard
            key={card.title}
            {...card} // = title={card.title} icon={card.icon} likes={card.likes} status={card.status}
            selected={selectedCard?.title === card.title}
            onClick={() => {
              console.log("Clicked:", card.title);
              setSelectedCard(card); // 선택된 카드 기억
              if (!isOpen) open(); // 바텀시트 열기
              if (stack[stack.length - 1] !== "detail") push("detail"); // 상세화면 이동
            }}
          />
        ))}
      </div>
      <SearchInput />
      <button onClick={open}>바텀 시트 열기</button>
      <BottomSheet
        isOpen={isOpen}
        onClose={() => {
          close();
          setSelectedCard(null); // 닫을 때 선택 초기화
        }}
        onBack={canGoBack ? pop : undefined}
        title={activeScreen?.title}
        canGoBack={canGoBack}
        header={
          <div className={reportedStyles.header}>
            <span className={reportedStyles.title}>{selectedCard?.title}</span>
            <Badge
              type={selectedCard?.status === "waiting" ? "waiting" : "complete"}
              label={selectedCard?.status === "waiting" ? "대기" : "완료"}
              selected={false}
            />
          </div>
        }
      >
        {ScreenComponent && selectedCard && (
          <ScreenComponent
            push={push}
            title={selectedCard.title}
            address={selectedCard.address}
            description={selectedCard.description}
            likes={selectedCard.likes}
            status={selectedCard.status}
          />
        )}
        {current === "login" && <LoginScreen push={push} />}
        {current === "signup" && <SignupScreen push={push} />}
      </BottomSheet>
      <Button iconOnly>
        <img src={GPS} alt="gps" />
      </Button>
      <LocationButton />
      <Button
        iconOnly
        onClick={() => {
          if (!isOpen) open();
          setSelectedCard(null);
          push("report");
        }}
      >
        <img src={Report} alt="report" />
      </Button>
      <Button
        iconOnly
        onClick={() => {
          if (!isOpen) open();
          setSelectedCard(null);
          push("login");
          // 무조건 스택을 'login'으로 전환
        }}
      >
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
