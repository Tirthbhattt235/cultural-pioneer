import styled from "styled-components";
const Section =styled.section`

.background{
      background-color: transparent;
    background-image: linear-gradient(90deg, #FF5E62 0%, #FEC983 100%);
    opacity: 0.7;
    z-index: -1;
}
    
    
    position: relative;
    .div-wrapper{
      z-index: 1;
      padding-left: 30px;
      padding-right: 30px;
      .left{
            width:50%;
            z-index:1;
            opacity: 1;
            padding-top: 30px;
            padding-right: 60px;
            h3{
                  max-width: 700px;
            }
      }
      .right{

            width: 50%;
            z-index:1;
            .award{
                 
                  margin-left: -10px;
                  margin-right: -10px;
                  width: calc(100%+20px);
                  div:nth-child(1){
            width: 10%;
            padding:10px;
            padding-top: 30px;

           }
           div:nth-child(2){
            padding:10px;
            width: 45%;
           }
           div:nth-child(3){
            padding:10px;
            padding-top: 30px;

            width: 45%;
           }
           .index{
            
            h3{   
                  width:50px;
                  color: white;
                  display: flex;
                  justify-content: center;
                  background-color: #FF5E62;
            padding:15px;
            }
           
            
           }
           h5{
                  font-size:26px;
            }
            }.award:not(:last-child){
                  border-bottom: 0px black solid;
                  border-width: 1px;
                 }
          

      }
    }
      
    @media screen and (max-width: 1540px) {
      .div-wrapper{
            .left{
                  padding-top: 0px;
            padding-right: 0px;
      }
      .right{
            padding-left: 40px;
      }
      }
     
    }
    @media screen and (max-width: 1280px) {
      .pt-150{
            padding-top: 70px !important;

      }
      .pb-150{
            padding-bottom: 70px !important;

      }
    }
    @media screen and (max-width: 767px) {
      .div-wrapper{
            .left{
                  h3{font-size:30px;}
            }
      }
    }
    @media screen and (max-width: 1024px) {
      .div-wrapper{
            padding-left: 20px;
            padding-right: 20px;
            .left{
            width: 100%;
          
      }
      .right{
            width: 100%;
            padding-top: 40px;
            padding-left: 0px;
          
      }
      }
     
    }
    @media screen and (max-width: 770px) {
      .div-wrapper{
            .right{
            .award{
                  div:nth-child(1){
                        width: 100%;
                  }
                  div:nth-child(2){
                        width: 100%;
                        .img{
                              justify-content: start;
                        }
                  }
                  div:nth-child(3){
                        width: 100%;
                  }
            }
      }
      .left{
            p{
                  margin-top:15px;
            }
      }
      }
     
    }
    .primary-btn{
      /* a{ */
            padding: 18px 40px;
      /* } */
      .icon{
            display:flex;
            align-items: center;
}
    }
`;
 export default Section;