import React from "react";

const VideoStream = () => {
  return (
    <div className="m-5">
      <iframe
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/AG8VO24sDBs?si=bgY6YhGrGAuf8CVu"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoStream;
