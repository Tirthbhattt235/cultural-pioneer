import styled from "styled-components";
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 30px;
  .banner-img{
      overflow: hidden;
            border-radius: 15px;
      }
  img {
    transition: all 0.3s linear 0s;
  }
  .swiper-slide {
    cursor: pointer;
    border-radius: 15px;
    transition: all 0.3s linear 0s;
    padding-right: 10px;

    .img-container {
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid transparent;
      transition: all 0.3s linear 0s;
    }
  }
  .swiper-wrapper {
  }
  .img-container.active {
    transition: all 0.3s linear 0s;

    border: 1px solid #ff5e62;
  }
  img {
    transition: all 0.3s linear 0s;
  }
  .swiper-slide-active {
    .img-container {
      border: #ff5e62 1px solid;
    }
  }
  .border-trans {
    border: 1px solid transparent !important;
  }
`;
export default Section;
