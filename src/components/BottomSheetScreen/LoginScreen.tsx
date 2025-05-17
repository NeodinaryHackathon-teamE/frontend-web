// components/BottomSheetScreen/LoginScreen.tsx
import { useState } from "react";
import axios from "axios";
import styles from "@/components/BottomSheetScreen/LoginScreen.module.scss";

interface LoginScreenProps {
  push: (screen: string) => void;
}

const LoginScreen = ({ push }: LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://3.37.144.218:8080/api/v1/auth/signin",
        {
          email,
          password,
        }
      );

      if (res.status === 200) {
        alert("로그인 성공!");
        // TODO: 토큰 저장 or 홈 이동
        // 예: localStorage.setItem("token", res.data.token);
        // push("main");
      }
    } catch (err) {
      alert("로그인에 실패했습니다.");
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>로그인</h2>

      <div className={styles.field}>
        <label htmlFor="email">아이디</label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
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

      <div className={styles.buttons}>
        <button className={styles.secondary} onClick={() => push("signup")}>
          회원가입
        </button>
        <button className={styles.primary} onClick={handleLogin}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
