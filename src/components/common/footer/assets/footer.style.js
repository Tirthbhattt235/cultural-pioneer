import Imggg from "./imgs/Footer-2-Mailchimp-bg.png"

import styled from 'styled-components'
const Section = styled.footer`
      .topline{
            padding: 35px 0px;
            background-repeat: no-repeat;
            background-size: cover;
            height: 140px;
            svg{
              -webkit-transform: rotate(348deg);
            }
      }
      @media screen and (max-width:1024px) {
        .topline{
          height: auto;
        }
        
      }
      .p-40{
      padding:40px;
    }
    .pe-40{ 
      padding-right:40px;
    }
    .ps-40{
      padding-left:40px;
    }  
    .pt-40{
      padding-top:40px;
    }
    .pb-40{
      padding-bottom:40px;
    }
    .txt{
      h4{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 32px;
            font-weight: 700;
            color: rgb(0, 0, 0);
      }
    }
    .interestedform{
     max-width: 35% !important;
     @media screen and (max-width:767px){
      max-width: 100% !important;
      width: 100% !important;
     }
      input::placeholder{
        color: lightgray;
      }
      input{
            padding: 15px 10px 15px 10px;
    background-color: #02010100;
    border-style: solid;
    border-width: 0px 0px 1px 0px;
    border-color: white;
    margin: 0 10px 0 0; 

    color: white;
    width: 100%;
    
    /* min-width: 180px; */
      }
      input:focus{
            outline: none;
      }
      button[type="submit"]{
    /* position: absolute; */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-bottom: -25px;
    /* visibility: hidden; */
    width: 80px;
    height: 65px;
    padding:1.8rem;
    transform: rotate(320deg);
    /* content: '\afe2'; */
    background-color:#ff5e62   ;
    /* -webkit-animation: jet-spinner .6s linear infinite;
    animation: jet-spinner .6s linear infinite; */
    /* border: 3px solid #e1e1e1; */
    /* border-top-color: #000000; */
    -webkit-border-radius: 50%;
    border-radius: 50%;
    font-size: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.8rem !important;
    svg{
      height: 40px !important;
      width: 40px !important;
    }

      } 
      button:hover{
      background-color: black;
    }
    }
    @-webkit-keyframes jet-spinner
{
    to
    {
        -webkit-transform: rotate(360deg); 
                transform: rotate(360deg);
    }
}
@keyframes jet-spinner
{
    to
    {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}

.mainline{
  padding: 60px 30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1780px;

  img{
    margin-bottom: 20px;
  }
  p{
    font-size: 16px;
    padding: 20px 0px 0px 0px;
    max-width: 85%;
  }
  @media screen and (max-width:767px) {
   p{
    max-width: 100%;
   }
    
  }
  h5{
    color: black;
    font-size: 24px;
    font-weight: 700;
   
  }
  a{
    text-decoration: none;
    color:currentColor;
  }
  a:hover{
    background: none;
    color:#ff5e62;
  }
  .txt{

  }
  li{
    list-style-type: none;
  }
  /* .quicklinks a::before ,.services a::before{
    position: relative;
    content: '';
    width: 10px;
    height: 1px;
    display: inline-block;
    background: black ;
    margin-right: 5px;
    transition: 0.5s cubic-bezier(.68,-0.55,.27,1.55);
    -webkit-transition: 0.5s cubic-bezier(.68,-0.55,.27,1.55);
   
  } */
  .quicklinks , .services {
    span::before{
      position: relative;
    content: "";
  

      flex-direction: row;
    width: 10px;
    height: 1px;
    display: inline-block;
    background: var(--wdtBorderColor);
    margin-right: 5px;
    transition: 0.5s cubic-bezier(.68,-0.55,.27,1.55) !important;
    /* -webkit-transition: 0.5s cubic-bezier(.68,-0.55,.27,1.55); */
    }
    a{
      transition: color 0.3s;
      /* padding-bottom: 5px; */
      margin-top: 5px;
      line-height: 29px !important;
    }
    span{
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease !important;
    }
    a:hover{
      span::before{
        width: 0px !important;
      }
    }
  }
  
  .quicklinks li,.services li{
    padding-bottom: 5px;
    padding-top: 5px;
  }
  .quicklinks li a,.services li a{
    line-height: 29px;
    display: flex;
    align-items: center;
  }
  .followus{
    li a{
      display: flex;
      width: 34px;
      height: 34px;
      background-color: #ff5e62;
      margin-right: 10px;
      border-radius: 50%;
    }
    a:hover{
      background-color: #fec983;
    }
  }

}
  .lastline{
      border-style: solid;
    border-width: 1px 0px 0px 0px;
    border-color: #71717157;
  }
  @media screen and (max-width:600px){
  .mainline{
    padding: 40px 20px;
  }
}
.width-40{
  width: 40% ;
}
.width-20{
  width: 20% ;

}
.quicklinks{
  width: 50%;
}
.services{
  width: 50%;
}
.me-20{
  margin-right: 20px ;
}
@media screen and (max-width:1440px) {
  .width-40{
    width: 50% ;
  }
  .width-20{
    width: 50% ;
    padding-left: 0  !important;
    margin-top: 40px;
  
  }
}
@media screen and (max-width:767px) {
  .width-40{
    width: 100%;
  }
  .width-40:not(:first-child){
    
    margin-top: 40px;
  }
  .width-20{
    width: 100%;
    margin-left: 0 !important;
    margin-top: 40px;
  
  }
}
`;
export const Topline = styled.div`
    padding: 40px 0px;
    background-image: url(${Imggg});
    /* other styles */
`;
export default Section