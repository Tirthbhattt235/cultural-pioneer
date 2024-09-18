import React, { useState, useEffect } from "react";
import Header from "@/components/common/header/header.js";
import Footer from "@/components/common/footer/footer.js";
import Breadcrumb from "../../components/common/bread-crumb/bread-crumb";
import styled from "styled-components";
import Ftrswiper from "../../components/common/ftr-img-swiper";
import headerbackgroundimage from "../../../public/assets/images/Breadcrumb-Bg.png";
import BlogRightSection from "../../components/blog/right-section";
import { useRouter } from "next/router";
import SearchResult from "../../components/search";
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
    color: ;
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
export default function Search_result({title}) {
  const router = useRouter();
  const [data, setData] = useState();
  const { slug } = router.query;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Access searchResults from state passed by BlogLeftSection component
    const searchData = window.localStorage.getItem("v");
    setSearchResults(searchData || []);
  }, []);
  const [searchString, setSearchString] = useState();
  useEffect(() => {
// Get the search query from the router query object
    setSearchString(slug);
  }, []);

  return (
    <>
      {/* {data ? ( */}
      <>
        <Container>
          <section
            className="wrapper"
            style={{ backgroundImage: `url(${headerbackgroundimage.src})` }}
          >
            <>
              <Header />

              <Breadcrumb SearchProp={`Tag:${searchString}`} />
            </>
          </section>
        </Container>
        <SearchResult LocalProp={"Tag-Items"}/>
        <Footer></Footer>
      </>
      {/* ) : null} */}
    </>
  );
}
