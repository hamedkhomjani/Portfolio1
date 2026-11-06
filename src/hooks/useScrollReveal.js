import { useEffect, useRef } from 'react';

const useScrollReveal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const observerOptions = {
      threshold: 0, /* Trigger instantly upon hitting margin */
      rootMargin: '0px 0px 150px 0px' /* Trigger 150px before entering viewport */
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, observerOptions);

    if (container) {
      const elements = container.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return containerRef;
};

export default useScrollReveal;
