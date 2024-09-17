import styled from 'styled-components'
const Section = styled.section`
    /* background-image: url(https://wdtprintme.wpengine.com/wp-content/uploads/2023/09/Home-3-Slider-1-dot-img.png); */
    background-position: top left;
    background-repeat: no-repeat;

      .HeroSection{
            background-position: top left;
    background-repeat: no-repeat;

   margin-top: -200px;
   /* height: 1500px; */
      }
      span{
  line-height: 28px;
  margin-top: 1rem;
 }
 li{

 }
      .HeroSection:after{
            /* height: 70vh;     */
            position: absolute;
    content: '';
    width: 60%;
    height: 150%;
    right: 0;
    top: 0;
    z-index: -1;
    background-color: #f2c8cf;
    animation: slider-blog 20s ease-in-out infinite both alternate;
    -webkit-animation: slider-blog 20s ease-in-out infinite both alternate;
      }
      @keyframes slider-blog{
    0% {
        border-radius: 26% 0% 0% 39% / 54% 0% 0% 46%;
    }
    10% {
        border-radius: 74% 0% 0% 53% / 68% 0% 0% 32%;
    }
    20% {
        border-radius: 48% 0% 0% 70% / 27% 0% 0% 73%;
    }
    30% {
        border-radius: 73% 0% 0% 43% / 28% 0% 0% 72%;
    }
    40% {
        border-radius: 63% 0% 0% 44% / 25% 0% 0% 75%;
    }
    50% {
        border-radius: 39% 0% 0% 30% / 61% 0% 0% 39%;
    }
    60% {
        border-radius: 27% 0% 0% 71% / 73% 0% 0% 27%;
    }
    70% {
        border-radius: 39% 0% 0% 35% / 74% 0% 0% 26%;
    }
    80% {
        border-radius: 55% 0% 0% 63% / 38% 0% 0% 62%;
    }
    90% {
        border-radius: 25% 0% 0% 30% / 39% 0% 0% 61%;
    }
    100% {
        border-radius: 66% 0% 0% 67% / 65% 0% 0% 35%;
    }
}

@-webkit-keyframes slider-blog{
    0% {
        border-radius: 26% 0% 0% 39% / 54% 0% 0% 46%;
    }
    10% {
        border-radius: 74% 0% 0% 53% / 68% 0% 0% 32%;
    }
    20% {
        border-radius: 48% 0% 0% 70% / 27% 0% 0% 73%;
    }
    30% {
        border-radius: 73% 0% 0% 43% / 28% 0% 0% 72%;
    }
    40% {
        border-radius: 63% 0% 0% 44% / 25% 0% 0% 75%;
    }
    50% {
        border-radius: 39% 0% 0% 30% / 61% 0% 0% 39%;
    }
    60% {
        border-radius: 27% 0% 0% 71% / 73% 0% 0% 27%;
    }
    70% {
        border-radius: 39% 0% 0% 35% / 74% 0% 0% 26%;
    }
    80% {
        border-radius: 55% 0% 0% 63% / 38% 0% 0% 62%;
    }
    90% {
        border-radius: 25% 0% 0% 30% / 39% 0% 0% 61%;
    }
    100% {
        border-radius: 66% 0% 0% 67% / 65% 0% 0% 35%;
    }
}
.txt{

        .header{
            max-width: 60%;
            span{
                letter-spacing: 1.5px;
                line-height: 27px;
                
            }
            span{
                text-transform: uppercase;
                color: black;
            }
            /* h1{
                font-size: 60px;
                font-weight: 700;
                break-after: ;
            }
            */
            .fs-60{
                font-size: 60px;
                color: black;
                line-height: 60px;

            }
            @media screen and (max-width:1600px) {
                .fs-60{
                font-size: 50px;
  line-height: normal;

            }
            }
            @media screen and (max-width:780px) {
                .fs-60{
                font-size: 40px;
  line-height: normal;

            }
            }
        }
        @media screen and (max-width:767px){
            .header{
            max-width:70%;}
        }
        @media screen and (max-width:500px){
            .header{
            max-width:100%;}
             .fs-60{
                font-size: 35px;
  line-height: normal;

            }
        }
        .services{
                li{
                    list-style: none;
                    line-height: 28px;
                    margin-top: 5px;
                    padding-bottom: 5px;
                    span{
                        padding-left: 8px;
                    }
                }
            }
        
}
.link-wrapper{
        /* margin-top: 3rem !important; */
    }
    a{
    text-decoration: none;
    color: white;
    padding: 0.9em 2em;
    background-color: black;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    width: max-content;
    /* margin-left: 10px; */
}
a:hover{
    background-color: #fec983;
}

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
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
}
@media screen and (max-width:992px){
     .header{
        max-width: 100% !important;}
        
}


    `;
    export default Section