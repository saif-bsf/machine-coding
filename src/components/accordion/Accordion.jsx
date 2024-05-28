import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "Bangalore",
    description:
      "Bangalore is a tech city and known as Silicon Valley of India. The city is very green and known for the infamous Masala Dosa",
  },
  {
    title: "Dubai",
    description:
      "Dubai is one of the top cities in the world, with world class infrastructure, very diverse population but mostly dominated by Indians. During the summers, it can be really hot here",
  },
  {
    title: "Riyadh",
    description:
      "Riyadh, the capital city of Saudi Arabia is one of the strategic locations for the Saudi Kingdom, recently the city has seen extreme incline in tourists as it opens the door for tourism",
  },
];

const Accordion = () => {
  const [openTabIndex, setOpenTabIndex] = useState(0);
  const hanldeTabToggle = (index) => {
    if (openTabIndex === index) setOpenTabIndex(null);
    else setOpenTabIndex(index);
  };
  return (
    <div className="flex m-4">
      <div className="w-[50%]">
        {data.map((item, index) => (
          <AccordionItem
            key={item.title}
            title={item.title}
            description={item.description}
            onTabClick={() => hanldeTabToggle(index)}
            isTabOpen={openTabIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
