export default function Work() {
    return (
      <>
        <div className="w-11/12 m-auto" style={{
          transform:"translateY(-32px)",
          position:"relative",
          zIndex:"1"
        }}>
          <div className="ml-8 mt-10 sm:mt-0 sm:ml-16 md:ml-28 mb-7">
            <h4 className="hidden sm:block sm:text-2xl md:text-xs font-bold text-gray-400">RECENT WORK</h4>
          </div>
          <hr />
          <div className="flex flex-col sm:flex-row justify-evenly mt-7 mb-7 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold">OPENCV</h1>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-3 sm:mt-0">
              Flask based Facial Recognition attendance application
            </h3>
          </div>
          <hr />
          <div className="w-32 h-12 justify-center items-center flex m-auto rounded-full bg-black mt-10">
            <h1 className="text-sm sm:text-base lg:text-lg text-white">More Work</h1>
          </div>
        </div>
      </>
    );
  }
  