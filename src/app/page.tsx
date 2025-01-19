import Topscreen from "@/components/Topscreen";
import SecondScreen from "@/components/SecondScreen";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Topscreen/>
        <SecondScreen/>
        <Footer/>
      </div>
    </>
  );
}
