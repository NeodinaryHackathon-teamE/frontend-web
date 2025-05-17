interface MainScreenProps {
  push: (screen: string) => void;
}

const MainScreen = ({ push }: MainScreenProps) => {
  return (
    <div>
      <h3>화면 1</h3>
      <button onClick={() => push('detail')}>화면 2로 이동</button>
    </div>
  );
};

export default MainScreen;