import CompanyProfile from "./CompanyProfile";
import CouresMain from "./CouresMain";
import IconBar from "./IconBar";
import OurSchools from "./Our_Schools";
import FadeCarousel from "./Slider";
import VisionSection from "./vistionandMisstion";


export default function Home() {
    return (
      <>
      <FadeCarousel/>
      <IconBar/>
      <CompanyProfile/>
      <VisionSection/>
      <CouresMain/>
      <OurSchools/>
      </>
    );
  }
  
