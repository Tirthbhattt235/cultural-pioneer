import styled from "styled-components";
const Section = styled.section`
@media screen and (max-width:1200px){
  padding: 20px !important;
}
  background-image: linear-gradient(270deg, #ff5e62 0%, #fec983 100%);
  .img-box-slider {
  }
  .swiper-pagination-bullet {
    margin-left: 5px !important;
    margin-right: 5px !important;
  }
  .swiper-pagination-bullet {
    opacity: 1;
    .dot {
      width: 10px !important;
      height: 10px !important;
      text-align: center !important;
      line-height: 20px !important;
      font-size: 12px !important;
      border-radius: 50%;
      opacity: 1 !important;
      background: black;
    }
  }
  .swiper-pagination-bullet:after {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    /* color: #000; */
    opacity: 1;
    background: black;
    /* display: block; */
    /* width; */
  }
  .swiper-pagination {
    position: static !important;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  @media screen and (max-width: 992px) {
    .swiper-pagination {
      position: static !important;
      display: flex;
      justify-content: center;
      margin-top: 35px;
    }
  }
  .swiper-pagination-bullet-active {
    .dot {
      background: #ff5e62;
    }
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none !important;
    margin-left: 5px !important;
    margin-right: 5px !important;
    border: #ff5e62 1px solid;
  }
  .swiper-pagination-bullet-active::after {
    height: 30px;
    width: 30px;
    position: absolute;
    border: #ff5e62 3px solid;
  }
  .swiper-pagination {
    display: flex;
    align-items: center;
  }
  a {
    top: 10%;
    right: 10%;
    /* margin-right: 30px; */
    margin-left: auto;
    height: fit-content;
    background: var(--wdtPrimaryColor);
    padding: 8px 12px;
    border-radius: var(--wdtRadius_2X);
    -webkit-border-radius: var(--wdtRadius_2X);
  }
  .link-wrapper {
    top: 20px !important;
    right: 20px !important;
  }
  .mb-15{
    margin-bottom: 15px;
  }
  .right-col{
    padding-left: 80px !important;
  }
  @media screen and (max-width:1200px) {
    .right-col{
    padding-left: 0px !important;
    padding-top: 20px !important;
  }
  }
  .anim-des::before{
    content: '';
    width: 300px;
    height: 300px;
    background: -webkit-linear-gradient(45deg, rgba(var(--wdtPrimaryColorRgb), 0.4) 25%, rgba(var(--wdtTertiaryColorRgb), 0.4));
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 50%;
    animation: bg-move linear 10s infinite;
    -webkit-animation: bg-move linear 10s infinite;
  }
  .p-10{
      padding: 10px !important;
  }
  @media screen and (max-width:992px) {
    .p-10{
      padding:  0 !important;
    }
  }
`;
export default Section;
