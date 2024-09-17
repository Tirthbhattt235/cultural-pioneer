import React from "react";
import Header from "@/components/common/header/header.js";
import Footer from "@/components/common/footer/footer.js";
import Breadcrumb from "../../components/common/bread-crumb/bread-crumb";
import styled from "styled-components";
import headerbackgroundimage from "../../../public/assets/images/Breadcrumb-Bg.png";
import Customgoods from "../../components/about/customized-goods"
import Aboutus from "../../components/about/about-us";
import Award from "../../components/about/awards";
import Faq from "../../components/about/faq";
import Team from "../../components/about/team";
import Inquiry from "../../components/about/inquiry";
import Brands from "../../components/about/brand-section-about";
import { debug } from "util";
 
 const Container = styled.section`
  z-index: 0;
  margin-bottom: 100px;
  padding: 0%;    
  position: relative; 
  background-image: linear-gradient(
    
    -45deg,
    var(--wdtPrimaryColor) 50%,
    var(--wdtTertiaryColor) 100%
  );
  a{
    cursor: pointer;
  }
  a:hover{
    color:white !important;
  }
  div,
  section {  
    z-index: 10;
  }
@media screen and (max-width: 768px) {
  margin-bottom: 50px; 
} 
  .wrapper {
    background-repeat: no-repeat;
    background-size: cover;
  }   
`;
const  About=()=>{
  // debug();
  
  return ( 
    <>
     
      <Container> 
        <section   
          className="wrapper"
          style={{ backgroundImage: `url(${headerbackgroundimage.src})` }}
        >
        <>
          <Header /> 

          <Breadcrumb />  
        </> 
        </section>
      </Container>   
      <Customgoods></Customgoods>
      <Aboutus></Aboutus>
      <Award></Award>
      <Faq/>
      <Team/>
      <Inquiry/>
      <Brands/>
      <Footer></Footer>
    </>);
}

export default About;