import Image from "next/image";

export default function Tagfooter() {
    return (
        <>
            <div>
                <div className="w-4/6 m-auto mt-20">
                    <div className="pb-16">
                        <div className="flex">
                            <div className="mt-2">
                                <Image className="rounded-full" width="100" height="100" src="/images/deb-profile.jpg" alt="" />
                            </div>
                            <div className="text-9xl ml-10">
                                <h1>Let&apos;s Work</h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-8xl">
                                <h1>together</h1>
                            </div>
                            <div className="w-fit rotate-45">
                                <Image width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-down.png" alt="long-arrow-down" />
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}