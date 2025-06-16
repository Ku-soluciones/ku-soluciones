
import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement,>(
  options?: IntersectionObserverOptions
): [React.RefObject<T>, boolean] => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options || {};
  const targetRef = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (triggerOnce && !hasTriggered) {
              setIsIntersecting(true);
              setHasTriggered(true);
            } else if (!triggerOnce) {
              setIsIntersecting(true);
            }
          } else {
            if (!triggerOnce) {
              setIsIntersecting(false);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return [targetRef, isIntersecting];
};
