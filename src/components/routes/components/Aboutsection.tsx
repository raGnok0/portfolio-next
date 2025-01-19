export default function Aboutsection() {
    return (
        <>
            <div
                className="bg-white"
            >
                {/* Content Container */}
                <div className="flex">
                    <div
                        className="w-11/12 md:w-5/6 m-auto"
                        style={{
                            marginTop: "110vh",
                        }}
                    >
                        {/* Header */}
                        <div>
                            <h1 className="text-black text-4xl md:text-5xl lg:text-6xl text-center md:text-left">
                                I can help you with...
                            </h1>
                        </div>

                        {/* Services Section */}
                        <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-20 pb-32">
                            {/* Design Card */}
                            <div className="flex-1">
                                <div>
                                    <h1 className="text-gray-400 text-xl text-center md:text-left">01</h1>
                                </div>
                                <hr className="mt-6" />
                                <div className="mt-10">
                                    <h1 className="text-black text-3xl md:text-4xl text-center md:text-left">
                                        Design
                                    </h1>
                                </div>
                                <div className="mt-5">
                                    <p className="text-black text-lg md:text-xl text-center md:text-left">
                                        With a solid track record in designing websites, I deliver strong
                                        and user-friendly digital designs. (Since 2024 only in combination
                                        with development)
                                    </p>
                                </div>
                            </div>

                            {/* Development Card */}
                            <div className="flex-1">
                                <div>
                                    <h1 className="text-gray-400 text-xl text-center md:text-left">02</h1>
                                </div>
                                <hr className="mt-6" />
                                <div className="mt-10">
                                    <h1 className="text-black text-3xl md:text-4xl text-center md:text-left">
                                        Development
                                    </h1>
                                </div>
                                <div className="mt-5">
                                    <p className="text-black text-lg md:text-xl text-center md:text-left">
                                        I build scalable websites from scratch that fit seamlessly with
                                        design. My focus is on micro animations, transitions, and
                                        interaction. Building with Webflow (or Kirby CMS).
                                    </p>
                                </div>
                            </div>

                            {/* Full Stack Card */}
                            <div className="flex-1">
                                <div>
                                    <h1 className="text-gray-400 text-xl text-center md:text-left">03</h1>
                                </div>
                                <hr className="mt-6" />
                                <div className="mt-10">
                                    <h1 className="text-black text-3xl md:text-4xl text-center md:text-left">
                                        Full Stack
                                    </h1>
                                </div>
                                <div className="mt-5">
                                    <p className="text-black text-lg md:text-xl text-center md:text-left">
                                        A complete website from concept to implementation, that&apos;s what
                                        makes me stand out. My great sense for design and my development
                                        skills enable me to create kick-ass projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}