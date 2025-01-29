import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

export default function Oscar() {
  const [isBrowser, setIsBrowser] = useState(false); // Track if we're on the client side
  const animationContainer = useRef<HTMLDivElement>(null); // Specify type here

  useEffect(() => {
    setIsBrowser(true); // Set to true once we are on the client side
  }, []);

  useEffect(() => {
    if (isBrowser && animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'banana.json',
      });
    }
  }, [isBrowser]); // Ensure it runs only when client-side

  if (!isBrowser) return null; // Prevent rendering on the server side

  return (
    <>
      <div className="flex justify-center items-center pt-5">
        <div className="flex justify-center w-12" ref={animationContainer}></div>
      </div>
    </>
  );
}
