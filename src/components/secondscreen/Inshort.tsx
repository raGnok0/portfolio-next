"use client"

import { useState,useEffect } from "react"

export default function Inshort(){
    // const [scroll ,setScroll] = useState(0)
    const [lastScroll, setLastscroll] =useState(0)
    const [scrollDirection,setScrolldirection] = useState("down")

    useEffect(()=>{
        const handleScroll = ()=>{
            const currentScroll = window.scrollY;

            if(currentScroll> lastScroll){
                setScrolldirection("down")
            }else{
                setScrolldirection("up")
            }

            setLastscroll(currentScroll);
        }

        window.addEventListener('scroll',handleScroll);

        return(()=>{
            window.removeEventListener('scroll',handleScroll)
        })
    },[lastScroll])

    const scrollStyle = {
        transform:`translateX(${scrollDirection == "down" ? "-18pc" : "10px"})`,
        translate:`transform 1s ease`
    }

    return(
        <>
            <div>
                <div className="flex relative items-center" style={scrollStyle}>
                    <h1 className="mt-8 text-4xl text-black font-bold font-mono whitespace-nowrap">Hi, It&apos;s Deb from Earth, a cool tech guy who loves crafting innovative solutions with code!</h1>
                </div>
            </div>
        </>
    )
}