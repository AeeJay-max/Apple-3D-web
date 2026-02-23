import React, { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const carouselRef = useRef(null);
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  /* ---------------- GSAP SLIDER + SCROLL ---------------- */
  useGSAP(() => {
    gsap.to(".slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    ScrollTrigger.create({
      trigger: carouselRef.current,
      start: "top 70%",
      onEnter: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
      onLeaveBack: () => {
        setVideo((pre) => ({
          ...pre,
          isPlaying: false,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  /* ---------------- PROGRESS BAR LOGIC ---------------- */
  useEffect(() => {
    const span = videoSpanRef.current[videoId];
    const videoEl = videoRef.current[videoId];
    const progressWrap = videoDivRef.current[videoId];

    if (!span || !videoEl || !progressWrap) return;

    let currentProgress = 0;

    const anim = gsap.to(span, {
      onUpdate: () => {
        const progress = Math.ceil(anim.progress() * 100);
        if (progress !== currentProgress) {
          currentProgress = progress;

          gsap.to(progressWrap, {
            width:
              window.innerWidth < 760
                ? "10vw"
                : window.innerWidth < 1200
                ? "10vw"
                : "4vw",
          });

          gsap.to(span, {
            width: `${currentProgress}%`,
            backgroundColor: "#2997FF",
          });
        }
      },
      onComplete: () => {
        gsap.to(progressWrap, { width: "12px" });
        gsap.to(span, { backgroundColor: "#afafaf" });
      },
    });

    if (videoId === 0) anim.restart();

    const update = () => {
      anim.progress(
        videoEl.currentTime /
          hightlightsSlides[videoId].videoDuration
      );
    };

    if (isPlaying) gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      anim.kill();
    };
  }, [videoId, startPlay, isPlaying]);

  /* ---------------- PLAY / PAUSE CONTROL ---------------- */
  useEffect(() => {
    const videoEl = videoRef.current[videoId];
    if (!videoEl) return;

    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoEl.pause();
      } else {
        startPlay && videoEl.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  /* ---------------- VIDEO EVENTS ---------------- */
  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;
      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((pre) => ({
          ...pre,
          videoId: 0,
          isLastVideo: false,
          isEnd: false,
        }));
        break;
      case "pause":
      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
      default:
        return;
    }
  };

  const handleLoadedMetaData = (i, e) =>
    setLoadedData((pre) => [...pre, e]);

  /* ---------------- JSX ---------------- */
  return (
    <>
      <div ref={carouselRef} className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} className="slider sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  playsInline
                  className={`${list.id === 2 && "translate-x-44"} pointer-events-none`}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== hightlightsSlides.length - 1
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideo((pre) => ({ ...pre, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, idx) => (
                  <p key={idx} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {hightlightsSlides.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt="control"
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : () => handleProcess(isPlaying ? "pause" : "play")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
