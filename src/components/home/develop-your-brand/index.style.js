import styled from 'styled-components'

const Section = styled.section`
padding-left: 30px;
padding-right: 30px;
margin-left: auto;
margin-right: auto;
.icons{
      height: 40px;
      width: 40px;
      display: flex;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      margin: 7px !important;
}
img{
      height: auto;
}
.img-container-bottom{
      padding-bottom: 60px;
      img:not(:last-child){
            margin-bottom: 30px;
      }
      padding-right: 15px;

}
.img-container-top{
      padding-left: 15px;
      padding-top: 60px;
      img:not(:last-child){
            margin-bottom: 30px;
      }

}
@media screen and (max-width:768px) {
      .img-container-bottom{
padding-top: 0%;
}
.img-container-top{
      padding-bottom: 0%;
      padding-left: 0%;
}
}
.primary-btn
{
      font-size: 18px;
    padding: 0.9em 2em;
}


.primary-btn{
      background-color: black !important;
}
.primary-btn:hover{
      background-color:rgb(255, 94, 98) !important;
}
.left-section{
      padding-right: 50px !important;
      width: 55%;
}
.right-section{
      width: 45%;
      padding-left: 60px !important;
}
@media screen and (max-width:1200px) {
      .left-section{
      padding: 0px !important;
      width: 100%;
}
.right-section{
      width: 100%;
      padding-left: 0px !important;
      padding-top: 30px !important;
}
.img-container-bottom{
      padding-bottom: 0px;
      img:not(:last-child){
            margin-bottom: 30px;
      }
      /* padding-right: 0px;   */

}
.img-container-top{
      /* padding-left: 0px; */
      padding-top: 30px;
      img:not(:last-child){
            margin-bottom: 30px;
      }

}}
.right-pad{
      
}
.services{
      margin: 0 -20px;
      margin-bottom: 20px;
}
.pe-40{
      padding-right: 35px !important;
}
.me-15{
      margin-right: 15px;
}
`;
export default Section;