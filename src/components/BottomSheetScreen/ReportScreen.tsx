import styles from "@/components/BottomSheetScreen/ReportWriteScreen.module.scss";

const ReportScreen = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>새 제보 작성</h2>

      {/* 카테고리 선택 */}
      <div className={styles.category}>
        <span>카테고리</span>
        <div className={styles.categoryButtons}>
          <button>자연 훼손</button>
          <button>시설 파손</button>
          <button>도로 안전</button>
          <button>무단 투기</button>
        </div>
      </div>

      {/* 이미지 업로드 */}
      <div className={styles.imageSection}>
        <span>
          제보 사진 <small>최소 2장을 업로드해주세요</small>
        </span>
        <div className={styles.uploadBox}>
          <div className={styles.imagePlaceholder}>이미지 업로드</div>
        </div>
      </div>

      {/* 제보 내용 */}
      <div className={styles.textField}>
        <span>제보 내용</span>
        <textarea
          placeholder="최대 160자까지 작성할 수 있어요"
          maxLength={160}
        />
      </div>

      {/* 위치 선택 */}
      <button className={styles.submitButton}>위치 선택하기</button>
    </div>
  );
};

export default ReportScreen;
