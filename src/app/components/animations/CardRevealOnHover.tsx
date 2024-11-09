import Image from "next/image";
import React from "react";
import monumentImage from "@/assets/images/monument.jpg";

const CardRevealOnHover = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container mx-auto p-2 h-40 flex justify-center image-container flex-none">
        {[...new Array(15)].map((_, i) => {
          return (
            <div className="item border" key={i}>
              <Image
                width={200}
                height={200}
                key={i}
                src={monumentImage.src}
                alt="A monument Image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardRevealOnHover;
