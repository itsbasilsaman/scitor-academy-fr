import ContentSection from "@/component/ContentSection";
import HeroSection from "@/component/HeroSection";
import InstructorTeam from "@/component/InstructorTeam";
import MainBanner from "@/component/MainBanner";
import OurCourses from "@/component/ourCourses";
import OurValues from "@/component/OurValues";
import TestimonialSection from "@/component/TestimonialSection";
 
export default function Home() {
  return (
    <>
     <MainBanner/>
     <OurValues/>
     <ContentSection/>
     <OurCourses/>
 
     <TestimonialSection/>
     <HeroSection/>
     <InstructorTeam/>
    </>
  );
}


