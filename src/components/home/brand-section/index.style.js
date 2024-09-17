import styled from 'styled-components'
import Bg from "../../../../public/Home-3-Brand-Logo-Mask-Bg.svg"
const Section = styled.section`

.line{
      .brand{
            height: 160px;
            width: 160px;
            margin-left: 50px;
            margin-right: 50px;
            /* position: absolute; */
            display: flex;
            justify-content: center;
            /* align-items: center; */
        .mask{
          mask-image: url('/assets/images/Home-3-Brand-Logo-Mask-Bg.svg');
      /* Ensure that non-masked areas are transparent */
      mask-repeat: no-repeat;
      mask-size: cover;
        }
          
      }

}
.header-text{
  margin-bottom: 70px;
  padding-left: 30px;
padding-right: 30px;
@media screen  and (max-width:770px){
  padding-left: 20px;
padding-right: 20px;
}
}
@keyframes moveLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-80%);
  }
}

@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(80%);
  }
}

.brands {
  overflow: hidden;
}

.line {
  display: flex;
  flex-direction: row;
  position: relative;
}

.line:nth-child(1) {
  animation: moveLeft 20s linear infinite alternate;
}

.line:nth-child(2) {
  animation: moveRight 20s linear infinite alternate;
}
a:hover + .line{
  position    :static  !important;
}
a{
 
}
img{
      background: #fff;
      mask-image: url(${Bg});

      -webkit-mask-size: cover;
      -webkit-mask-position: center;
      -webkit-mask-repeat: no-repeat;
      mask-image: url{Bg};
      mask-size: cover;
      mask-position: center;
      mask-repeat: no-repeat;
}
`;
export default Section;