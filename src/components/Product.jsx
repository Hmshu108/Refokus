import React from "react";
import Button from "./Button";

function Product({ product,mover,count }) {
  return (
    <div className="w-full h-[23rem] py-20 text-white">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-lg mx-auto flex justify-between items-center">
        <h1 className="text-6xl   capitalize font-medium">{product.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{product.description}</p>
          <div className="flex gap-5 items-center">
            {product.live && <Button title="Live Project" />}
            {product.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
