"use client"
import { useRouter } from "next/navigation";

export default function AboutCircle() {
  const router = useRouter()
    return (
      <>
        <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-6/12 sm:m-auto sm:mt-20">
          <div className="bg-black w-32 h-32 sm:w-44 sm:h-44 ml-auto rounded-full flex items-center justify-center" onClick={()=>router.push("/about")}>
            <h1 className="text-white text-sm sm:text-base md:text-lg">About me</h1>
          </div>
        </div>
      </>
    );
  }
  