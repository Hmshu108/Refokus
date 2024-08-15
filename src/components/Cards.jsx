import React from "react";
import Card from "./Card";

function Cards() {
  let cardInfo = [
    {
      p: "Up Next : Culture",
      h: "Who we are",
      w: "basis-1/3",
      start:false,
      para:true
    },
    {
      p: "Get in touch",
      h: "Let's go to it, together.",
      w: "basis-2/3",
      start:true,
      para:false,
      hover:"true",
    },
  ];

  return (
    <div className="w-full mb-6">
      <div className="max-w-screen-xl py-32 mx-auto  flex gap-2">
        {cardInfo.map((val, idx) => {
          return <Card val={val} key={idx} />; // Replace with your actual Card component
        })}
      </div>
    </div>
  );
}

export default Cards;
