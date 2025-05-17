import styles from "@/components/BottomSheetScreen/LoginScreen.module.scss";
interface MainScreenProps {
  push: (screen: string) => void;
}

const MainScreen = ({ push }: MainScreenProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>로그인</h2>

      <div className={styles.field}>
        <label htmlFor="id">아이디</label>
        <div className={styles.inputWrapper}>
          <input type="text" id="id" placeholder="아이디를 입력해주세요" />
          <button className={styles.clear}>×</button>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="password">비밀번호</label>
        <div className={styles.inputWrapper}>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <button className={styles.clear}>×</button>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.secondary}>회원가입</button>
        <button className={styles.primary}>로그인</button>
      </div>
    </div>
  );
};

export default MainScreen;
