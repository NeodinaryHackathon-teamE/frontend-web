import React from 'react';
import PlaceCard from '../components/PlaceCard'; // 경로는 프로젝트 구조에 맞게 수정
import './HomePage.scss';
import BottomSheet from '../components/BottomSheet';
import useBottomSheet from '../hooks/useBottomSheet';

const HomePage = () => {
  const { isOpen, open, close } = useBottomSheet();

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
      <BottomSheet isOpen={isOpen} onClose={close}>
        <h2>바텀 시트</h2>
        <p>내용을 여기에 넣으세요.</p>
        <button onClick={close}>닫기</button>
      </BottomSheet>
    </div>
  );
};

export default HomePage;
