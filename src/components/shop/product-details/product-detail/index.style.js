import styled from "styled-components";
const Section = styled.section`
  display: flex; 
  flex-direction: row;
  flex-wrap: wrap;
  svg {
    width: 20px;
  }
  .left {
    width: 50%;
  }
  .right {
      padding: 1px;
      height: fit-content;
    .line {
      margin: 10px 0px;
      border-top: 1px solid gray;
    }
    width: 50%;
    display: flex;

    flex-direction: column;
    padding-left: 100px;
    h2 {
      font-size: 32px;
      margin-bottom: 15px;
    }
    .material{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 480px;
      a{
            cursor: pointer;
      }
      .left-div{
            width: 202px;
            margin-right: 100px;
            position: relative;
            .category a{
              span{
                position: absolute;
                box-shadow: 0 0 5px 1px rgba(0,0,0,.3);
                bottom: calc(100% + 10px);
              }
              
                line-height: 35px ;
              
            }
            .category a:hover{
              position: relative;
              span{
                opacity: 1;
                transition: 0.5s cubic-bezier(.68,-0.55,.27,1.55);
                transform: translateY(10px);
                position: absolute;
                padding-left: 15px;
                padding-right: 15px;
                background: linear-gradient(80deg, var(--wdtPrimaryColor) 0%, var(--wdtTertiaryColor) 100%);
                
                border-radius: 3px;
                font-size: 14px;
                color: white;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items:center ;
                margin-top: 0px;
              }

            }
            /* .category a::after{
              border-top-color: var(--wdtPrimaryColor);
    transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
    transition: 0.5s cubic-bezier(.68,-0.55,.27,1.55);
    -webkit-transition: 0.5s cubic-bezier(.68,-0.55,.27,1.55);
    border-top-color: transparent;
    border: 5px solid transparent;
    border-top-color: var(--wvs-tooltip-background-color, #333);
    bottom: auto;
    content: " ";
    font-size: 0;
    line-height: 0;
    top: 10px;
    width: 0;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition: opacity .5s ease-in-out;
    -o-transition: opacity .5s ease-in-out;
    transition: opacity .5s ease-in-out;
    visibility: hidden;
    z-index: 999;
} */
            }

            .link-wrapper{
              span{
                opacity: 0;
               
                /* margin-top: -10px; */
                /* transition: all 0.3s linear 0s; */

              }
            }
      }
      .right-div{
    width: 50;
    display: flex;
        flex-direction: column;
        .dots{
          display: flex;
        flex-direction: row;
        .dot{
          span{
           
                position: absolute;
                box-shadow: 0 0 5px 1px rgba(0,0,0,.3);
                bottom: calc(100% + 20px);
                opacity: 0;
              
          }

        }
        .dot:hover{
          position: relative;
              span{
                transition: 0.5s cubic-bezier(.68,-0.55,.27,1.55);

                opacity: 1;
                transition: 0.5s cubic-bezier(.68,-0.55,.27,1.55);
                transform: translateY(10px);
                position: absolute;
                padding-left: 15px;
                padding-right: 15px;
                background: linear-gradient(80deg, var(--wdtPrimaryColor) 0%, var(--wdtTertiaryColor) 100%);
                
                border-radius: 3px;
                font-size: 14px;
                color: white;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items:center ;
                margin-top: 0px;
              
          
              }}
        }
    .dot{
      height: 25px;
      width: 25px;
      border-radius: 50%;
      margin-top: 5px;
      margin-right: 15px;
      margin-bottom: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg{
        margin-right: 0px;
      }
    }
    .black{
      background-color: #000000;
    }
 .redish{
  background-color: #dd3333;
 }
    .green{
      background-color: #81d742;
    }
    .greenish{
      background-color: #81d742;

    }
    .grayish{
      background-color: #000000;

    }
    .red{
      background-color: #dd3333;
    }
      }
      .cart{
            width: 100%;
            .price{
              font-size: 26px;
              margin: 10px 0px;
              transition: all 0.3s linear 0s;

            }
            .stock{
              margin-top: 20px;
              padding: 5px 10px;
              width: fit-content;
              border: 1px solid rgba(0,0,0,0.15);
              font-size: 15px;
            }
            .adder{
              margin-top: 25px;
              margin-right: 25px;
              margin-bottom: 15px;
              input ,h4{
                width: 45px;
                height: 50px;
                background-color: transparent;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid rgba(0,0,0,0.15);
                margin-bottom: 0px;
                font-size: 16px;
                line-height: 24px;
              }
            }
            .primary-btn{
              margin-top: 25px;
              margin-bottom: 15px;
              
            }
      }
    }
  
  .swiper-wrapper {
  }
  /* .star::before{
      content: "\e021\e021\e021\e021";
} */
  .star {
    left: 0;

    height: 100%;
    position: absolute;
    width: 85%;
  }
  a:active{
    color: red;
  }
  .spacer{
    height:calc(1px / 10) !important;
    width: 100%;
  }
  .selected{
    color: #ff5e62;
    font-size: 16px;
  }
  @media screen and (max-width:1030px) {
    .left{
      width: 100%;
    }
    .right{
      width: 100%;
      position: static !important;
      padding-left: 0px;
      padding-right: 0px !important;
    }
    .swiper-slide{
      width: 25% !important;
      img{
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    img{
        width: 100%;
        height: auto;}
  }
  @media screen and (max-width:500px) {
    .material{
      row-gap: 20px;
      .carting{
        flex-direction: column !important;
      }
    }
    .left-div{
      width: 100% !important;
      margin-right: 0 !important;

    }
    .buy-btns{
      flex-direction: column !important;
      margin-top: 0% !important;
      margin-bottom: 0% !important;
    }
    .primary-btn{
      margin-top: 10px !important;
      margin-bottom: 10px !important;
    }
  }
  .close{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center ;
    z-index: 5;
    opacity: 1 !important;
    svg{color:#ff5e62;
    width:16px;
  height:16px}
  }

`;
export default Section;
