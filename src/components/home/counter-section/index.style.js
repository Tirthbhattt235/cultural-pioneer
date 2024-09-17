import styled from "styled-components";
const Section = styled.section`
.main{
      padding-left: 30px;
padding-right: 30px;
}
  @media screen and (max-width: 1220px) {
    .pt-150 {
      padding-top: 70px !important;
    }
    .mt-150 {
      margin-top: 70px !important;
    }
  }
  @media screen and (max-width: 768px) {
    .pt-150 {
      padding-top: 50px !important;
    }
    .mt-150 {
      margin-top: 50px !important;
    }
  }
  @media screen and (max-width: 768px) {
    .mb-100 {
      margin-bottom: 50px !important;
    }
  }
  .mb-50{
      margin-bottom: 50px;
  }
  .play-btn {
    height: 120px;
    width: 120px;
    @media screen and (max-width: 700px) {
      margin-top: 50px;
      margin-bottom: 50px;
     margin-left: 20px;
  }
    content: "";
    /* position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0; */
    box-shadow: 0 0 rgb(255, 0, 10, 0.3), 0 0 0 10px rgb(255, 0, 10, 0.3),
      0 0 0 20px rgb(255, 0, 10, 0.3);
    background-color: #ff5e62;
    border-radius: 50%;
    z-index: -1;
    -webkit-transition: #ff5e62;
    transition: #ff5e62;
    -webkit-animation: vid-icon-wave 1s linear infinite;
    animation: vid-icon-wave 1s linear infinite;
  }
  @keyframes vid-icon-wave {
    to {
      box-shadow: 0 0 0 10px rgb(255, 0, 10, 0.3),
        0 0 0 20px rgb(255, 0, 10, 0.3);
    }
  }

  .counter {
    .ctr-item {
      width: 20%;
      position: relative;

      height: 110px !important;
      padding: 10px;
      @media screen and (max-width:1280px) {
      width: 33%;
            
      
      }
      @media screen and (max-width:1024px) {
      width: 50%;
            
      
      }
      @media screen and (max-width:767px) {
      width: 100%;
            
      
      }
      .ctr-num {
        color: white;
        font-size: 60px;
      }
      .ctr-title {
        color: white;
        font-size: 12px;
      }
      .ctr-num {
        font-weight: 700;
      }
    }

    .ctr-item:not(:last-child):after {
      content: '';
    position: absolute;
    width: 1px;
    height: 70%;
    background: rgba(var(--wdtAccentTxtColorRgb), 0.3);
    right: 10%;
    top: 50%;
    transform: translateY(-50%);

    }
  }
  @media screen and (max-width: 1280px) {
    .ctr-item:not(:last-child):after {
      content: none !important;
      position: absolute;
      width: 1px;
      height: 70%;
      background: white;
      right: 0%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .move-image-anim {
    z-index: -1;
  }
  .header-section {
    width: 100% !important;
  }

`;
export default Section;
