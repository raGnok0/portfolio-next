export default function ContactButton() {
    return (
      <>
        <div
          className="w-full relative z-20 -translate-y-28 md:-translate-y-24 lg:-translate-y-36 lg:-translate-x-56"
        >
          <div className="flex flex-wrap justify-center gap-5">
            {/* Email Button */}
            <div className="rounded-full w-11/12 sm:w-3/4 md:w-72 h-16 border flex items-center justify-center">
              <h1 className="text-center text-lg md:text-xl">
                baruadeb058@gmail.com
              </h1>
            </div>
  
            {/* Phone Button */}
            <div className="rounded-full w-11/12 sm:w-3/4 md:w-60 h-16 border flex items-center justify-center hover:bg-blue-500 delay-150 transition ease-in-out duration-300">
              <h1 className="text-center text-lg md:text-xl">
                +91 9123069809
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  }
  