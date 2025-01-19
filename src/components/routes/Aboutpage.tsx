import Footer from "../Footer";
import Aboutnav from "./components/Aboutnav";
import Aboutsection from "./components/Aboutsection";

export default function Aboutpage(){
    return(
        <>
            <div style={{
                overflowX:"hidden"
            }}>
                <div className="flex">
                    <Aboutnav/>
                </div>
                <Aboutsection/>
                <Footer/>
            </div>
        </>
    )
}