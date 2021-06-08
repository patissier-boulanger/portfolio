import { useState, useRef, useLayoutEffect } from "react";
import { useViewportScroll, useTransform } from "framer-motion";

const useParallaxEffect = (outputRange) => {
  const ref = useRef(null);

  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [elementTop, elementTop + 1], outputRange, {
    clamp: false,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return [ref, y];
};

export { useParallaxEffect };
