import { useState } from "react";
import SearchInput from "../components/SearchInput";
import BottomSheet from "@/components/BottomSheet/BottomSheet";
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
import axios from "axios";
import { useBottomSheetStack } from "@/hooks/useBottomSheetStack";
import MainScreen from "@/components/BottomSheetScreen/MainScreen";
import ReportedScreen from "@/components/BottomSheetScreen/ReportedScreen";
import Badge from "@/components/Badge";
import reportedStyles from "@/components/BottomSheetScreen/ReportedScreen.module.scss";
import LoginScreen from "@/components/BottomSheetScreen/LoginScreen";
import SignupScreen from "@/components/BottomSheetScreen/SignupScreen";
import ReportScreen from "@/components/BottomSheetScreen/ReportScreen";

import styles from "@/pages/HomePage.module.scss";

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

  return (
    <div className="home-page">
      <div className={styles.top}>
        {/* <SearchInput /> */}
        <Button iconOnly>
          <img src={BackArrow} alt="person" />
        </Button>
        <Alarm />
        <Button
          iconOnly
          onClick={() => {
            if (!isOpen) open();
            setSelectedCard(null);
            push("login");
          }}
        >
          <img src={Person} alt="person" />
        </Button>
      </div>
      <button onClick={open}>바텀 시트 열기</button>
      <BottomSheet
        isOpen={isOpen}
        onClose={() => {
          close();
          setSelectedCard(null); // 닫을 때 선택 초기화
        }}
        onBack={canGoBack ? pop : undefined}
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
        {current === "login" && <LoginScreen push={push} />}
        {current === "signup" && <SignupScreen push={push} />}
      </BottomSheet>
      <div className={styles.bottom}>
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
      </div>
      <div className={styles.bottom}>
        <Chip icon={CloseIcon} label="대기" />
      </div>
    </div>
  );
};

export default HomePage;
