import styled from 'styled-components'

const Section = styled.section`
padding-left: 30px;
padding-right: 30px;
@media screen and (max-width:1024px) {
      padding:0  20px;
      .slider{
            padding-left: 0% !important;
      }
      .fs-30{
            font-size: 20px !important;
      }
}
display: flex;
justify-content: center;
align-items: center;
.swiper-slide{
      /* width: fit-content !important; */
}
.pagination-list{
      .primary-btn{
            padding: 12px 20px !important;
      }
      a:after{
            content: '';
    height: 2px;
    width: 80px;
    background: rgba(var(--wdtSecondaryColorRgb),0.5);
    position: absolute;
    top: 50%;
    right: -70px;
    transition: var(--wdtBaseTransition);
    -webkit-transition: var(--wdtBaseTransition);
    transform: scale(0);
    -webkit-transform: scale(0);
    transform-origin: left;
    -webkit-transform-origin: left;
      }
}
.project-item {
      padding: 10px;
      .img-box{
            border-radius: 10px;
      }
      .product-link{
             transition: opacity 0.5s cubic-bezier(.9, .03, .69, .22);
        -webkit-transition: opacity 0.5s cubic-bezier(.9, .03, .69, .22);
        
            bottom: 0%;
            padding-bottom: 20px;
            left: 0%;
            /* height: 0; */
            padding-left: 15px;
            padding-top:50%;
            background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0, .95) 100%);
      }
      img{
      border-radius: 16px !important;

      }
     
}
/* .img-box{
  overflow: hidden;
  
      
  img {
    transform: scale(1.2);
    transition: 500ms ease-in;
}
} */

.project-item:hover{
      
      .product-link{
            /* display: none ; */
              transition: opacity 0.5s cubic-bezier(.9, .03, .69, .22);
        -webkit-transition: opacity 0.5s cubic-bezier(.9, .03, .69, .22);
        opacity: 0;
      }
      img{
             transform: scale(1.1);
   
      }
      .icon{
            svg {
                  color: inherit;
    display: inline-block;
    font-size: inherit;
    height: 80px;
    position: relative;
    vertical-align: top;
    width: 80px;
            }
      }
      .icon::before{
                content: '';
    position: absolute;
    background: linear-gradient(90deg, rgba(var(--wdtPrimaryColorRgb), 1), rgba(var(--wdtTertiaryColorRgb), 1));
    border-radius: 50%;
    width: 96px;
    height: 96px;
    margin-left: -8px;
    margin-top: -8px;
    transform: scale(1);
    -webkit-transform: scale(1);
    transition: 0.5s cubic-bezier(.65,.05,.36,1);
    -webkit-transition: 0.5s cubic-bezier(.65,.05,.36,1);
      }
      
}
li{
      list-style: none;
      margin-bottom: 10px; 
} 
.anim-btn{
     display: flex;
     align-items: center;
    color: #ff5e62 !important;
    font-size:30px;
    height: 55px !important;
    position: relative;
    transition: var(--wdtBaseTransition);
    -webkit-transition: var(--wdtBaseTransition);
    background: transparent;
}
.anim-btn.activer{
      background-color: #ff5e62;
      color: white  !important;
      padding: 12px 20px;
      transform: scale(1);
}
@media screen and (max-width: 1024px) {
     .anim-btn{
      height: 46px !important;

     }
    ul{
      margin-top: 20px;
    }

}
@media screen and (max-width: 1024px) {
     .project-item{
      padding: 10px 0px !important;
     }
}
.anim-btn.activer::after{
      content: '';
    height: 2px;
    width: 80px;
    background: rgba(var(--wdtSecondaryColorRgb),0.5);
    position: absolute;
    top: 50%;
    right: -70px;
    transition: var(--wdtBaseTransition);
    -webkit-transition: var(--wdtBaseTransition);
    transform: scale(1);
    -webkit-transform: scale(1);
    transform-origin: left;
    -webkit-transform-origin: left;

}

`;
export default Section;