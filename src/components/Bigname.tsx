export default function Bigname(){
    return(
        <>
            <div className="rotate-90 overflow-hidden whitespace-nowrap" style={{
                position:"relative",
                // width:"10pc",
                zIndex:"1",
                marginTop:"7.7pc",
                // transform:"translateY(20px)",
                display:"flex",
                alignItems:"center"
            }}>
                <div className="text-9xl animation-marquee inline-block" style={{
                    display:"inline-flex",
                    animation:"move-left 10s linear infinite"
                }}>
                    <h1>- DEB BARUA _</h1>
                </div>
            </div>
        </>
    )
}