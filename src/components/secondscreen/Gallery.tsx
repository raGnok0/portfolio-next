"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Gallery() {
    // const [scrollY, setScrollY] = useState(0);
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
                <div className="grid grid-cols-4 gap-4" style={row1Style}>
                    <div>
                        <Image src="/images/home-item-1.jpg" alt="Home Item 1" className="w-full h-auto" />
                    </div>
                    <div>
                        <video
                            src="/images/home-item-2.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-full h-auto pointer-events-none"
                        />
                    </div>
                    <div>
                        <Image src="/images/home-item-3.jpg" alt="Home Item 3" className="w-full h-auto" />
                    </div>
                    <div>
                        <video
                            src="/images/home-item-4.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-full h-auto pointer-events-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-8" style={row2Style}>
                    <div>
                        <video
                            src="/images/home-item-5.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-full h-auto pointer-events-none"
                        />
                    </div>
                    <div>
                        <Image src="/images/home-item-6.jpg" alt="Home Item 6" className="w-full h-auto" />
                    </div>
                    <div>
                        <video
                            src="/images/home-item-7.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-full h-auto pointer-events-none"
                        />
                    </div>
                    <div>
                        <Image src="/images/home-item-8.jpg" alt="Home Item 8" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}