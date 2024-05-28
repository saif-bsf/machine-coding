import React, { useEffect, useState } from "react";

const images = [
  "./assets/MercedesEClaSS.jpeg",
  "./assets/Tesla.jpeg",
  "./assets/NFT2.png",
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      handleIndexChange("right");
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleIndexChange = (dir) => {
    if (dir === "left") {
      if (activeIndex === 0) {
        setActiveIndex(images.length - 1);
      } else {
        setActiveIndex(activeIndex - 1);
      }
    } else if (dir === "right") {
      if (activeIndex === images.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }
  };
  return (
    <div className="flex justify-center">
      <h1>Image Slider</h1>
      <div className="flex">
        <span
          className="self-center mx-4 cursor-pointer"
          onClick={() => handleIndexChange("left")}
        >
          Left
        </span>
        <img
          height="90%vh"
          width="90%vw"
          src={images[activeIndex]}
          alt="image not found"
        />
        <span
          className="self-center mx-4 cursor-pointer"
          onClick={() => handleIndexChange("right")}
        >
          Right
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
