import React, { useEffect, useState } from "react";
import Header from "@/components/common/header/header.js";
import Footer from "@/components/common/footer/footer.js";
import Breadcrumb from "@/components/common/bread-crumb/bread-crumb";
import styled from "styled-components";
import headerbackgroundimage from "../../../../public/assets/images/Breadcrumb-Bg.png";
import Ftrswiper from "@/components/common/ftr-img-swiper";
import Main_cart from "../../../components/common/main-cart";
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

  .wrapper {
    background-repeat: no-repeat;
    background-size: cover;
  }   
`;

const  Cartdetails=()=>{
      const [data, setdata] = useState();
  useEffect(() => {
    const arr = window.localStorage.getItem("array3");
    console.log(JSON.parse(arr));
    if (arr) {
      setdata(JSON.parse(arr));
    }
  }, []);
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
{data ?     
      <Main_cart cart_info={data}>
            </Main_cart>
:null}
<Ftrswiper></Ftrswiper>
      <Footer></Footer>

</>)
  
}

export default Cartdetails;