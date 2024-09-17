import styled from "styled-components";
const Section = styled.section`
  padding: 50px 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .header-text {
    max-width: 75%;
    h2 {
      margin-bottom: 70px;
    }
  }
  .tags {
    ul {
      height: 74px !important;
      padding: 5px;
      background-color: #f4f4f4;
      display: flex;
      align-items: center;
      width: fit-content !important;
      border-radius: calc(var(--wdtRadius_3X) - 3px);

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        a {
          padding: 20px 35px;
          transition: all 0.3s linear 0s;
          border-radius: calc(var(--wdtRadius_3X) - 3px);
          line-height: 20px;
          letter-spacing: normal;
          cursor: pointer;
          color: black;
        }
      }
      li a.active {
        transition: all 0.3s linear 0s;
        background: linear-gradient(
          270deg,
          var(--wdtPrimaryColor) 0%,
          var(--wdtTertiaryColor) 100%
        );
        color: var(--wdtAccentTxtColor);
        color: white;
      }
    }
  }
  .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding-top: 116px;
    padding-left: 22px;
    padding-right: 22px;

    .left {
      width: 48.577%;;
      padding-right: 70px;
      svg {
        color: #ff5e62;
        margin-right: 20px;
        margin-top: 12px;
      }
      ul li .main-point {
        line-height: 30px;
      }
      li {
        margin-top: 30px;
      }
      .sub-point {
        line-height: 27px;
      }
      svg {
        color: #ff5e62;
        fill: #ff5e62;
      }
      .details{
       svg{
        margin-right: 7px;
       }
          li{
            line-height: 24px;
          padding-right:30px ;
            
            margin-top: 25px;
            align-items: center;
            .pl-5{
              padding-left: 5px;
            }
           
          }
          svg{
            margin-top: 0px;
          }
        
      }
    }
    .right {
      width:      51.423%;;
      .left-img-container{
        padding-right: 10px;
      gap: 20px;
      }

    }
      .right-img-container{
        padding-left: 10px;
      gap: 20px;

      }
    }
    .line {
      width: 95%;
      border-top: 0px solid #0000006e;
      border-width: 1px;
      color: #0000006e;
      border-style: solid;
      margin-top: 40px;
    }
  
  @media screen and (max-width: 1540px) {
    padding: 0 30px;
    .left{
      padding-right: 40px;
    }
  }
  @media screen and (max-width: 1240px) {
    .content{
      display: flex ;
      justify-content: center;
      flex-direction: column;
      flex-flow: column-reverse;
      .left{
        width: 100%;
         display: flex ;
      justify-content: center;
      flex-direction:column;
      margin-top: 60px;
     padding-right: 0px;
     .line{
      width: 100%;
     }
      }
      .right{
        width: 100%;
          display: flex ;
      justify-content: center;
       .left-img-container
      {
        width: 50%;
      }
      .right-img-container
      {
        width: 50%;
      } 
      }
    }
  }
  @media screen and (max-width: 1030px) {
    .img-box{
      img{
        scale: 1 !important;
      }
      img:hover{
        scale: 1 !important;
      }
    }
    .left-img-container
      {
        width: 100% !important;
        padding-right: 0px !important;
      }
      .right-img-container
      {
        padding-left: 0px !important;

        margin-top: 20px;
        width: 100% !important;
      } 
    padding: 0 20px;
  }
  @media screen and (max-width: 770px) {
   .tags ul{
    flex-direction: column !important;
    height: 100% !important;
    li{
      width: 100%;
    }
   } 
    .header-text{
       max-width: 100% !important;
       h2{
        margin-bottom: 30px !important;
       }
    }
    .left-img-container
      {
        width: 100% !important;
        padding-right: 0px !important;
      }
      .right-img-container
      {
        padding-left: 0px !important;

        margin-top: 20px;
        width: 100% !important;
      } 
      .content{
        padding:0px ;
        padding-top: 40px;
      }
      .details{
        flex-direction: column !important;
      }
      .left svg{
    width: 40px;margin-right:8px;
    }
  }
`;
export default Section;
