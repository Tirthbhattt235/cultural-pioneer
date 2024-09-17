import styled from "styled-components";
const Section = styled.section`

.bg-banner{
      height: 687px;
      width: 100%;
      margin-top: 70px;
      position: relative;
}
.loc{
      position: absolute;
      animation: buzz .7s infinite alternate;
}
.loc-1{
      position: absolute;
      left: 5%;
    right: auto;
    top: 20%;
    bottom: auto;
}
.loc-2{
      left: 43%;
    right: auto;
    top: 1%;
    bottom: auto;

}
.loc-3{
      left: 66%;
    right: auto;
    top: 7%;
    bottom: auto;
}
.loc-4{
      left: 85%;
    right: auto;
    top: 15%;
    bottom: auto;
}
.loc-5{}
.loc-6{}
@keyframes buzz {
      0% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
100% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}     
}
`;
export default Section;