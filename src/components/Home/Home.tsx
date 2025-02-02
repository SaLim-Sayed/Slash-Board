"use client";
import { fetchImages } from "@/src/utils/api";
import { Image } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";

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
    <div className="">
      <Hero />
      <div className="grid overflow-hidden pt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className=" w-full sm:w-[400px] h-[300px] overflow-hidden p-2 rounded-lg shadow-md"
          >
            <Image
               width={"100%"}
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
