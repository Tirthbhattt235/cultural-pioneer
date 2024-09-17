import styled from "styled-components";
const Section = styled.section`
.mini-cart{
  a{
      color: black ;
      padding-right: 20px;
      word-break: break-all;
}
a:not(.primary-btn):hover{
      color: rgb(255, 94, 98) ;
    
}
  z-index: 1000 !important;
position: absolute;
border-radius: 10px;
background-color: aliceblue;top:50px;
padding: 20px;
background-color: var(--wdtBodyBGColor);
    border: 0px solid var(--wdtBorderColor);
    color: var(--wdtBodyTxtColor);
    float: left;
    min-width: 270px;
    padding: 20px;
    position: absolute;
    right: -15px;
    text-align: initial;
    box-shadow: 0 -1px 8px 3px rgba(var(--wdtHeadAltColorRgb), 0.08);
}
  display: flex;
  a {
    text-decoration: none;
  }
  a:hover {
    color: #ff5e62 !important;
  }
  .menu-overlay {
    background-color: rgba(var(--wdtHeadAltColorRgb), 0.5);
    opacity: 1;
    width: max-content;
    height: max-content;
    z-index: 99;
  }
`;
export const Ramboline = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 10px !important;
  width: 100%;
  .element1 {
    width: 24%;
    background-color: #b15533;
  }
  .element2 {
    width: 13%;
    background-color: #006341;
  }
  .element3 {
    width: 13%;
    background-color: #3eb1c8;
  }
  .element4 {
    width: 13%;
    background-color: #d592aa;
  }
  .element5 {
    width: 13%;
    background-color: #eca154;
  } 
  .element6 {
    width: 24%;
    background-color: #99d6ea;
  }
`;
export const MiddleLine = styled.div`
  padding: 10px 0px;
  height: 48px;
  height: auto;
  background-color: black;
  .tel {
    display: flex;
    /* justify-content: center;
   */
    align-items: center;
    content: "/f109";
  }
  .line-1 {
    a {
      padding-right: 12px;
    }
    a:not(:last-child):after {
      content: "|";
      padding-left: 12px;
    }
  }
  a,
  p {
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    line-height: 28px;
    /* padding-left: 25px;  */
    color: white;
  }
  @media screen and (max-width: 500px) {
    a {
      padding-left: 0px;
    }
  }
  p {
    margin: 0%;
  }

  a:hover {
    color: #ff5e62;
  }
  .noneafter::before {
    content: "" !important;
  }
  .line-2 {
    .number {
      .icon {
        height: 10px !important;
        width: 16px !important;
      }
    }
  }
  .line-3 {
    a:not(:last-child) {
      padding-right: 20px;
    }
    .icon {
      width: 20px;
      padding-right: 10px;
    }
    a:not(:last-child) {
      padding-right: 12px;
    }
    a:not(:last-child):after {
      content: "|";
      padding-left: 12px;
    }
  }
`;
export const MainLine = styled.div`
  /* Your existing CSS styles for the hamburger icon */
.logo{
  max-width: 212px;
  min-width: 212px;
}
  .menu-icon {
    cursor: pointer;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    width: 20px;
    /* margin: 20px; */
  }
a:hover{
  svg{
    color: #ff5e62 !important;
  }
}

  @media screen and (max-width: 1400px) {
    .menu-icon {
      display: flex !important;
    }
    .line-2 {
      display: none !important;
    }
    .search-container{
      display: none !important;
    }
    .res-icon {
      display: flex !important;
    }
  }
  @media screen and (max-width: 1530px) {
    .header-last{
   justify-content: space-between !important;
}
  }

  .bar {
    width: 20px;
    height: 2px;
    background-color: #333;
    transition: 0.3s;
  }

  .menu-open .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .menu-open .bar:nth-child(2) {
    opacity: 0;
  }

  .menu-open .bar:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
  .close-button {
    cursor: pointer;
    /* background-color: #333; */
    color: black;
    /* padding: 10px; */
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  .close-button span {
    font-size: 45px;
    line-height: 1;
  }



  height: 84px;
  @media screen and (max-width: 1200px) {
    .simple-submenu {
      position: static !important;
    }
    .struct-submenu {
      position: static !important;
    }
    .line-2 {
      background: white !important;
    }
    /* background: white !important; */
  }
  .line-2 {
    li {
      margin-bottom: 0% !important;
      a {
        font-weight: 600;
    letter-spacing: 1.28px;

      }
    }
  }
  .searchform {
    position: relative;
    display: flex;
    align-items: center;
    .text_input {
      width: 250px;
      height: 40px;
      background: #f5f5f6;
      padding: 0;
      padding-left: 20px;
      padding-right: 60px;
      margin: 0;
      border: 1px solid #f5f5f6;
      border-radius: 10px;
    }
    .text_input:focus {
      outline: none;
      border: 1px solid rgb(255, 94, 98);
    }
    i {
      color: rgb(255, 94, 98);
    }
    .search {
      height: fit-content;
      margin-top: auto;
      margin-bottom: auto;
      position: absolute;
      bottom: 0;
      right: 10px;
      top: 0;
      text-align: center;
      border: none;
      background: transparent;
    }
  }
  /* @media screen and (max-width: 1300px) {
    .search-container {
      display: none !important;
    }
  } */
  .line-2 {
    @media screen and (max-width: 1200px) {
      button {
        margin: 0 !important;
      }
      z-index: 100;
    }

    a,
    img {
      text-transform: uppercase;
      /* padding: 0px 20px; */
      margin: auto;
      color: black;
      font-weight: 500;
      height: 100%;
      display: flex;
      align-items: center;
      /* background-color: transparent !important; */
      border: none;
    }
        a{
      padding: 0px 20px;

    }
    buttton:hover {
      color: #ff5e62;
    }
    ul {
      display: flex;
      justify-content: center;
    }
    li {
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;
      /* position: relative; */
      flex-direction: column;
    }
    a:hover {
    }
    .simple-submenu {
      box-shadow: 0 0 5px 3px rgba(var(--wdtHeadAltColorRgb),0.10);
      border-radius: 10px;
      padding: 10px 0px;
      /* pointer-events: none; */
      position: absolute;
      left: 0;
      top: 100%;
      text-align: left;
      background-color: white;

      /* opacity: 0; */
      width: 235px;

      /* display: none; */
      a {
        padding: 7px 20px;
        text-align: left;
        width: 100%;
        text-align: start;
        font-size: 14px;
      }
      a:hover {
        color: #ff5e62 !important;
      }
    }
    @media screen and (max-width: 1200px) {
      .simple-submenu {
        left: auto;
        top: 100%;
        transform: translate(30%);
      }
      .struct-submenu {
        transform: none !important;
      }
    }
    .struct-submenu {
      /* width: 95vw; */
      background-color: white;
      max-width: 1599px;
      width: 95vw;
      left: 50%;
      transform: translateX(-50%); /* centered first regardless of width*/

      /* display: flex; */
      /* flex-direction: column; */
      justify-content: center;
      /* left: auto; */
      position: absolute;
      top: 100%;
      padding: 10px;
      border-radius: 10px;
      /* width:100vw;

           left:auto; */
      z-index: 100;
      box-shadow: 0 0 5px 3px rgba(var(--wdtHeadAltColorRgb),0.10);
      .servicewrapper {
        .serviceitem {

          position: relative;
          /* margin-right: 30px; */
          border-radius: 10px;
          img {
            position: relative;
            border-radius: 10px;
            background-color: rgba(var(--wdtHeadAltColorRgb), 0.5);
          }

          .link-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            a {
              position: absolute;
              height: fit-content;
              top: 70%;
              padding: 12px 24px;
              margin-left: auto;
              margin-right: auto;
              background-color: #ff5e62;
              color: white;
              font-size: 14px;
              /* justify-content: center; */
            }
            a:hover {
              background-color: black;
              color: white !important;
            }
          }
        }
        padding-left: 30px;
        top: 100%;
        /* width:100vw;    */
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .service2wrapper {
        .serviceitem {
          position: relative;
          /* margin-right: 30px; */
          border-radius: 10px;
          img {
            position: relative !important;
            border-radius: 10px;
            min-height: 200px;
          }
          .textwrapper {
            padding: 0px 40px;
            width: 60%;
            position: absolute;
            top: 10%;
            h4 {
              color: white;
              line-height: 1.2;
              font-size: 30px;
              font-weight: 500;
              margin-bottom: 20px;
            }
            span {
              color: white;
              text-transform: uppercase;

              font-size: 18px;
              font-weight: 400;
            }
          }
          @media screen and (max-width: 767px) {
            .textwrapper {
              width: 100%;
              padding: 0px 20px;
            }
            h4 {
              font-size: 20px;
            }
          }
          .link-wrapper {
            width: 100%;
            display: flex;
            justify-content: start;
            margin-top: 10px;
            a {
              position: absolute;
              height: fit-content;

              padding: 0.8em 1.75em;
              margin-left: auto;
              margin-right: auto;
              background-color: #ff5e62;
              color: white;
              font-size: 14px;
              /* justify-content: center; */
            }
            a:hover {
              background-color: black;
              color: white !important;
            }
          }
        }
      }
      /* .has-submenu:hover +  .simple-submenu{

           display:block;
      }  */
    }
  }
  .line-3 {
    a {
      text-transform: uppercase;
      padding: 0px 20px;
      margin: auto;
      color: black;
      font-weight: 500;
    }
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: black;
      a {
        color: white;
      }
    }
    li:not(:last-child) {
      margin-right: 20px;
    }
    li:hover {
      /* background-color: white; */
      color: #f5f5f6;
    }
  }
  @media screen and (max-width: 1200px) {
    .div-container:nth-child(1) {
    }
    .div-container:nth-child(2) {
      order: 3;
    }
    .div-container:nth-child(3) {
      order: 2;
    }
  }
`;

export default Section;
