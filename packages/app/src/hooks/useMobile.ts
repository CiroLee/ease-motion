import { useState, useEffect } from 'react';

export const useMobile = (breakPoint: number = 640): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    const mediaQuery = window.matchMedia(`(max-width: ${breakPoint}px)`);
    return mediaQuery.matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakPoint}px)`);

    const onMediaQueryChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, [breakPoint]);
  return isMobile;
};
