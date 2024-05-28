import React from "react";

const Comment = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data?.map((comment, index) => (
        <div
          key={index}
          className="flex items-start flex-col p-5 border-l border-black"
        >
          <div className="flex font-bold p-2">{comment?.username}</div>
          <div className="p-2">{comment?.comment}</div>
          <div>{comment?.replies && <Comment data={comment?.replies} />}</div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
