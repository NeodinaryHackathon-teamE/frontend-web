// components/BottomSheet.tsx
import ReactDOM from 'react-dom';
import { useEffect, ReactNode } from 'react';
import styles from './BottomSheet.module.scss';
import ArrowBackIcon from '@/assets/arrow-back.svg?react';
import CloseIcon from '@/assets/close.svg?react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
  title?: string;
  canGoBack?: boolean;
  children: ReactNode;
}

const BottomSheet = ({
  isOpen,
  onClose,
  onBack,
  title,
  canGoBack,
  children,
}: BottomSheetProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const container = document.getElementById('modal-root');
  if (!container) return null;

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.sheet} role="dialog" aria-modal="true">
        <div className={styles.title}>
          <h2 className={styles['title-text']}>{title}</h2>
          {canGoBack && (
            <button
              className={styles.back}
              onClick={onBack}
              aria-label="뒤로가기"
            >
              <ArrowBackIcon />
            </button>
          )}
          <button className={styles.close} onClick={onClose} aria-label="닫기">
            <CloseIcon />
          </button>
        </div>
        <section className={styles.body}>{children}</section>
      </div>
    </div>,
    container
  );
};

export default BottomSheet;
