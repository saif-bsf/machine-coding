import React from "react";

const MemeCard = ({ title, url, author }) => {
  return (
    <div className="p-4 m-4 border border-black rounded-lg">
      <img className="w-64 h-64" src={url} alt={title} />
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;
