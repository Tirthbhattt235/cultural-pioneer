import React from "react";
import Header from "@/components/common/header/header.js";
import Footer from "@/components/common/footer/footer.js";
import Breadcrumb from "../../components/common/bread-crumb/bread-crumb";
import styled from "styled-components";
import Ftrswiper from "../../components/common/ftr-img-swiper";

import headerbackgroundimage from "../../../public/assets/images/Breadcrumb-Bg.png";
import Services from "../../components/service/services";
import Feedbacks from "../../components/service/feedback";
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
    color:white ;
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
    {debug}
     
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
    <Services/>
    <Feedbacks/>
      <Ftrswiper/>
      <Footer></Footer>
    </>);
}

export default About;