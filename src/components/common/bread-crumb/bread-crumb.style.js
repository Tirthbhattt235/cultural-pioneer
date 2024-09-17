import styled from "styled-components";

const Section = styled.section`
  padding: 90px 0px;
  h1 {
    text-transform: capitalize;
    margin-bottom: 5px;
  }
  a {
    cursor: pointer;
  }
  span {
    text-transform: capitalize;
  }
  span:not(.current) {
    display: inline-block;
    margin: 0px 12px;
    padding: 0;
  }
  span:not(.current):before {
    content: "";
    background-color: var(--wdtAccentTxtColor);
    display: inline-block;
    height: 14px;
    opacity: 1;
    position: relative;
    top: -1px;
    vertical-align: middle;
    width: 1px;
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
  }
  .current {
    /* color: rgb(255, 94, 98); */
  }
  .wrapper::after {
  }
  .img-wrapper {
    position: absolute;
    content: "";
    width: 1380px;
    height: 400px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    right: 0px;
    bottom: -80px;
    z-index: 0;
  }
  @media screen and (max-width: 1700px) {
    .wrapper {
      padding: 0px 30px;
    }
  }

  @media screen and (max-width: 1540px) {
    .img-wrapper {
      width: 1000px;
      bottom: -110px;
    }
  }
  @media screen and (max-width: 1280px) {
    padding: 40px 0px;
    .img-wrapper {
      width: 800px;
      bottom: -120px;
    }
  }
  @media screen and (max-width: 1024px) {
    .wrapper {
      padding: 0px 20px;
    }
    .img-wrapper {
      width: 600px;
      bottom: -140px;
    }
  }
  @media screen and (max-width: 770px) {
      .img-wrapper {
            display: none;
    }
    h1 {
      text-align:center;
      font-size: 40px  !important;
    }
    .bread-crumb{
      display:flex;
      justify-content: center;

}
  }
`;
export default Section;
