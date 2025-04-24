import clsx from 'clsx';
import { FC, PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';

import { Backdrop } from '../../../shared/ui/backdrop';
import { withPortal } from '../../../shared/ui/hocs';

type TBastActionSheetProps = PropsWithChildren<{
  isOpen: boolean;
  onClose?: () => void;
  backdropDismiss?: boolean;
  minHeightPercent?: number;
  maxHeightPercent?: number;
  initialHeightPercent?: number;
}>;

const BastActionSheetComponent: FC<TBastActionSheetProps> = ({
  isOpen,
  onClose,
  children,
  backdropDismiss = true,
  maxHeightPercent = 0.9,
  minHeightPercent = 0.1,
  initialHeightPercent = 50,
}) => {
  const [height, setHeight] = useState(`auto`);
  const [isResizing, setIsResizing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const maxHeight = window.innerHeight * 0.9;
      const initialHeight = Math.min(contentHeight, maxHeight);
      console.log('initialHeight', initialHeight);
      setStartHeight(initialHeight);
    }
  }, [isOpen]);

  const handleMouseDown = useCallback(
    (e: any) => {
      e.stopPropagation();
      setIsResizing(true);
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      setStartY(clientY);
      setStartHeight(contentRef.current?.offsetHeight || 0);
      console.warn(contentRef.current?.offsetHeight || 0);
    },
    [height],
  );

  const handleMouseMove = useCallback(
    (e: any) => {
      if (!isResizing || !contentRef.current) return;

      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      if (clientY === undefined) return;

      const deltaY = startY - clientY;
      const newHeight = startHeight + deltaY;
      const maxHeight = window.innerHeight * maxHeightPercent;
      const minHeight = window.innerHeight * minHeightPercent;
      console.warn('startHeight', startHeight);

      const constrainedHeight = Math.min(Math.max(newHeight, minHeight), maxHeight);
      console.warn('constrainedHeight', constrainedHeight);
      contentRef.current.style.height = `${constrainedHeight}px`;
    },
    [isResizing, startY, startHeight],
  );

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
    if (contentRef.current) {
      const heightPx = contentRef.current.offsetHeight;
      const heightVh = (heightPx / window.innerHeight) * 100;
      contentRef.current.style.height = `${heightVh}vh`;
      setHeight(`${heightVh}vh`);
    }
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleMouseMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };

    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Backdrop show={isOpen} onDismiss={backdropDismiss ? onClose : undefined}>
      <div
        tabIndex={0}
        role="grid"
        onKeyDown={(e) => e.stopPropagation()}
        className={clsx(['action-sheet-container', isOpen && 'open'])}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          tabIndex={0}
          role="grid"
          className="action-sheet-overlay"
          onClick={onClose}
          onKeyDown={onClose}
        />
        <div
          className={`action-sheet-content${isResizing ? ' resizing' : ' '}`}
          ref={contentRef}
          style={{ height }}
        >
          <div
            tabIndex={0}
            role="grid"
            className="resize-handle"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          />
          <div className="action-sheet-scrollable">{children}</div>
        </div>
      </div>
    </Backdrop>
  );
};

const BastActionSheet = withPortal(BastActionSheetComponent);
export { BastActionSheet };
