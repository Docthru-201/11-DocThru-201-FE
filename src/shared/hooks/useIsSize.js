'use client';

import { useState, useEffect } from 'react';

export function useIsSize() {
  const [size, setSize] = useState('large');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 744) setSize('small');
      else if (width < 1200) setSize('medium');
      else setSize('large');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
