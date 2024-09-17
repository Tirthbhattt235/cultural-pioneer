import styled from 'styled-components'

const Section = styled.section`
.header-text{
  margin-bottom:50px;
}
.blogs{
      .blog{
        
            .date{
                  i{
                        height: 20px;
                        width: 20px;
                  }
            }
            .img-box{
                  border-radius: 10px;
                  img{height:300px !important}
            }
      }
}
.swiper-pagination-bullet {
    margin-left: 5px !important;
  margin-right: 5px !important;
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
    margin-top: 35px;
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
    background: #ff5e62;
   }
   height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none !important;
    margin-left: 5px !important;
  margin-right: 5px !important;
   border: #ff5e62 1px solid;
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
    margin-top: 75px;
}
.date{
margin-top: 30px;
margin-bottom:20px ;
}
.title{
margin-bottom: 30px;
}
.text{
  padding-left: 30px;
}
`;
export default Section;