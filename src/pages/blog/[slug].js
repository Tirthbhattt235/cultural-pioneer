import React, { useState,useEffect } from 'react'
import Header from "@/components/common/header/header.js";
import Footer from "@/components/common/footer/footer.js";
import Breadcrumb from "../../components/common/bread-crumb/bread-crumb";
import styled from "styled-components";
import Ftrswiper from "../../components/common/ftr-img-swiper";
import headerbackgroundimage from "../../../public/assets/images/Breadcrumb-Bg.png";
import BlogRightSection from '../../components/blog/right-section';
import { useRouter } from 'next/router';
import BlogDetailsSection from '../../components/blog-details/details';
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

export default function BlogDetails() {
const router = useRouter();

  const [data,setData]=useState()
  const [blog,setblog]=useState()
        useEffect(() => { 
              const fetchData = async () => {
                try {
                  const response = await fetch('/blog.json');
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  const data = await response.json();
                  setData(data);
                  const currentPageSlug = router.query.slug;

                  // Find the blog with matching slug
                  const matchingBlog = data.blogs?.find(blog => blog.slug === `/blog/${currentPageSlug}`);
                  if (matchingBlog) {
                    setblog(matchingBlog)
                      console.log("Matching Blog:", matchingBlog , currentPageSlug);
                  } else {
                      console.log("No blog found with matching slug:",matchingBlog,currentPageSlug);
                  }
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              };
              fetchData();
            }, [router.query.slug]);
          
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
      {blog?
        <BlogDetailsSection blog={blog}></BlogDetailsSection>
      
    :null}
      <Ftrswiper/>
      <Footer></Footer>   
            </> 


      :null}
</>
  )
}
