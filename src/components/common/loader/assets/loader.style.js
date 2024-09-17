
import styled from 'styled-components'
const main = styled.div`
input#loader3-button {
  display: none;
}
.pre-loader {
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999991;
  background-color: white;
}
.loader-inner {
text-transform: uppercase;
width: 100%;
text-align: center;
line-height: 50px;
margin: auto;
position: absolute;
left: 50%;
right: 0;
top: 40%;
transform: translateY(-50%);
}
.loader3-top {
  position: absolute;
  background-color: #282C30;
  width: 160px;
  height:70px;
  border-radius: 20px 20px 0 0;
  border:5px solid black;
  transform: translate(-50%,-50%);
  left: -5px;
  top: 50%;
  box-shadow: inset 20px 0 #1E2124;
  z-index:-1;
}
.loader3-middle {
  position: absolute;
  background-color: #4A4F55;
  border: 5px solid black; 
  width: 250px;
  height:100px;
  border-radius: 20px;
  top:30px;
  left:-130px;
  box-shadow: inset 20px 0 #373B3D;
  z-index:5;
}
.loader3-trace, .loader3-trace:before {
  position: absolute;
  background-color: #282C30;
}
.loader3-trace {
  border:5px solid black;
  width: 160px;
  height: 80px;
  border-radius: 10px;
  left:-85px;
  top:110px;
  box-shadow: inset 0 35px #1E2124;
  z-index:2;
}
.loader3-trace:before {
  content:"";
  width: 60px;
  height: 20px;
  border-radius: 0 0 10px 10px;
  top:80px;
  left:45px;
  border-bottom: 5px solid black;
  border-right: 5px solid black;
  border-left: 5px solid black;
}
.loader3-trace:after {
  position: absolute;
  content:"";
  width: 5px;
  height: 50px;
  background-color: black;
  left: 20px;
  top:15px;
  box-shadow: 60px 0 black, 115px 0 black;
}
.loader3-paper {
  position: absolute;
  border: 5px solid black;
  background-color: white;
  width:120px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  top:-70px;
  left: -65px;
  z-index:3;
}
.loader3-button-label {
  position: absolute;
  z-index:30;
  border-radius: 50%;
  border: 5px solid black;
  background-color: #FD6E49;
  width:15px;
  height: 15px;
  left: 90px;
  cursor: pointer;
  top:45px;
  animation: pulse 1.5s infinite;
}
/* input#loader3-button:checked ~ .loader3-paper {
  animation: print 10s linear infinite;
}
input#loader3-button:checked ~ .loader3-paper:before {
  animation: display 10s linear infinite;
} */
.loader3-paper {

  animation: print 10s linear infinite;
}
.loader3-paper:before {
  animation: display 10s linear infinite;
}
@keyframes print {
  0% {transform: translateY(0);z-index:3;}
  10% {transform: translateY(100px);z-index:3;}
  24% {transform: translateY(200px); z-index:3;}
  25% {transform: translateY(200px); z-index:3;}
  26% {transform: translateY(50px) scale(2.5);z-index:50;}
  30% {transform: translateY(50px) scale(2.5);z-index:50;}
  70% {transform: translateY(50px) scale(2.5);z-index:50;}
  75% {transform: translateY(-50px); z-index:3;}
  100% {transform: translateY(0px); z-index:3;}
}
@keyframes display {
  0%  {opacity:0;}
  16% {opacity:0;}
  20% {opacity:1;}
  24% {opacity:1;}
  25% {opacity:1;}
  26% {opacity:1; z-index:50;}
  30% {opacity:1; z-index:50;}
  70% {opacity:1; z-index:50;}
  75% {opacity:0; z-index:3;}
  100% {opacity:0; z-index:3;}
}
.loader3-paper:before {
  content:"Loading...";
  text-align: center;
  top: 45px;
  left: 13px;
  opacity:0;
}
@keyframes pulse {
  0% {
    transform:scale(.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 3px rgba(253, 110, 73,.3);
  }
    100% {
    transform: scale(.9);
    box-shadow: 0 0 0 0 rgba(253, 110, 73,.3);
  }
}
`;


export default main;
 