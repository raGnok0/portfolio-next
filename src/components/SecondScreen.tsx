import Abstract from "./secondscreen/Abstract"
import AboutCircle from "./secondscreen/AboutCircle"
import Work from "./secondscreen/Work"
import Gallery from "./secondscreen/Gallery"
import Inshort from "./secondscreen/Inshort"

export default function SecondScreen(){
    return(
        <>
            <div className="bg-white h-full">
                <Inshort/>
                <Abstract/>
                <AboutCircle/>
                <Work/>
                <Gallery/>
            </div>
        </>
    )
}