import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  containerId?: string;
}

export const Portal: FC<PortalProps> = ({ children, containerId = 'portal-root' }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let portalContainer = document.getElementById(containerId);

    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.id = containerId;
      document.body.appendChild(portalContainer);
    }

    setContainer(portalContainer);

    // return () => {
    //   if (portalContainer && portalContainer.parentElement === document.body) {
    //     document.body.removeChild(portalContainer);
    //   }
    // };
  }, [containerId]);

  if (!container) return null;

  return createPortal(children, container);
};