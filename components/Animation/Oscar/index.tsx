import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function Oscar() {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'banana.json',
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center pt-5">
      <div className="flex justify-center w-12" ref={animationContainer}></div>
    </div>
  );
}
