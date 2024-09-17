import styled from "styled-components";
const Section = styled.section`
  padding-left:30px;
  padding-right:30px;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
  .header-text {
    max-width: 780px;
    width: 100%;
    @media screen and (max-width:   768px) {
      padding: 20px;

    }
    h2 {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      white-space: break-spaces;
      text-align: center;
      /* font-size: 50px; */
    }
    p {
      text-align: center;
    }
  }
  .three-steps {
    margin-left: 60px;
    margin-right: 60px;
    @media screen and (max-width: 1540px) {
      margin-left: 0px;
      margin-right: 00px;
    }
    @media screen and (max-width: 1280px) {
      margin-left: 0px;
      margin-right: 0px;
    }
    .img-box {
      height: fit-content;
      width: fit-content;
      overflow: hidden;
      border-radius: 20px;
      img {
        transform: scale(1.1);
        transition: 500ms ease-in;
      }
      img:hover {
        transform: scale(1);
      }
    }
    .step-number {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: white;
      font-size: 16px;
      margin-bottom: 30px;
      background: linear-gradient(180deg, #ff5e62 0%, #fec983 100%);
    }
    .step {
      position: relative;
      padding: 60px;
      .img-box {
        margin-bottom: 30px;
      }
    }
    @media screen and (max-width: 1280px) {
      .step {
        position: relative;
        padding: 20px;
      }
    }
    @media screen and (max-width: 1024px) {
      .step {
        position: relative;
        padding: 10px;
        padding-bottom: 20px;
      }
    }
    .step:not(:last-child)::after {
      position: absolute;
      content: "";
      height: 1px;
      width: 120px;
      background: rgba(var(--wdtBorderColorRgb), 0.5);
      right: -60px;
      /* bottom: 20px; */
      top: 61%;
    }
    @media screen and (max-width: 1280px) {
      .step:not(:last-child)::after {
        top: 57%;
      }
    }
    @media screen and (max-width: 1024px) {
      .step:not(:last-child)::after {
        top: 57%;
      }
    @media screen and (max-width: 1000px) {
      .step:not(:last-child)::after {
       display: none;
      }
    }}
  }
  .step-info {
    p {
      width: 100%;
      max-width: 250px;
    }
    a {
      color: rgb(32, 32, 32);
    }
  }
  .primary-btn {
    font-size: 18px;
  }
  @media screen and (max-width: 790px) {
    .header-text {
      width: 100% !important;
    }
  }
`;
export default Section;
