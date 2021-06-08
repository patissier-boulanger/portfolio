const pageChangeAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const enterPageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const slideAnimation = {
  hidden: { y: "100vh" },
  show: {
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0,
    },
  },
};

const expandAnimation = {
  hidden: { height: 0 },
  show: {
    height: "80rem",
    transition: {
      delay: 1,
      duration: 1,
      type: "spring",
      bounce: 0,
    },
  },
};

const slideFontAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
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
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const lineAnimation = {
  hidden: { width: 0 },
  show: {
    width: "80%",
    transition: { type: "spring", duration: 1 },
  },
};

const svgAnimation = {
  hidden: { pathLength: 0, pathOffset: 1 },
  show: { pathLength: 1, pathOffset: 0, transition: { duration: 1 } },
};

export {
  expandAnimation,
  slideAnimation,
  enterPageAnimation,
  pageChangeAnimation,
  slideFontAnimation,
  svgAnimation,
  fadeInFontAnimation,
  animationWrapper,
  lineAnimation,
};
