interface ReportedScreenProps {
  push: (screen: string) => void;
}

const ReportedScreen = ({ push }: ReportedScreenProps) => {
  return (
    <div>
      <h3>화면 2</h3>
    </div>
  );
};

export default ReportedScreen;
