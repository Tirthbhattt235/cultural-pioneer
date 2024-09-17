import styled from "styled-components";
const Section = styled.section`
input::placeholder{
      -webkit-tap-highlight-color: transparent;
}
display: flex;
background-image: linear-gradient(45deg, #FF5E62 0%, #FEC983 100%);
.error-message{
      position: absolute;
      right: 0px;
      color: #dc3232;
      bottom: 0px;
      font-size: 16px;
      margin-right: 5px;

}
.bg{
      bottom: 0px;

      height: 400px;
      width: 100% ;
      background-image: linear-gradient(180deg, #11131900 0%, #FEC983 100%);
}
.left{
      border-radius: 15px ;
      overflow: hidden;
      width: 50%;

}
.right{
      width: 50%;
}

.email-box{
      bottom: 50px;
      margin-left: auto;
      margin-right: auto;
      column-gap: 35px;
}
.right{
      padding-left: 100px;
      padding-right: 100px;
      .bannertext {
    top:0;
            h5{
            font-size: clamp( calc(var(--wdtFontSize_Alt) - 10px), 2.25rem + 5.9375vw, calc(var(--wdtFontSize_Alt) * 2.6));
            font-weight: 900;
            letter-spacing: 0.075em;
    line-height: 0.65;
    opacity: 0.048;
    margin-top: -15px;
    margin-left: -5px;
      }}
      h3{
            line-height: normal;
      }
      form{
            row-gap:20px;
            display:flex;
            flex-direction: column;
      }
      .input-row{
            column-gap: 20px;
            .input{
                  width: calc(50% - 10px);
                  position: relative;
            }
            input {
                  width: 100%;
                  position: relative;
                  outline: none;
                  padding: 18px;
                  border: none;
                  border: white 1px solid;
                  font-size: 16px;
                  line-height: 18px;
            }
            input:focus{
                  outline: none;
                  border: #FF5E62 1px solid;
                  
            }
            
          
      }
      .submit{
            background-color: black;
            color: white;
            padding: 16px 35px;
            width: fit-content;
            border: none;
      }
      .submit:hover{
            background-color: #FF5E62;
            color: white !important;
            
    transition: all 0.3s linear 0s;

      }
        textarea{
                  line-height: 18px;
                  height: 196px;
                  outline: none;
                  padding: 18px;
                  border: none;
                  border: white 1px solid;
            }
            textarea:focus{
                   outline: none;
                  border: #FF5E62 1px solid;
            }
}
@media screen and (max-width: 1540px) {

.left{
      width: 42%;
}
.right{
      width: 58%;
      padding-left: 50px;
      padding-right: 50px;
}

}
@media screen and (max-width: 1024px) {

.left{
      width: 100%;
}
.right{
      width: 100%;
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 80px;
}
.bannertext{
      padding-top: 40px;
}
}
@media screen and (max-width: 767px) {
.right{
      padding-top:50px ;
      h3{
            font-size: 30px;
      }
     
}
.email-box{
            bottom: 30px !important;
            flex-direction: column !important;
      }
}
@media screen and (max-width: 500px) {
      .bannertext{
      padding-top: 10px;

      }
      .input-row{
            display: flex;
            flex-direction: column !important;
            row-gap: 20px;
      }
      .input{
            width: 100% !important;
      }
      a{
            text-align: center;
      }
      img{
            height: 500px !important;
      }
      .email-box{
            svg{
                  height: 70px;
                  width: 70px;
            }
            h3{
                  font-size: 23px;
            }
      }
}

`;
export default Section;
