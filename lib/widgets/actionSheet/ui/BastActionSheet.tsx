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
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [scrollableHeight, setScrollableHeight] = useState('auto');
  const [initialContentHeight, setInitialContentHeight] = useState<number>(0);
  const dragControls = useDragControls();
  const maxHeightPx = (window.innerHeight * maxHeightPercent) / 100;

  useEffect(() => {
    if (isOpen && scrollableRef.current) {
      const contentScrollHeight = scrollableRef.current.scrollHeight;
      const initialHeight = Math.min(contentScrollHeight, maxHeightPx);

      if (initialHeightPercent) {
        const height = `${window.innerHeight * (initialHeightPercent / 100)}px`;
        setScrollableHeight(height);
        setInitialContentHeight(parseInt(height, 10));
      } else {
        setScrollableHeight(`${initialHeight}px`);
        setInitialContentHeight(initialHeight);
      }
    }
  }, [isOpen, maxHeightPx, initialHeightPercent]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    const delta = info.delta.y;
    if (offset >= initialContentHeight / 2 || (velocity > 20 && delta < 15)) {
      onClose?.();
    }
  };

  const calculateConstraints = () => {
    if (!scrollableRef.current) return { top: 0, bottom: 0 };

    const currentHeight = parseInt(scrollableHeight, 10) || 0;
    return {
      top: Math.min(maxHeightPx - currentHeight, 0),
      bottom: Math.max(maxHeightPx - currentHeight, 0),
    };
  };

  return (
    <Backdrop show={isOpen} onDismiss={backdropDismiss ? onClose : undefined}>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            tabIndex={0}
            role="grid"
            className="action-sheet-container"
            initial={{ translateY: 100 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: 300 }}
          >
            <motion.div
              className="action-sheet-content"
              onClick={(e) => e.stopPropagation()}
              drag="y"
              dragSnapToOrigin
              dragDirectionLock
              dragTransition={{
                bounceStiffness: 800,
                bounceDamping: 50,
                restDelta: 1,
              }}
              dragElastic={0.2}
              dragControls={dragControls}
              dragConstraints={calculateConstraints()}
              onDragEnd={handleDragEnd}
              whileDrag={{ cursor: 'grabbing' }}
              onPointerDown={(e) => dragControls.start(e)}
            >
              <div tabIndex={0} role="grid" className="resize-handle" />

              <motion.div
                ref={scrollableRef}
                style={{ height: scrollableHeight }}
                className="action-sheet-scrollable"
                layout
              >
                <div style={{paddingBottom: 'var(--modal-card-padding)'}}>
                  {children}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Backdrop>
  );
};

const BastActionSheet = withPortal(BastActionSheetComponent);
export { BastActionSheet };
