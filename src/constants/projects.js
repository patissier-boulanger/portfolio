import bibinoIconPath from "../asset/images/bibinoIcon.png";
import bibinoPath from "../asset/images/bibino.png";
import bibino1Path from "../asset/images/bibino1.png";
import bibino2Path from "../asset/images/bibino2.png";

import spaceSimulatorPath from "../asset/images/42spacesimulator.png";
import spaceSimulator2Path from "../asset/images/42spacesimulator2.png";
import spaceSimulator3Path from "../asset/images/42spacesimulator3.png";

import vanillacodingPath from "../asset/images/vanillacoding.png";
import vanillacoding1Path from "../asset/images/vanillacoding1.png";

const projects = [
  {
    title: "42 space simulator",
    description:
      "별다른 설치 없이 브라우저에서 바로 우주를 유영해 볼 수 있는 시뮬레이터입니다. 영화 그래비티, 게임 오브라딘 호의 귀환에서 영감을 받아 개발하였습니다.",
    githubLink: "https://github.com/patissier-boulanger/42-space-simulator",
    stacks: ["HTML / CSS", "JavaScript", "ThreeJS", "Mobx"],
    thumbnail: spaceSimulatorPath,
    mainImageLink: spaceSimulatorPath,
    subImageLinks: [spaceSimulator2Path, spaceSimulator3Path],
  },
  {
    title: "BIBINO",
    description:
      "맥주의 라벨을 스캔해서 맥주에 대한 정보와 리뷰를 확인하고, 평가를 남길 수 있는 모바일 앱입니다.",
    githubLink: "https://github.com/wonhoya/bibino-frontend",
    stacks: [
      "React native",
      "Expo",
      "Redux",
      "Redux thunk",
      "Redux toolkit",
      "Google vision api",
      "Mongo db",
      "Express",
      "Mongoose",
      "Amazon S3",
      "FUSE",
    ],
    thumbnail: bibinoIconPath,
    mainImageLink: bibinoPath,
    subImageLinks: [bibino1Path, bibino2Path],
  },
  {
    title: "Vanilla Coding Assignements",
    description:
      "바닐라 코딩의 과제들입니다. 자바스크립트의 기본적인 부분부터 Async와 Mern 스택까지 다양한 부분을 학습하고 개발하였습니다",
    githubLink: "",
    stacks: [
      "HTML / CSS",
      "JavaScript",
      "React",
      "Redux",
      "Mongo db",
      "Express",
    ],
    thumbnail: vanillacodingPath,
    mainImageLink: vanillacoding1Path,
  },
];

export { projects };
