import { Carousel, Image } from "antd";
import React from "react";
 
export const Cats = [
  { id: 1, title: "BodyCare", img: "/cats/1.jpg" },
  { id: 2, title: "BodyCare", img: "/cats/2.jpg" },
  { id: 3, title: "BodyCare", img: "/cats/3.jpg" },
  { id: 4, title: "BodyCare", img: "/cats/4.jpg" },
  { id: 5, title: "BodyCare", img: "/cats/5.jpg" },
  { id: 6, title: "BodyCare", img: "/cats/6.jpg" },
  { id: 7, title: "BodyCare", img: "/cats/7.jpg" },
  { id: 8, title: "BodyCare", img: "/cats/8.jpg" },
  { id: 9, title: "BodyCare", img: "/cats/9.jpg" },
  { id: 10, title: "BodyCare", img: "/cats/10.jpg" },
  { id: 11, title: "BodyCare", img: "/cats/11.jpg" },
];
const Slider: React.FC = () => (
  <Carousel arrows draggable  autoplay>
    {Cats.map((cat) => (
      <div className="w-full h-full relative" key={cat.id}>
        <Image
          preview={false}
          src={cat.img}
          alt={cat.title}
          width={"100%"}
          height={1000}
        />
        <div className="absolute w-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center   text-2xl  font-bold      z-50 bg-white opacity-80">
          <p className="   text-transparent bg-gradient-to-r from-[#7b725d] to-[#5A5446] bg-clip-text">
            سلاش بورد يضفي لمسه فخامه ورقي علي اي مساحه بتصميمه الفريد الذي يضفي
            لمسه هدؤ وعراقه للمكان{" "}
            <span className="text-orange-500">
              (ويتميز باضفاء رائحه مميزه حسب اختيارات العميل)
            </span>
            حيث تم المذج بين طبقتين من القماش والجلد والمطاط لتنتج أقوى منتج
            ديكوري مقاوم للصدمات والماء و الحراره و عازل للصوت بضمان ٢٠ عام
          </p>
        </div>
      </div>
    ))}
  </Carousel>
);

export default Slider;
