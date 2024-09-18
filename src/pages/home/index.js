// import Header from "../../components/common/header/header"
import HeroSection from "@/components/home/hero-section/herosection";
import  ThreeStepTut from '@/components/home/three-step-tut'
import Counter from "../../components/home/counter-section";
import Services from "../../components/home/Services"
import Adbanner from "../../components/home/adv-banner"
import Section6 from '../../components/home/develop-your-brand'
import Section7 from '../../components/home/testimonial-section'
import Projects from "../../components/home/projects"
import LimitedDeals from "../../components/home/liminted-deals"
import Reviews from "../../components/home/reviews"
import BrandSection from "../../components/home/brand-section"
import RecentBlogs from "../../components/home/recent-blogs"


import Header from '@/components/common/header/header'
import Footer from '@/components/common/footer/footer'
import DropDown from "@/components/common/dropdownlist"

function HomePage(){ 
 return(
      <>
            <Header/>
            {/* <DropDown/> */}
            <HeroSection/>
            <Projects/>
            <Footer/>
      </>
 );     
}
export default HomePage;