const pageAnimation = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { duration: 0, when: "beforeChildren", staggerChildren: 0.2 },
  },
};

const sliderAnimation = {
  hidden: { x: "-250%", skew: "45deg" },
  show: {
    x: "0%",
    skew: "0deg",
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

const svgAnimation = {
  hidden: { pathLength: 0, pathOffset: 1 },
  show: { pathLength: 1, pathOffset: 0, transition: { duration: 1 } },
};

const basicFontAnimation = {
  hidden: { opacity: 1, y: 150 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const photoAnimation = {
  hidden: { rotate: 5 },
  show: {
    rotate: 5,
    transition: { type: "spring", duration: 2.3 },
  },
};

export {
  pageAnimation,
  sliderAnimation,
  basicFontAnimation,
  svgAnimation,
  photoAnimation,
};
