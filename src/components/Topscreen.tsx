import Navbar from "./nav/Nabvar"
import Tagline from "./Tagline"
import Bigname from "./Bigname"

export default function Topscreen(){
    return(
        <>
            <div className="bg-[url(/images/deb.png)] h-full bg-center h-64 sm:h-full bg-center">
                <Navbar/>
                <div className="flex flex-col sm:">
                    <div className="order-2 sm:order-1">
                        <Tagline/>
                    </div>
                    <div className="order-1 sm:order-2">
                        <Bigname/>
                    </div>
                </div>
            </div>
        </>
    )
}