import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '@/components/BottomSheet.module.scss';
import CloseIcon from '@/assets/close.svg?react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BottomSheet = ({ isOpen, onClose, children }: BottomSheetProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const container = document.getElementById('modal-root') as HTMLElement;
  if (!container) {
    console.error('Modal root not found');
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles['bottom-sheet']} role="dialog" aria-modal="true">
        <div className={styles.title}>
          <strong className={styles['title-text']}>title</strong>
          <button
            type="button"
            className={styles['button-close']}
            aria-label="닫기"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>,
    container
  );
};

export default BottomSheet;
