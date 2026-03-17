
const noChangePartsiPad = [
  "Text",
  "Bexel",
  "Screen",
];

export const performanceImagesiPad = [
  {
    id: "p1",
    src: "/assets/iPad_Assets/images/working/working1.jpg",
    text: "iPadOS and apps.A tour de workforce."
  },
  {
    id: "p2",
    src: "/assets/iPad_Assets/images/working/working2.jpg",
    text: "iPadOS 26 introduces a stunning new design with Liquid Glass and game-changing enhancements that put iPad Pro productivity on a new level. A reimagined, intuitive windowing system gives you greater power and flexibility than ever before. Run pro apps, play high-performance games, and take on creative projects of any size with an intuitive touch-first experience."
  },
  {
    id: "p3",
    src: "/assets/iPad_Assets/images/working/working3.jpg",
    text: "Intensive tasks run behind the scenes with Background Tasks. And you can easily manage everything that’s running with Live Activities."
  },
  {
    id: "p4",
    src: "/assets/iPad_Assets/images/working/working4.jpg",
    text: "Capture and edit Smart HDR images and up to 4K ProRes video. Open and manipulate larger 3D scenes. And run more complex AI models, all with pro apps."
  },
  {
    id: "p5",
    src: "/assets/iPad_Assets/images/working/working5.jpg",
    text: "iPad Pro is built for Apple Intelligence. Create, communicate, and get things done effortlessly with groundbreaking privacy protections at every step."
  },
];

export const performanceImgPositionsiPad = [
  { id: "p1", left: 10, bottom: 65 },
  { id: "p2", right: 10, bottom: 60 },
  { id: "p3", right: 15, bottom: 45 },
  { id: "p4", left: 2, bottom: 30 },
  { id: "p5", left: 40, bottom: 55 },
];

const features = [
  {
    id: 1,
    icon: "/assets/mac_Assets/feature-icon1.svg",
    highlight: "Email AI.",
    text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
    styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: "/assets/mac_Assets/feature-icon2.svg",
    highlight: "Image AI.",
    text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: "/assets/mac_Assets/feature-icon3.svg",
    highlight: "Summarize AI.",
    text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
    styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: "/assets/mac_Assets/feature-icon4.svg",
    highlight: "AirDrop.",
    text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
    styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: "/assets/mac_Assets/feature-icon5.svg",
    highlight: "Writing Tool.",
    text: "Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.",
    styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];

const featureSequence = [
  { videoPath: "/assets/mac_Assets/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
  { videoPath: "/assets/mac_Assets/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
  { videoPath: "/assets/mac_Assets/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
  { videoPath: "/assets/mac_Assets/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
  { videoPath: "/assets/mac_Assets/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

export {
  features,
  featureSequence,
  noChangePartsiPad,
};

import {
  highlightFirstVideo,
  highlightFourthVideo,
  iPadHighlightsVideo,
  highlightThirdVideo,
} from "../../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: iPadHighlightsVideo,
    videoDuration: 3,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];


export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
