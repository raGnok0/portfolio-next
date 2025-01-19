import ContactCircle from "@/components/footer/ContactCircle";
import Image from "next/image";

export default function Aboutnav() {
    return (
        <>
            <div
                className="bg-white"
                style={{
                    height: "100vh",
                    width: "100vw",
                }}
            >
                {/* Navigation */}
                <nav className="w-11/12 lg:w-4/5 mx-auto flex items-center justify-between mt-6">
                    <div>
                        <h1 className="text-lg font-bold text-black">Code by Deb</h1>
                    </div>
                    <div className="ml-auto">
                        <div className="hidden sm:flex space-x-8 text-black">
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
                <div className="w-11/12 md:w-9/12 mx-auto mt-20 text-center md:text-left pb-10">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl text-black leading-tight">
                        Helping brands thrive in the digital world
                    </h1>
                    <div className="mt-10 md:mt-20">
                        <hr />
                    </div>
                </div>

                {/* Contact Circle */}
                <div className="mt-10">
                    <ContactCircle name="Work" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row justify-between items-center w-11/12 lg:w-9/12 mx-auto space-y-10 md:space-y-0">
                    {/* Text Section */}
                    <div className="md:w-1/2 text-center md:text-left space-y-6">
                        <span className="text-black text-lg md:text-xl font-medium">
                            I help companies from all over the world with tailor-made solutions.
                            With each project, I push my work to new horizons, always putting
                            quality first.
                        </span>
                        <h1 className="mt-4 text-gray-400 text-lg">Always Exploring...</h1>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <Image
                            src="/images/click.jpg"
                            width={400}
                            height={400}
                            className="rounded-lg"
                            alt="Clicked image at college"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}