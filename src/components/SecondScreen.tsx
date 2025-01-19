import Abstract from "./secondscreen/Abstract"
import AboutCircle from "./secondscreen/AboutCircle"
import Work from "./secondscreen/Work"
import Gallery from "./secondscreen/Gallery"
// import Gallery from "./secondscreen/Gallery"

export default function SecondScreen(){

    return(
        <>
            <div className="bg-white" style={{
                // height:"250vh"
                // height:`${scrollheight}vh`,
                // transition:"height 0.2s ease"
            }}>
                <div className="flex">
                    <Abstract/>
                </div>
                <AboutCircle/>
                <Work/>
                <div className="hidden sm:block">
                    <Gallery/>
                </div>
            </div>
        </>
    )
}