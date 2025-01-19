"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Gallery() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY >= 1100) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const row1Style = {
    transform: `translateX(${scrollDirection === "down" ? "50px" : "-50px"})`,
    transition: "transform 1s ease",
  };

  const row2Style = {
    transform: `translateX(${scrollDirection === "down" ? "-30px" : "30px"})`,
    transition: "transform 1s ease",
  };

  return (
    <>
      <div className="mt-20 pb-36 rounded-b-full">
        {/* First Row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          style={row1Style}
        >
          <div>
            <Image
              src="/images/home-item-1.jpg"
              alt="Home Item 1"
              height={250}
              width={250}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <video
              src="/images/home-item-2.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover pointer-events-none"
            />
          </div>
          <div>
            <Image
              src="/images/home-item-3.jpg"
              alt="Home Item 3"
              width={250}
              height={250}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <video
              src="/images/home-item-4.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover pointer-events-none"
            />
          </div>
        </div>

        {/* Second Row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8"
          style={row2Style}
        >
          <div>
            <video
              src="/images/home-item-5.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover pointer-events-none"
            />
          </div>
          <div>
            <Image
              src="/images/home-item-6.jpg"
              alt="Home Item 6"
              height={250}
              width={250}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <video
              src="/images/home-item-7.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover pointer-events-none"
            />
          </div>
          <div>
            <Image
              src="/images/home-item-8.jpg"
              alt="Home Item 8"
              height={250}
              width={250}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
