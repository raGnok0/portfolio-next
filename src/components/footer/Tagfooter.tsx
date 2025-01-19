import Image from 'next/image';

export default function Tagfooter() {
  return (
    <>
      <div className="w-full mt-2 sm:mt-20">
        <div className="w-11/12 sm:w-3/4 md:w-4/6 mx-auto pb-16">
          <div className="flex sm:flex-row items-center justify-evenly sm:justify-normal">
            <div className="mt-2 w-12 sm:w-auto">
              <Image
                className="rounded-full"
                width="80"
                height="80"
                src="/images/deb-profile.jpg"
                alt="Profile"
              />
            </div>
            <div className="text-5xl sm:text-6xl lg:text-8xl mt-4 sm:mt-0 sm:ml-10 text-center sm:text-left">
              <h1>Let&apos;s Work</h1>
            </div>
          </div>
          <div className="flex sm:flex-row justify-between mt-2 sm:mt-6 items-center sm:items-start">
            <div className="text-5xl sm:text-6xl lg:text-8xl text-center sm:text-left">
              <h1>together</h1>
            </div>
            <div className="mt-6 sm:mt-0 w-fit rotate-45">
              <Image
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-down.png"
                alt="long-arrow-down"
              />
            </div>
          </div>
          <hr className="mt-16 sm:mt-6" />
        </div>
      </div>
    </>
  );
}
