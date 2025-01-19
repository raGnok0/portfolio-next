import Links from "@/components/footer/Links";
import Image from "next/image";

export default function Contactnav() {
    return (
        <>
            <div
                className="bg-black"
                style={{
                    height: "250vh",
                    width: "100vw",
                }}
            >
                {/* Navigation */}
                <nav className="w-11/12 lg:w-4/5 mx-auto flex items-center justify-between mt-6">
                    <div>
                        <h1 className="text-lg font-bold text-white">Code by Deb</h1>
                    </div>

                    <div className="ml-auto">
                        <div className="hidden sm:flex space-x-8 text-white">
                            <h1 className="cursor-pointer hover:text-blue-500 transition">Work</h1>
                            <h1 className="cursor-pointer hover:text-blue-500 transition">About</h1>
                            <h1 className="cursor-pointer hover:text-blue-500 transition">Contact</h1>
                        </div>
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

                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center w-11/12 md:w-9/12 mx-auto mt-20 space-y-10 md:space-y-0 md:space-x-10">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl text-white text-center md:text-left">
                        Let&apos;s start a project together
                    </h1>
                    <div>
                        <Image
                            className="rounded-full"
                            src="/images/potraitdeb.jpg"
                            width={150}
                            height={150}
                            alt="Portrait of Deb"
                        />
                    </div>
                </div>

                {/* Form Section */}
                <div
                    className="flex flex-col md:flex-row w-11/12 md:w-2/3 mx-auto mt-20 gap-10"
                    style={{
                        marginTop: "25vh",
                    }}
                >
                    {/* Form Inputs */}
                    <div className="w-full md:w-2/3 space-y-10">
                        {[
                            { label: "What's your name?", placeholder: "Deb Barua" },
                            { label: "What's your email?", placeholder: "debbarua058@gmail.com" },
                            {
                                label: "What's the name of your organization",
                                placeholder: "Deb Barua",
                            },
                            {
                                label: "What services are you looking for?",
                                placeholder: "Web services",
                            },
                            { label: "Your message", placeholder: "message" },
                        ].map((item, index) => (
                            <div key={index}>
                                <hr />
                                <div className="mt-10">
                                    <div className="flex">
                                        <h1 className="text-xl text-gray-400">{`0${index + 1}`}</h1>
                                        <h1 className="text-3xl ml-10">{item.label}</h1>
                                    </div>
                                    <div className="w-fit ml-16 mt-9">
                                        <input
                                            className="text-gray-400 bg-black border-0 text-2xl w-full"
                                            type="text"
                                            placeholder={item.placeholder}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-10">
                        <div>
                            <h1 className="text-gray-400 text-xs">CONTACT DETAILS</h1>
                            <div className="mt-5 text-white">
                                <h1 className="mt-1">baruadeb058@gmail.com</h1>
                                <h1 className="mt-1">+91 9123069809</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-gray-400 text-xs">BUSINESS DETAILS</h1>
                            <div className="mt-5 text-white">
                                <h1 className="mt-1">KOLKATA, HOOGHLY</h1>
                                <h1 className="mt-1">712250</h1>
                                <h1 className="mt-1">INDIA</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div
                    className="w-11/12 md:w-2/3 mx-auto mt-32 sm:mt-80"
                    // style={{
                    //     marginTop: "30vh",
                    // }}
                >
                    <hr />
                    <div className="relative flex justify-center items-center -translate-y-24">
                        <div className="rounded-full w-32 h-32 md:w-44 md:h-44 bg-blue-600 flex items-center justify-center">
                            <h1 className="text-sm md:text-lg text-white">Send it!!</h1>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <Links />
                </div>
            </div>

        </>
    )
}