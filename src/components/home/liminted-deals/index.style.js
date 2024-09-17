import styled from 'styled-components'

const Section = styled.section`
padding-left: 30px;
padding-right: 30px;
@media screen and (max-width:1024px){
      padding-left: 20px;
padding-right: 20px;
}
background-color: transparent;
    background-image: linear-gradient(45deg, #ff5e62 0%, #fec983 100%);

.time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
.text{
 text-transform: uppercase;
 text-align: center;
 width: 100%;
 font-weight: 700;
}

.time-element{
      width: 125px;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    font-size: 40px;
    font-weight: 600;
}

}
@media screen and (max-width:768px) {
      .time-element{
            height: 50px !important;
            width: 50px !important;
            font-size: 18px !important;
      }
      .time:not(:last-child)::after{
      position: absolute;
    content: ':';
    margin-left:85px  !important;
    font-size: 40px;
    line-height: 1;
    /* top: 40px; */
     margin-bottom: 30px;
}
}
.time{
      position: relative;
}
.time:not(:last-child)::after{
      position: absolute;
    content: ':';
    right: -35px;
    font-size: var(--wdtFontSize_H3);
    line-height: 1;
    top: 40px;
}.swiper-pagination-bullet {
    margin-left: 10px !important;
  margin-right: 10px !important;
}
.swiper-pagination-bullet {
    opacity: 1;
   .dot{
    width: 10px !important;
  height: 10px !important;
 
  text-align: center !important;
  line-height: 20px !important;
  font-size: 12px !important;
    border-radius: 50%;
  opacity: 1 !important;
  background: black     ;




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
    justify-content: flex-start;
    margin-top: 65px;
}
@media screen and (max-width:992px){
    .swiper-pagination {
    position: static !important;
    display: flex;
    justify-content: center;
    margin-top: 35px;
}
}
.swiper-pagination-bullet-active{
   .dot{
    background: white;
   }
   height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none !important;
    margin-left: 5px !important;
  margin-right: 5px !important;
   border: white 1px solid;
}
.swiper-pagination-bullet-active::after{
    height: 30px;
    width: 30px;
    position: absolute;
    border: #ff5e62 3px solid;
}
.swiper-pagination{
    display: flex;
    align-items: center;
    justify-content: center;
}

.product{
      border-radius: 10px;
      .img-box{
            border-radius: 10px;
      }
      .txt{
            a:hover{
                  color: white !important;
            }
            bottom: 20px;
            border-radius: 5px;
            /* margin-bottom: 40px; */
            width: calc(100% - 70px);
      left : 35px;
           padding:30px;
            background-color: transparent;
            background-image: linear-gradient(45deg, #ff5e62 0%, #fec983 100%);
            h5{
                  font-size: 26px;
            }
            h6{
                  font-size: 20px;
            }
            .icon{
                  display: flex;
                  
                  width: 50px;
                  height: 50px;
                  background-color: #ff5e62;
                  border-radius: 10px;
                  svg{
                        height: 35px;
                  width: 35px;
                  color: white;
                  }
                  sv::before{
                        
                  width: 65px;
                  color: white;
                  }
            }
           
      }
}
.swiper-slide{
      height: fit-content !important;
}
.header-text{
      padding-left: 20px;
      padding-right: 20px;
}
.mb-60{
      margin-bottom: 60px !important;

}
.time:not(:last-child){
      margin-right: 60px;

     
}
.mb-10{
      margin-bottom: 10px;
}
.product{
      padding-left: 15px;
      padding-right: 15px;
}
.left{
      width: 70%;
}
.right{
      width: 30%;
}
@media screen and (max-width: 770px) {
      .txt{
            padding: 20px !important;
      }
      .header-text{
      padding-left: 0px;
      padding-right: 0px;
}
}
@media screen and (max-width: 500px) {
      .left{
      width: 100%;
}
.right{
      width: 100%;
      margin-top: 15px;
      .icon{
            margin-right: 5px;
      }
}
}
.icon{
      transition: var(--wdtBaseTransition);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius:10px;
      svg{
      }
}
@media screen and (max-width:1450px){
      .icon:not(:last-child){
            margin-bottom: 10px;
      }
}
@media screen and (max-width:1024px){
      .icon:not(:last-child){
            margin-bottom: 0px;
      }
}
@media screen and (max-width:1010px){
      .icon:not(:last-child){
            margin-bottom: 10px;
      }
}
@media screen and (max-width:767px){
      .icon:not(:last-child){
            margin-bottom: 0px;
      }
      .time-element{
            height: 60px;
            width: 60px;
      }
      .time:not(:last-child){
      margin-right: 30px;

     
}.time:not(:last-child):after{
      right: -18px;
    top: 15px;
    font-size: var(--wdtFontSize_H5);
     
}
}
@media screen and (max-width:500px){
      .time-element{
            height: 40px;
            width: 40px;
      }
      .time:not(:last-child){
      margin-right: 20px;

     
}.time:not(:last-child):after{
      right: -13px;
    top: 10px;
     
}
}
.icon:hover{
      background-color: black;
      svg{
            color: white;
      }
}
.text{
      letter-spacing: 1.8px;
}
`;
export default Section;