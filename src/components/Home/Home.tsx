"use client";
import { fetchImages } from "@/src/utils/api";
import { Image } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    fetchImages().then((data) => {
      console.log(data);
      setImages(data);
    });
  }, [router]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="  w-[330px] h-[300px] overflow-hidden  rounded-lg shadow-md"
          >
            <Image
               width={330}
              height={300}
              src={image}
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
