import styled from "styled-components";
const Section = styled.section`
display: flex;
column-gap: 30px;
padding-top: 130px;
flex-direction: row;
flex-wrap: wrap;
row-gap: 30px;
.left{
      border-radius: 20px;
      background-color: rgba(244,244,244,255);
      display: flex;
      flex-direction: column;
      width: calc(50% - 15px);
      padding: 60px;
      .services{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            li{
                        line-height:29px;
                        margin-top: 5px;
                        padding-bottom: 5px;
                        list-style-type: none;
                  .icon{
                              margin-right: 9px;
                  }
                  }
            .left-container{
width: 50%;
            }
            .right-container{

width: 50%;
            }
      }
}
.right{
      border-radius: 20px;
      background-color: rgba(244,244,244,255);
      display: flex;
      flex-direction: column;
      padding: 60px;
      width: calc(50% - 15px);
      padding-right: 45px;
      .swiper{
      width: calc(100% );

      }
      .swiper-slide{
            overflow: hidden;
            padding-right: 20px;
            display: flex;
      }
      .img-wrapper{
            border-radius: 20px;
            width: fit-content;
            overflow: hidden;
      }
}

@media (max-width: 1280px){
      padding-top: 70px;
      .left,.right{
            padding: 30px;
      }
}
@media screen and (max-width:1025px) {
      .left,.right{
            width: 100%;
            background: transparent;
            background: rgba(113,113,113, 0.08);
    backdrop-filter: blur(20px);

      }
      .left{
            .wrapper{
                  max-width: 710px ;
                  margin-left: auto;
                  margin-right: auto;
                  width: 100%;

            }
      }
      .right{
            .wrapper{
                  max-width: 710px ;
                  margin-left: auto;
                  margin-right: auto;
                  width: 100%;
            }
            .img-wrapper{
                  width: 100% !important;
            }
      }
      
}
@media screen and (max-width:768px) {
      padding-top: 50px;
      .left{      
            .left-container ,.right-container{
                  width: 100% !important;
            }
      }
      .swiper-slide{
            padding-right: 0px !important;
      }
      .fs-30{
            font-size: 30px !important;
      }
}
`;
export default Section; 
