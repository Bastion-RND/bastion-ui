import { AnimatePresence, motion, PanInfo, useDragControls } from 'motion/react';
import { ComponentProps, FC, PropsWithChildren, useRef } from 'react';

import { Backdrop } from '../../../shared/ui/backdrop';
import { withPortal } from '../../../shared/ui/hocs';

type TBastActionSheetProps = ComponentProps<'div'> &
  PropsWithChildren<{
    isOpen: boolean;
    onClose?: () => void;
    backdropDismiss?: boolean;
  }>;

const HEIGHT_MAX_PERCENT = 90;
const HEIGHT_MAX_PX = (window.innerHeight * HEIGHT_MAX_PERCENT) / 100;

const BastActionSheetComponent: FC<TBastActionSheetProps> = ({
  isOpen,
  onClose,
  children,
  backdropDismiss = true,
}) => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    { offset: { y: offsetY }, velocity: { y: velocityY }, delta: { y: deltaY } }: PanInfo,
  ) => {
    const contentOffsetHeight =
      scrollableRef.current !== null ? scrollableRef.current.offsetHeight : HEIGHT_MAX_PX;

    if (offsetY >= contentOffsetHeight / 2 || (velocityY > 20 && deltaY < 15)) {
      onClose?.();
    }
  };

  const height = HEIGHT_MAX_PX - (scrollableRef.current ? scrollableRef.current.offsetHeight : 0);
  const dragConstraints = !scrollableRef.current
    ? { top: 0, bottom: 0 }
    : {
        top: height < 0 ? height : 0,
        bottom: height > 0 ? height : 0,
      };

  return (
    <Backdrop show={isOpen} onDismiss={backdropDismiss ? onClose : undefined}>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            tabIndex={0}
            role="grid"
            className="action-sheet"
            initial={{ translateY: 100 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: 300 }}
            onClick={(e) => e.stopPropagation()}
            drag="y"
            dragSnapToOrigin
            dragDirectionLock
            dragTransition={{
              bounceStiffness: 800,
              bounceDamping: 50,
              restDelta: 1,
            }}
            dragElastic={{ bottom: 1, top: 0, left: 0, right: 0 }}
            dragControls={dragControls}
            dragConstraints={dragConstraints}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: 'grabbing' }}
            onPointerDown={(e) => dragControls.start(e)}
          >
            <div tabIndex={0} role="grid" className="action-sheet__resize-handle" />

            <motion.div
              ref={scrollableRef}
              style={{ maxHeight: HEIGHT_MAX_PX }}
              className="action-sheet__content"
              layout
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Backdrop>
  );
};

const BastActionSheet = withPortal(BastActionSheetComponent);

export { BastActionSheet };
