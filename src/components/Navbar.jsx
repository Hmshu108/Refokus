import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6  flex items-center justify-between  border-b-[1px] border-zinc-700">
      <div className="n-left flex items-center">
        <img
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="link flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, idx) =>
            elem.length === 0 ? (
              <span key={idx} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a key={idx} className="text-sm flex items-center gap-1" href="#">
                {idx === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00ff19" }}
                    className="inline-block w-2 h-2 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>

      <Button />
    </div>
  );
}

export default Navbar;
