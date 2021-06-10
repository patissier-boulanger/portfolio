import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const useScrollAnimation = (threshold) => {
  const controls = useAnimation();
  const [element, isInView] = useInView({
    threshold,
    triggerOnce: true,
  });

  useEffect(() => {
    if (isInView) {
      console.log("start");
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return [element, controls];
};

export { useScrollAnimation };
