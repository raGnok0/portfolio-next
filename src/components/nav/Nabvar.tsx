"use client"

import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter()


    return (
      <>
        <nav className="w-11/12 lg:w-4/5 mx-auto flex items-center mt-6">
          {/* Left Section: Logo */}
          <div>
            <h1 className="text-lg font-bold">Code by Deb</h1>
          </div>
  
          {/* Right Section: Links */}
          <div className="ml-auto">
            <div className="hidden sm:flex space-x-8 text-black">
              <h1 className="cursor-pointer hover:text-blue-500 transition">Work</h1>
              <h1 className="cursor-pointer hover:text-blue-500 transition" onClick={()=>{router.push("/about")}}>About</h1>
              <h1 className="cursor-pointer hover:text-blue-500 transition" onClick={()=>{router.push("/contact")}}>Contact</h1>
            </div>
            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                className="p-2 text-gray-700 focus:outline-none hover:text-blue-500 transition"
                aria-label="Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </>
    );
  }
  