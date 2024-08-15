import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl py-8 flex gap-32 mx-auto">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold tracking-tight leading-none">
            refokus.
          </h1>{" "}
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10">Socials</h4>
            {["Instagram", "Twitter (x)", "Linkedin"].map((item, idx) => {
              return (
                <a
                  href="#"
                  key={idx}
                  className="mt-2 block capitalize text-gray-400"
                >
                  {item}
                </a>
              );
            })}
          </div>

          <div className="basis-1/3">
            <h4 className="mb-10">Socials</h4>
            {["Instagram", "Twitter (x)", "Linkedin"].map((item, idx) => {
              return (
                <a
                  href="#"
                  key={idx}
                  className="mt-2 block capitalize text-gray-400"
                >
                  {item}
                </a>
              );
            })}
          </div>

          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right text-sm text-gray-400">
              refokus is a pioneering digital agency driven by design and
              empowered by technology
            </p>
            <img
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt=""
              className="w-32 mt-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
