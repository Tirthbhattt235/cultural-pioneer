import styled from "styled-components";
export const Mainsection =styled.section`
padding-left: 30px;
padding-right: 30px;
@media screen and (max-width: 1030px) {
  padding-left: 20px;
  padding-right: 20px;
}
`;
const Section = styled.section`
.black-bg{
  background-color: black;
    opacity: 0.3;
}
  padding: 80px 100px 300px 100px;
  margin-top: 120px;
  position: relative;
  /* margin-left: 30px; */
  /* margin-right: 30px; */
  border-radius: 10px;
  background-color: transparent;
  background-image: linear-gradient(80deg, #ff5e62 0%, #fec983 100%);
  .left {
    width: 60%;
    padding-right: 150px;
    .line {
      svg {
        color: white;
      }
    }
  }
  .right {
    width: 40%;
  }
  .primary-btn {
    background-color: black;
    color: white;
    span {
      color: white;
    }
  }
  .primary-btn:hover {
    background-color: white;

    span,
    svg {
      color: black;
    }
  }
  .right {
    .br10 {
      border-radius: 10px !important;
    }
    .link-wrapper {
      width: 250px;
      position: absolute;
      top: 0px;
      right: 0px;
      display: flex;
      align-items: center;
      padding: clamp(1.25rem, 0.625rem + 0.7813vw, 1.5625rem);
      background: linear-gradient(
        270deg,
        var(--wdtPrimaryColor) 0%,
        var(--wdtTertiaryColor) 100%
      );
      border-radius: 0 10px 0 10px;
      .number {
        font-size: 25px;
        font-weight: 700;
      }
      .pg {
        font-size: 16px;
      }
    }
    
  }
  .icon-wrapper{
      position: absolute;
      bottom: -50px;
      left: -50px;
      animation: rotateAnimation 8s infinite linear;
    }
    @media screen and (max-width:1024px) {
      padding-left: 20px !important;
      padding-right: 20px !important;
      .icon-wrapper{
        left: 40%;
      }
    }
    @media screen and (max-width:479px) {
      .icon-wrapper{
        left: -40px;
        bottom: -30px;

        svg{
          height: 80px;
        }
      }
      
    }
  @keyframes rotateAnimation {
    from{
      transform: rotate(0deg);

    }
    to{
      transform: rotate(360deg);
    }
    
  }
  .me-15 {
    margin-right: 15px;
  }
  .details {
    .icons {
      height: 40px !important;
      width: 40px !important;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin: 7px;
    }
    a:hover {
      color: black !important;
    }
    svg {
      width: 20px !important;
    }
  }
  @media screen and (max-width: 1540px) {
    .left{
      padding-right: 50px;
    }
    padding: 50px 80px 200px 80px;
}
  @media screen and (max-width: 1280px) {
.left{
  width: 50%;
}
.right{
  width: 50%;
}
}
  @media screen and (max-width: 1030px) {
    display: flex;
      flex-direction: column-reverse !important;
      .left{
        width: 100%;
        margin-top:50px;
        padding-right: 0px;
        h2{
          font-size:45px ;
         
        }
      }
      .right{
        width: 100%;
      }
}
  @media screen and (max-width: 767px) {

    .left{

        h2{
          font-size:30px ;
         
        }
        .details{
          flex-direction: column !important;
          justify-content: center !important;
          align-items: start !important;
          row-gap: 20px;
        }
      }
      .right{
        img{
          object-fit: contain !important;
          width: 100%;
          height: auto !important;
        }
      }

}
  @media screen and (max-width: 500px) {
    .link-wrapper{
      display: none !important;
    }
    padding-left: 20px;
    padding-right: 20px;

}
  @media screen and (max-width: 1540px) {

}
`;
export const Subsection = styled.section`
.wrapper-container{
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding: 40px 40px 40px 40px;
  box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.1607843137254902);
  background-color: white;
  border-radius: 10px;
  /* margin-left: 30px;
  margin-right: 30px; */
}

 z-index: 10;
  border-radius: 10px !important;
 
  margin-top: -200px;
  background-color: transparent;
  z-index: 10;
  position: relative  ;
  margin-left: auto;
  width: 100%;
  margin-right: auto;
  @media screen and (max-width:1930px) {
  padding-left: 40px;
  padding-right: 40px;
}
  .left {
    width: 50%;
    h3 {
      font-size: 40px;
      font-weight: 500;
      max-width: 80%;
    }
    p {
      max-width: 80%;
    }
    .primary-btn {
      background-color: black;
      color: white;
    }
    .primary-btn:hover {
      background-image: linear-gradient(180deg, #ff5e62 0%, #fec983 100%);
    }
  }
  .right {
    width: 50%;
    gap: 20px;
    .card {
      img{
        border-radius: 5px;
      }
      padding: 20px;
      border: none;
      width: 50%;
      background-image: linear-gradient(180deg, #ff5e62 0%, #fec983 100%);
      h3 {
        font-size: 26px;
        font-weight: 700;
      }
      p {
      }
      .primary-btn {
        background-color: black !important;
        padding: 9px 21px;
        span,
        svg {
          color: white;
        }
      }
      .primary-btn:hover {
        background-color: #ff5e62 !important;
        span,
        svg {
          color: white;
          fill: black;
        }
      }
      .icon-wrapper{
        position: absolute;
    content: '';
    width: 90px;
    height: 90px;
    background: var(--wdtSecondaryColor);
    border-radius: 10px 0 10px 0;
    -webkit-border-radius: 10px 0 10px 0;
    right: -8px;
    bottom: -19px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
      color: white;
      width:60px; 
      height: 60px;
    }
      }
    }
  }
    @media screen and (max-width: 1540px) {
      margin-top: -100px;
    margin-bottom: 0px;
     padding-left:80px;
     padding-right:80px;
     .left{
      width: 100%;
     }
     .right{
      width: 100%;
      margin-top: 20px;
      
     }
  }
    @media screen and (max-width: 1250px) {
      

  }
    @media screen and (max-width: 1030px) {
      padding-left:30px;
     padding-right:30px;
      .left{
       display :flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       h3,p{
        max-width: 100%;
       }
       h3,p{
        text-align: center;
       }
      }
      .right{
        flex-direction: column !important;
        justify-content: center;
        align-items: center;
        padding-left: 100px;
        padding-right: 100px;
        .card{
          width:100%;
        }

      }
  }
    @media screen and (max-width: 767px) {
      padding-left:20px;
     padding-right:20px;
     .left{
      h3{
        font-size: 24px;
      }
      .details{
          flex-direction: column !important;
          justify-content: center !important;
          align-items: start !important;
          row-gap: 20px;
          div:nth-child(2){
            width: 100%;
            padding-left: 0px !important;
            display: flex;
            flex-direction: column !important;
            justify-content:center;
            align-items: center ;
            row-gap:20px;
          }
      }
     }
     .right{
      padding-left: 0px;
      padding-right:0px;
     }
  }
    @media screen and (max-width: 500px) {
      .wrapper-container{
        padding: 20px;
      }
      .primary-btn 
      {
        span{
          text-align: center;

        }
      }
      .img-wrapper{
        div{width:100% !important;
        
        display:flex;
      justify-content:center;
    align-items:center;}
      }
      .icon-bar{
        display: none !important;
      }
  }
    @media screen and (max-width: 500px) {
      .details{
        svg{
          margin-right: 0px;
        }
      }

  }
`;
export default Section;
