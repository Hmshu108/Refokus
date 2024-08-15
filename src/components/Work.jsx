import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnV0dXJlfGVufDB8fDB8fHww",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661386253258-64ab9521ce89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnV0dXJlfGVufDB8fDB8fHww",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1573537805874-4cedc5d389ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1dHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1508361727343-ca787442dcd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnV0dXJlfGVufDB8fDB8fHww",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1673803528948-cc3eb13120d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZ1dHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1513719172228-06ca20578d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZ1dHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const {  scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, idx) =>
          arr.indexOf(idx) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-10 ">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[28vw] leading-none font-medium tracking-tighter select-none">
          work
        </h1>
        <div className="w-full h-full  top-0 absolute">
          {images.map(
            (image, idx) =>
              image.isActive && (
                <img
                  key={idx}
                  className="absolute w-60 h-48 object-cover rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: image.top, left: image.left }}
                  src={image.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
