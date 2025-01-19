import Image from "next/image";

export default function Tagline() {
  return (
    <>
      <div className="w-11/12 sm:w-2/6 ml-auto mt-5 sm:mt-44">
        <div className="w-fit pb-1 -rotate-45 sm:pb-12">
          <Image
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/long-arrow-down.png"
            alt="long-arrow-down"
          />
        </div>
        <div className="text-2xl sm:text-2xl lg:text-3xl w-full sm:w-11/12 mx-auto sm:ml-auto mt-6 text-center sm:text-right">
          <h1 className="w-fit mr-auto text-black">Freelancer</h1>
          <h1 className="w-fit mr-auto text-black">Web Designer & Developer</h1>
        </div>
      </div>
    </>
  );
}
