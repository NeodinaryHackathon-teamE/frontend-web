import styles from "./SignupScreen.module.scss";

interface SignupScreenProps {
  push: (screen: string) => void;
}

const SignupScreen = ({ push }: SignupScreenProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>회원가입</h2>

      <div className={styles.field}>
        <label htmlFor="id">아이디</label>
        <div className={styles.inputWrapper}>
          <input type="text" id="id" placeholder="아이디를 입력해주세요" />
          <button className={styles.clear}>×</button>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="nickname">닉네임</label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="nickname"
            placeholder="닉네임을 입력해주세요"
          />
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

      <div className={styles.field}>
        <label htmlFor="confirmPassword">비밀번호 재입력</label>
        <div className={styles.inputWrapper}>
          <input
            type="password"
            id="confirmPassword"
            placeholder="비밀번호를 다시 입력해주세요"
          />
          <button className={styles.clear}>×</button>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.primary}>회원가입</button>
      </div>
    </div>
  );
};

export default SignupScreen;
