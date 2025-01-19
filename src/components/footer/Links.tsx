"use client";

export default function Links() {
  const date = new Date();

  return (
    <>
      <div className="z-30 relative -translate-y-20 lg:translate-y-1">
        <div className="flex flex-col lg:flex-row justify-between w-11/12 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between w-full lg:w-2/12 mb-6 lg:mb-0">
            <div className="mb-4 sm:mb-0 sm:mr-6">
              <h1 className="text-slate-400 font-bold text-sm font-mono">
                VERSION
              </h1>
              <h1 className="font-bold text-sm font-mono">2025@Edition</h1>
            </div>
            <div>
              <h1 className="text-slate-400 font-bold text-sm font-mono">
                LOCAL TIME
              </h1>
              <h1 className="font-bold text-sm font-mono whitespace-nowrap">
                {date.toLocaleTimeString()}
              </h1>
            </div>
          </div>

          {/* Socials Section */}
          <div className="w-full lg:w-2/12">
            <h1 className="text-slate-400 font-bold text-sm font-mono mb-4">
              SOCIALS
            </h1>
            <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-2 justify-start lg:justify-between">
              <h1 className="font-bold">Instagram</h1>
              <h1 className="font-bold">Twitter</h1>
              <h1 className="font-bold">LinkedIn</h1>
            </div>
            <hr className="visible sm:hidden mt-4" />
          </div>
        </div>
      </div>
    </>
  );
}
