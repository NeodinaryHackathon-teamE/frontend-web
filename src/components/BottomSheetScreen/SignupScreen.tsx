import { useState } from "react";
import styles from "./SignupScreen.module.scss";
import axios from "axios";

interface SignupScreenProps {
  push: (screen: string) => void;
}

const SignupScreen = ({ push }: SignupScreenProps) => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password || !nickname) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    try {
      const res = await axios.post(
        "http://3.37.144.218:8080/api/v1/auth/signup",
        {
          email,
          password,
          nickname,
        }
      );

      if (res.status === 200) {
        alert("회원가입이 완료되었습니다.");
        push("login"); // 로그인 화면으로 이동
      }
    } catch (err: any) {
      alert("회원가입에 실패했습니다.");
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>회원가입</h2>

      <div className={styles.field}>
        <label htmlFor="email">아이디</label>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            id="email"
            placeholder="아이디를 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.clear} onClick={() => setEmail("")}>
            ×
          </button>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="nickname">닉네임</label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="nickname"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button className={styles.clear} onClick={() => setNickname("")}>
            ×
          </button>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="password">비밀번호</label>
        <div className={styles.inputWrapper}>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.clear} onClick={() => setPassword("")}>
            ×
          </button>
        </div>
      </div>

      <button className={styles.submit} onClick={handleSignup}>
        회원가입
      </button>
    </div>
  );
};

export default SignupScreen;
