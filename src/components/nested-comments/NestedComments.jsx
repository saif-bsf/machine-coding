import React from "react";
import Comment from "./Comment";

const data = [
  {
    username: "Saif Sheikh",
    comment: "BJP is gonna lose in 2024 elections",
    replies: [
      {
        username: "Shoaib Khan",
        comment: "True, BJP is gonna lose big time",
        replies: [
          {
            username: "Abeer Sheikh",
            comment: "Bhartiya Rape Party",
            replies: [
              {
                username: "Shoaib Khan",
                comment: "True, BJP is gonna lose big time",
                replies: [
                  {
                    username: "Abeer Sheikh",
                    comment: "Bhartiya Rape Party",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "Zainab Sheikh",
    comment: "Modi is the worst PM ever",
    replies: [],
  },
];

const NestedComments = () => {
  return (
    <div className="p-8">
      <Comment data={data} />
    </div>
  );
};

export default NestedComments;
