import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

type BackgroundGradientAnimationProps = {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string; // rgb values without wrapper, e.g., "255, 182, 193"
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string; // e.g., "80%"
  blendingValue?: string; // e.g., "screen"
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
};

// Lightweight classnames helper
function joinClassNames(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const BackgroundGradientAnimation: React.FC<BackgroundGradientAnimationProps> = ({
  // pastel default values
  gradientBackgroundStart = 'rgb(240, 181, 149)', // AliceBlue
  gradientBackgroundEnd = 'rgb(224, 255, 255)',   // LightCyan
  firstColor = '255, 182, 193',   // LightPink
  secondColor = '173, 216, 230',  // LightBlue
  thirdColor = '144, 238, 144',   // LightGreen
  fourthColor = '255, 250, 205',  // LemonChiffon
  fifthColor = '221, 160, 221',   // Plum (light)
  pointerColor = '255, 228, 181', // Moccasin
  size = '80%',
  blendingValue = 'screen', // changed from hard-light
  children,
  className,
  interactive = true,
  containerClassName,
}) => {
  const { theme } = useTheme();
  const interactiveRef = useRef<HTMLDivElement>(null);

  // Prefer slightly darker pastel in dark theme
  const start = theme === 'dark' ? 'rgb(220, 230, 240)' : gradientBackgroundStart;
  const end = theme === 'dark' ? 'rgb(210, 230, 230)' : gradientBackgroundEnd;

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    const target = document.documentElement; // use root to scope variables
    target.style.setProperty('--gradient-background-start', start);
    target.style.setProperty('--gradient-background-end', end);
    target.style.setProperty('--first-color', firstColor);
    target.style.setProperty('--second-color', secondColor);
    target.style.setProperty('--third-color', thirdColor);
    target.style.setProperty('--fourth-color', fourthColor);
    target.style.setProperty('--fifth-color', fifthColor);
    target.style.setProperty('--pointer-color', pointerColor);
    target.style.setProperty('--size', size);
    target.style.setProperty('--blending-value', blendingValue);
  }, [start, end, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) return;
      setCurX((prev) => prev + (tgX - prev) / 20);
      setCurY((prev) => prev + (tgY - prev) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }
    move();
  }, [tgX, tgY, curX, curY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    setTgX(event.clientX - rect.left);
    setTgY(event.clientY - rect.top);
  };

  return (
    <div
      className={joinClassNames(
        'fixed inset-0 -z-10 overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))] pointer-events-none',
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={joinClassNames('pointer-events-none', className)}>{children}</div>

      <div
        className={joinClassNames('gradients-container h-full w-full [filter:url(#blurMe)_blur(40px)] pointer-events-none')}
        onMouseMove={handleMouseMove}
      >
        <div className={joinClassNames(
          'absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]',
          '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)]',
          'top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:center_center]',
          'animate-first opacity-100'
        )} />
        <div className={joinClassNames(
          'absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)]',
          'top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-400px)]',
          'animate-second opacity-100'
        )} />
        <div className={joinClassNames(
          'absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)]',
          'top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%+400px)]',
          'animate-third opacity-100'
        )} />
        <div className={joinClassNames(
          'absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)]',
          'top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-200px)]',
          'animate-fourth opacity-80'
        )} />
        <div className={joinClassNames(
          'absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)]',
          'top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-800px)_calc(50%+800px)]',
          'animate-fifth opacity-90'
        )} />

        {interactive && (
          <div
            ref={interactiveRef}
            className={joinClassNames(
              'absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]',
              '[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2 opacity-70'
            )}
          />
        )}
      </div>
    </div>
  );
};

export default BackgroundGradientAnimation;
