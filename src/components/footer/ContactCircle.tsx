"use client"
import { useRouter } from "next/navigation";

export default function ContactCircle({name="Get in touch"}) {
  const router = useRouter()
    return (
      <>
        <div
          className="w-full mx-auto relative z-10 -translate-y-32 translate-x-16 md:-translate-y-24 lg:-translate-y-36 lg:translate-x-64"
        >
          <div className="rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-44 lg:h-44 bg-blue-600 flex items-center justify-center mx-auto" onClick={()=>router.push("/contact")}>
            <h1 className=" text-sm sm:text-base md:text-lg lg:text-xl text-white">
              {name}
            </h1>
          </div>
        </div>
      </>
    );
  }
  