const noChangeParts = [
  "Object_84",
  "Object_37",
  "Object_34",
  "Object_12",
  "Object_80",
  "Object_35",
  "Object_36",
  "Object_13",
  "Object_125",
  "Object_76",
  "Object_33",
  "Object_42",
  "Object_58",
  "Object_52",
  "Object_21",
  "Object_10",
];

export const performanceImages = [
  {
    id: "p1",
    src: "/assets/mac_Assets/performance1.png",
    text: "Run graphics-intensive workflows with blazing-fast GPU performance."
  },
  {
    id: "p2",
    src: "/assets/mac_Assets/performance2.png",
    text: "Second-generation ray tracing delivers realistic lighting and shadows."
  },
  {
    id: "p3",
    src: "/assets/mac_Assets/performance3.png",
    text: "Dynamic Caching optimizes on-chip memory for demanding pro apps."
  },
  {
    id: "p4",
    src: "/assets/mac_Assets/performance6.png",
    text: "Consistent frame rates even under the heaviest workloads."
  },
  {
    id: "p5",
    src: "/assets/mac_Assets/performance5.jpg",
    text: "A powerful GPU architecture built for next-level gaming and creation."
  },
  {
    id: "p6",
    src: "/assets/mac_Assets/performance4.png",
    text: "High-performance graphics that keep gameplay smooth and immersive."
  },
  {
    id: "p7",
    src: "/assets/mac_Assets/performance7.png",
    text: "Unmatched performance efficiency for modern graphics pipelines."
  },
];

export const performanceImgPositions = [
  { id: "p1", left: 10, bottom: 65 },
  { id: "p2", right: 10, bottom: 60 },
  { id: "p3", right: 15, bottom: 45 },
  { id: "p4", left: 2, bottom: 30 },
  { id: "p5", left: 40, bottom: 55 },
  { id: "p6", right: 5, bottom: 20 },
  { id: "p7", left: 5, bottom: 10 },
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
  noChangeParts,
};
