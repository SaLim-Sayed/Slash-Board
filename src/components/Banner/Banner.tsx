import { Carousel, Image } from "antd";
import React from "react";
 
export const Cats = [
  { id: 1, title: "BodyCare", img: "/banner1.jpeg" },
  { id: 2, title: "BodyCare", img: "/banner2.jpeg" }, 
];
const Banner: React.FC = () => (
  <Carousel draggable arrows autoplaySpeed={800} autoplay>
  
  {Cats.map((cat) => (
      <div className="flex p-4 relative" key={cat.id}>
        <Image
        className="rounded-lg"
          preview={false}
          src={cat.img}
          alt={cat.title}
          height={300}
        />
      </div>
    ))}
  
  </Carousel>
);

export default Banner;
