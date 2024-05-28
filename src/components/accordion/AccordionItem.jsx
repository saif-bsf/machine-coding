import React from "react";

const AccordionItem = ({ title, description, isTabOpen, onTabClick }) => {
  return (
    <div className="border">
      <div
        className="p-3 flex justify-between bg-blue-300 cursor-pointer"
        onClick={onTabClick}
      >
        <span>{title}</span>
        <span>{"V"}</span>
      </div>
      {isTabOpen && <div>{description}</div>}
    </div>
  );
};

export default AccordionItem;
