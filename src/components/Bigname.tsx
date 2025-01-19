export default function Bigname() {
    return (
      <>
        <div
          className="overflow-hidden whitespace-nowrap"
          style={{
            position: "relative",
            zIndex: "1",
            marginTop: "5vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="text-9xl sm:text-9xl animation-marquee inline-block text-black"
            style={{
              display: "inline-flex",
              animation: "move-left 10s linear infinite",
            }}
          >
            <h1>- DEB BARUA _</h1>
          </div>
        </div>
      </>
    );
  }
  