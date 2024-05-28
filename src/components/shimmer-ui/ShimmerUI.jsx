import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const ShimmerUI = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };
  return (
    <div className="flex flex-wrap">
      {memes.map((meme, index) => (
        <MemeCard key={index} {...meme} />
      ))}
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default ShimmerUI;
