const hexCharacters = '0123456789ABCDEF';
const generateRandomColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }
  return color;
};
export const generateRandomParticleAniOptions = (delay?: number) => {
  const opacity = 0.2 + Math.random();
  const scale = Math.floor(Math.random() * 3) + 1;
  const background = generateRandomColor();
  const x = Math.random() * (window.innerWidth * 0.95);
  const keyframes = [
    {
      offset: 0,
      transform: `translate(${x}px,105vh)
                  scale(${scale})`,
      background,
      opacity: 0,
    },
    { offset: 0.2, background, opacity },
    {
      offset: 1,
      transform: `translate(${x}px,-50px)
                  scale(${scale})`,
      background,
      opacity,
    },
  ];
  return {
    keyframes,
    options: {
      duration: 5000 + Math.floor(Math.random() * 10000),
      iterations: Infinity,
      fill: 'both',
      easing: 'linear',
      delay,
    } as KeyframeAnimationOptions,
  };
};
