import {
  ComponentProps,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Backdrop } from '../../../shared/ui/backdrop';
import { withPortal } from '../../../shared/ui/hocs';

type TBastActionSheetProps = ComponentProps<'div'> &
  PropsWithChildren<{
    isOpen: boolean;
    onClose?: () => void;
    backdropDismiss?: boolean;
    maxHeightPercent?: number;
    initialHeightPercent?: number;
  }>;

const BastActionSheetComponent: FC<TBastActionSheetProps> = ({
  isOpen,
  onClose,
  children,
  backdropDismiss = true,
  maxHeightPercent = 90,
  initialHeightPercent,
}) => {
  const [height, setHeight] = useState(`auto`);
  const [isResizing, setIsResizing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const maxHeight = (window.innerHeight * maxHeightPercent) / 100;
      const initialHeight = Math.min(contentHeight, maxHeight);
      if (initialHeightPercent) {
        setHeight(`${window.innerHeight * (initialHeightPercent / 100)}px`);
      } else {
        setHeight(`${initialHeight}px`);
      }
    }
  }, [isOpen]);

  const handleMouseDown = useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      setIsResizing(true);
      const clientY = e.clientY || e.touches[0].clientY;
      setStartY(clientY);
      setStartHeight(parseInt(height, 10));
    },
    [height],
  );

  const handleMouseMove = useCallback(
    (e: any) => {
      if (!isResizing || !contentRef.current) return;

      const clientY = e.clientY || e.touches?.[0]?.clientY;
      if (clientY === undefined) return;

      const deltaY = startY - clientY;
      if (Math.abs(deltaY) < 5) return;
      const newHeightPx = startHeight + deltaY;
      const newHeight = Math.min(
        Math.max(newHeightPx, 0),
        window.innerHeight * (maxHeightPercent / 100),
      );
      if (((newHeight <= 150 && deltaY < -50) || newHeight <= 0) && onClose) onClose();

      contentRef.current.style.height = `${newHeight}px`;
    },
    [isResizing, startY, startHeight],
  );

  const handleMouseUp = useCallback(() => {
    if (contentRef.current) {
      const finalHeight = contentRef.current.style.height;
      setHeight(finalHeight);
    }
    setIsResizing(false);
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

  if (!isOpen) return null;

  return (
    <Backdrop show={isOpen} onDismiss={backdropDismiss ? onClose : undefined}>
      <div
        tabIndex={0}
        role="grid"
        onKeyDown={(e) => e.stopPropagation()}
        className="action-sheet-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          tabIndex={0}
          role="grid"
          className="action-sheet-overlay"
          onClick={onClose}
          onKeyDown={onClose}
        />
        <div className={`action-sheet-content${isResizing ? ' resizing' : ''}`}>
          <div
            tabIndex={0}
            role="grid"
            className="resize-handle"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          />
          <div ref={contentRef} style={{ height }} className="action-sheet-scrollable">
            {children}
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

const BastActionSheet = withPortal(BastActionSheetComponent);
export { BastActionSheet };
