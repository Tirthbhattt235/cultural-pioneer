import React, { useEffect, useState } from "react";
import Header from "@/components/common/header/header.js";
import Footer from "@/components/common/footer/footer.js";
import Breadcrumb from "@/components/common/bread-crumb/bread-crumb";
import styled from "styled-components";
import headerbackgroundimage from "../../../public/assets/images/Breadcrumb-Bg.png";
import Ftrswiper from "@/components/common/ftr-img-swiper";
import Productlist from "@/components/shop/product-list";
import { debug } from "util";
import ProductGallary from "../../components/shop/product-details/product-gallary";
import ProductDetails from "../../components/shop/product-details/product-detail";
import ProductDescription from "../../components/shop/product-details/description";
import AdditonalInfo from "../../components/shop/product-details/additional-information";
import ProductReview from "../../components/shop/product-details/product-review-form";
import { useRouter } from "next/router";
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

  .wrapper {
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Productdetails = () => {
  const [ProductDetail, setProductDetails] = useState();
  const [maindata, setMainData] = useState();

  const router = useRouter();

  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product-list.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        const currentPageSlug = router.query.slug;

        // Find the blog with ma  tching slug
        const matchingBlog = data.product?.find(
          (product) => product.link === `/shop/${currentPageSlug}`
        );
        if (matchingBlog) {
          setMainData(matchingBlog);
          setProductDetails(matchingBlog.details);
          console.log("Matching Blog:", matchingBlog, currentPageSlug);
        } else {
          console.log(
            "No blog found with matching slug:",
            matchingBlog,
            currentPageSlug
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [router.query.slug]);

  return (
    <>
      {ProductDetail ? (
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
          {ProductDetail.productDetails ? (
            <ProductDetails
              details={ProductDetail.productDetails}
              maindata={maindata}
              gallary={ProductDetail.gallary}
            />
          ) : null}
          {ProductDetail.description ? (
            <ProductDescription
              description={ProductDetail.description}
              information={ProductDetail.information}
            />
          ) : null}
          {ProductDetail.feedbackform ? (
            <ProductReview feedback={ProductDetail.feedbackform} />
          ) : null}
          <Ftrswiper></Ftrswiper>
          <Footer></Footer>
        </>
      ) : null}
    </>
  );
};

export default Productdetails;
