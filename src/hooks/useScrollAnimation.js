import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScrollAnimation = (threshold) => {
  const controls = useAnimation();
  const [element, isInView] = useInView({
    threshold,
    triggerOnce: true,
  });

  if (isInView) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

export { useScrollAnimation };
