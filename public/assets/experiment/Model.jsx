import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState("small");

  const [model, setModel] = useState({
    title: "iPhone 17 Pro in Natural Titanium",
    color: ["#8F8A81"],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(
        tl,
        small,
        smallRotation,
        "#view1",
        "#view2",
        {
          transform: "translateX(-100%)",
          duration: 2,
        }
      );
    }

    if (size === "small") {
      animateWithGsapTimeline(
        tl,
        large,
        largeRotation,
        "#view2",
        "#view1",
        {
          transform: "translateX(0)",
          duration: 2,
        }
      );
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1
          id="heading"
          className="text-gray lg:text-6xl md:text-5xl text-3xl font-medium opacity-0 translate-y-20"
        >
          Take a closer look.
        </h1>

        <div className="relative w-full h-[85vh] overflow-hidden">
          <ModelView
            index={1}
            groupRef={small}
            gsapType="view1"
            controlRef={cameraControlSmall}
            setRotationState={setSmallRotation}
            item={model}
            size={size}
          />

          <ModelView
            index={2}
            groupRef={large}
            gsapType="view2"
            controlRef={cameraControlLarge}
            setRotationState={setLargeRotation}
            item={model}
            size={size}
          />

          <Canvas
            className="w-full h-full fixed inset-0"
            eventSource={document.getElementById("root")}
          >
            <View.Port />
          </Canvas>
        </div>

        <p className="text-sm text-center mt-4">
          {model.title}
        </p>

        <div className="flex justify-center mt-4 gap-4">
          <ul className="flex gap-3 bg-gray-300 px-4 py-2 rounded-full">
            {models.map((item, i) => (
              <li
                key={i}
                className="w-6 h-6 rounded-full cursor-pointer"
                style={{ backgroundColor: item.color[0] }}
                onClick={() => setModel(item)}
              />
            ))}
          </ul>

          <div className="flex bg-gray-300 rounded-full p-1">
            {sizes.map(({ label, value }) => (
              <button
                key={label}
                onClick={() => setSize(value)}
                className={`w-10 h-10 rounded-full ${
                  size === value
                    ? "bg-white text-black"
                    : "text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
