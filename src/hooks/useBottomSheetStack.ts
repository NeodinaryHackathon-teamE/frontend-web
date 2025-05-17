// hooks/useBottomSheetStack.ts
import { useCallback, useState } from 'react';

export const useBottomSheetStack = (initial = 'main') => {
  const [isOpen, setIsOpen] = useState(false);
  const [stack, setStack] = useState<string[]>([initial]);

  const open = useCallback(() => {
    setStack([initial]);
    setIsOpen(true);
  }, [initial]);

  const close = useCallback(() => setIsOpen(false), []);

  const push = useCallback((screen: string) => {
    setStack((prev) => [...prev, screen]);
  }, []);

  const pop = useCallback(() => {
    setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  }, []);

  return { isOpen, open, close, push, pop, stack };
};
