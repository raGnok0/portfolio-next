import Navbar from "./nav/Nabvar"
import Tagline from "./Tagline"
import Bigname from "./Bigname"

export default function Topscreen(){
    return(
        <>
            <div className="bg-[url('/portfolio-next/images/deb.png')] bg-center sm:h-full bg-center" style={{
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                backgroundPosition:"center",
                height:"100vh",
                width:"100vw"
            }} >

                <div className="flex">
                    <Navbar/>
                </div>
                <div className="flex flex-col mt-2 sm:mt-2" style={{
                    height:"89vh"
                }}>
                    <div className="order-2 sm:order-1" style={{
                        height:"40vh"
                    }}>
                        <Tagline/>
                    </div>
                    <div className="order-1 sm:order-2 mt-72 sm:mt-28" style={{
                        height:"30vh",
                        width:"100vw",
                    }}>
                        <Bigname/>
                    </div>
                </div>
            </div>
        </>
    )
}
