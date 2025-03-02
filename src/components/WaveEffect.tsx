import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const WaveContainer = styled.div`
  position: absolute;
  width: 4px;
  height: 100%;
  right: 0;
  overflow: hidden;
`;

const Wave = styled.div<{ $top: number; $height: number }>`
  position: absolute;
  width: 100%;
  background: linear-gradient(180deg, #00ff88 0%, #00a1ff 100%);
  transition: all 0.5s ease;
  height: ${props => props.$height}px;
  top: ${props => props.$top}px;
  border-radius: 2px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 200%;
    background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
    animation: wave 2s linear infinite;
  }

  @keyframes wave {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

interface WaveEffectProps {
  activeElement: HTMLElement | null;
}

export const WaveEffect: React.FC<WaveEffectProps> = ({ activeElement }) => {
  const [position, setPosition] = React.useState({ top: 0, height: 0 });
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeElement && waveRef.current?.parentElement) {
      const rect = activeElement.getBoundingClientRect();
      const containerRect = waveRef.current.parentElement.getBoundingClientRect();
      
      setPosition({
        top: rect.top - containerRect.top,
        height: rect.height
      });
    }
  }, [activeElement]);

  return (
    <WaveContainer ref={waveRef}>
      <Wave $top={position.top} $height={position.height} />
    </WaveContainer>
  );
};