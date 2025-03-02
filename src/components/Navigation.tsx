
import React, { useRef, useState } from 'react';
import { WaveEffect } from './WaveEffect';

export const Navigation: React.FC = () => {
  const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setActiveElement(event.currentTarget);
  };

  return (
    <nav style={{ position: 'relative' }}>
      <button onClick={handleClick}>Пункт 1</button>
      <button onClick={handleClick}>Пункт 2</button>
      <button onClick={handleClick}>Пункт 3</button>
      <WaveEffect activeElement={activeElement} />
    </nav>
  );
};