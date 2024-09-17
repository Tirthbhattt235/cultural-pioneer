import React, { useState, useEffect } from "react";
import Header from "@/components/common/header/header.js";
import Footer from "@/components/common/footer/footer.js";
import Breadcrumb from "../../components/common/bread-crumb/bread-crumb";
import styled from "styled-components";
import Ftrswiper from "../../components/common/ftr-img-swiper";
import headerbackgroundimage from "../../../public/assets/images/Breadcrumb-Bg.png";
import { useRouter } from "next/router";
import Inquiry from "../../components/about/inquiry";
import Testimonial from "../../components/home/testimonial-section";
import Locations from "../../components/contact/location";
import Contact_Faqs from "../../components/contact/faqs";
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
  a {
    cursor: pointer;
  }
  a:hover {
    color: white ;
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
export default function Search_result() {
  const router = useRouter();
  const [data, setData] = useState();

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Access searchResults from state passed by BlogLeftSection component
    const searchData = window.localStorage.getItem("search-results");
    setSearchResults(searchData || []);
  }, []);
  const [searchString, setSearchString] = useState();
  useEffect(() => {
    const { searchQuery } = router.query; // Get the search query from the router query object
    setSearchString(searchQuery);
  }, [router.query]);

  return (
    <>
      {/* {data ? ( */}
      <>
        <p>{searchString}</p>
        <Container>
          <section
            className="wrapper"
            style={{ backgroundImage: `url(${headerbackgroundimage.src})` }}
          >
            <>
              <Header />

              <Breadcrumb SearchProp={`for :${searchString}`} />
            </>
          </section>
        </Container>
        <Inquiry background='none-bg'></Inquiry>
        <Locations></Locations>
        <Testimonial/>
        <Contact_Faqs></Contact_Faqs>
        <Ftrswiper />
        <Footer></Footer>
      </>
      {/* ) : null} */}
    </>
  );
}
