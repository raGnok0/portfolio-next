import ContactButton from "./footer/ContactButton"
import ContactCircle from "./footer/ContactCircle"
import Links from "./footer/Links"
import Tagfooter from "./footer/Tagfooter"

export default function Footer() {
    return (
        <>
            <div className="bg-black flex-row" style={{
                height:"100vh",
                width:"100vw",
                backgroundSize:"cover",
                backgroundPosition:"center",
            }}>
                <div className="flex">
                    <Tagfooter/>
                </div>
                <ContactCircle/>
                <ContactButton/>
                <Links/>
            </div>
        </>
    )
}