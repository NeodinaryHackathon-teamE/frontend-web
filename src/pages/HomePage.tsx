import PlaceCard from '@/components/PlaceCard'; // 경로는 프로젝트 구조에 맞게 수정
import './HomePage.scss';
import { useBottomSheetStack } from '@/hooks/useBottomSheetStack';
import MainScreen from '@/components/BottomSheetScreen/MainScreen';
import ReportedScreen from '@/components/BottomSheetScreen/ReportedScreen';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import useBottomSheet from '@/hooks/useBottomSheet';

const demoScreens = [
  { name: 'main', title: '메인', component: MainScreen },
  { name: 'detail', title: '상세', component: ReportedScreen },
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
        <PlaceCard title="자연 훼손" likes={52} status="waiting" />
        <PlaceCard title="시설 파손" likes={31} status="waiting" />
        <PlaceCard title="도로 안전" likes={127} status="solved" />
        <PlaceCard title="무단 투기" likes={127} status="solved" />
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
    </div>
  );
};

export default HomePage;
