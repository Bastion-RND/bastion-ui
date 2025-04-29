import { AnimatePresence, motion, PanInfo, useDragControls } from 'motion/react';
import { ComponentProps, FC, PropsWithChildren, useEffect, useRef, useState } from 'react';

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
  const [contentHeight, setContentHeight] = useState('auto');
  const contentRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const maxHeightPx = (window.innerHeight * maxHeightPercent) / 100;

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const contentScrollHeight = contentRef.current.scrollHeight;
      const initialHeight = Math.min(contentScrollHeight, maxHeightPx);

      if (initialHeightPercent) {
        setContentHeight(`${window.innerHeight * (initialHeightPercent / 100)}px`);
      } else {
        setContentHeight(`${initialHeight}px`);
      }
    }
  }, [isOpen, maxHeightPx, initialHeightPercent]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const velocity = info.velocity.y;
    const offset = info.offset.y;
    console.warn(info.offset.y);

    if (offset > 100 && velocity > 500) {
      onClose?.();
    }
  };

  const calculateConstraints = () => {
    if (!contentRef.current) return { top: 0, bottom: 0 };

    const currentHeight = parseInt(contentHeight, 10) || 0;
    return {
      top: Math.min(maxHeightPx - currentHeight, 0),
      bottom: Math.max(maxHeightPx - currentHeight, 0),
    };
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <Backdrop show={isOpen} onDismiss={backdropDismiss ? onClose : undefined}>
        <motion.div
          tabIndex={0}
          role="grid"
          className="action-sheet-container"
          initial={{ translateY: 100 }}
          animate={{ translateY: 0 }}
          dragElastic={{ top: 0, bottom: 0 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="action-sheet-content"
            onClick={(e) => e.stopPropagation()}
            drag="y"
            dragControls={dragControls}
            dragConstraints={calculateConstraints()}
            dragElastic={{ top: 0, bottom: 0 }}
            onDragEnd={handleDragEnd}
            onDragCapture={() => console.log('onDragCapture')}
            onDragStart={() => console.log('onDragStart')}
            style={{
              maxHeight: `1000px`,
            }}
            onPointerDown={(e) => dragControls.start(e)}
            whileDrag={{ cursor: 'grabbing'}}
          >
            <motion.div tabIndex={0} role="grid" className="resize-handle" />

            <motion.div
              ref={contentRef}
              dragElastic={{ top: 0.2, bottom: 0 }}
              style={{ height: contentHeight }}
              className="action-sheet-scrollable"
              layout
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
};

const BastActionSheet = withPortal(BastActionSheetComponent);
export { BastActionSheet };
