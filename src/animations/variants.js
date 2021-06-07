const pageAnimation = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { duration: 0, when: "beforeChildren", staggerChildren: 0.2 },
  },
};

const sliderAnimation = {
  hidden: { width: 0, skew: "0deg" },
  show: {
    width: "100vw",
    skew: "0deg",
    transition: {
      type: "spring",
      ease: "easeOut",
      duration: 2,
    },
  },
};

const svgAnimation = {
  hidden: { pathLength: 0, pathOffset: 1 },
  show: { pathLength: 1, pathOffset: 0, transition: { duration: 1 } },
};

const slideFontAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const animationWrapper = {
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const fadeInFontAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const lineAnimation = {
  hidden: { width: 0 },
  show: {
    width: "80%",
    transition: { type: "spring", duration: 1 },
  },
};

const photoAnimation = {
  hidden: { rotate: 0 },
  show: {
    rotate: 5,
    transition: { type: "spring", duration: 2 },
  },
};

export {
  pageAnimation,
  sliderAnimation,
  slideFontAnimation,
  svgAnimation,
  photoAnimation,
  fadeInFontAnimation,
  animationWrapper,
  lineAnimation,
};
