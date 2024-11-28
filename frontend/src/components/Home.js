import CompanyProfile from "./CompanyProfile";
import CouresMain from "./CouresMain";
import IconBar from "./IconBar";
import News from "./News";
import OurSchools from "./Our_Schools";
import FadeCarousel from "./Slider";
import StudentTestimonials from "./student_testimonials";
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
      <News/>
      <StudentTestimonials/>
      </>
    );
  }
  
