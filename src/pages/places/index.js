import React, { useState,useEffect } from 'react'
import Header from "@/components/common/header/header.js";
import Footer from "@/components/common/footer/footer.js";
import Breadcrumb from "../../components/common/bread-crumb/bread-crumb";
import styled from "styled-components";
import Ftrswiper from "../../components/common/ftr-img-swiper";
import headerbackgroundimage from "../../../public/assets/images/Breadcrumb-Bg.png";
import BlogRightSection from '../../components/blog/right-section';

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
export default function Blog() {
  const [data,setData]=useState()
      useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await fetch('/blog.json');
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
            fetchData();
          }, []);
          useEffect(()=>{
            window.localStorage.clear('search-results')
          },[])


  return (
<>
      {data ?
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
      <BlogRightSection/>
      {/* <Ftrswiper/> */}
      <Footer></Footer>   
            </>


      :null}
</>
  )
}
