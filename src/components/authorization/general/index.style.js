import styled from "styled-components";

const Section = styled.section` 
input{
      outline: none;

}
input:focus{
border :1px solid #FF5E62;
}
input::placeholder{
      -webkit-tap-highlight-color: transparent;
}
display: flex;
background-image: linear-gradient(180deg, #FF5E62 0%, #FEC983 100%);
flex-direction: row;
.wrapper{
      padding: 100px 0;
      display: flex;
      flex-direction: row;
      column-gap: 30px;
      align-items: center;
      flex-wrap: wrap;
      .left,.right{
            width:calc(50% - 30px);
            padding: 40px;
            border-radius: 15px;
      }
      .left{
            border: 2px solid white;

            position: relative;
            color: white;
            overflow: hidden;
            .divspacer{
                  height: 400px;
            }
      }
      .right{
            position: relative;
            color: white;
            overflow: hidden;
            /* .heading {
                  background-color: #FEC983;
                  top: 0;
                  position: absolute;
                  width: 100%;
                  left: 0;
                  padding-left: 20px;
            } */
            p{
                  max-width: 80%;
            }
      }
      
}
.hidden-box{
      transition: all 0.3s linear 0s;

background-color: rgba(var(--wdtHeadAltColorRgb), 0.5);
position: absolute;
height: 100vh;
width: 100%;
position: fixed;
top: 0;
left:   0;
display: flex;
justify-content: center;
z-index: 11;
align-items: center;
.formcontainer{
      border-radius: 20px;
      overflow: hidden;
}
.form-wrapper{
      padding: 40px;
      border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: auto;     
background-color: white;
display: flex;
flex-direction: column;

form{
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      scroll-margin: 30px;
      max-height: 80vh;
      height: 100%;
    


}
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
input{
      height: 70px;
      padding: 18px 25px;
      font-size: 20px;
}
label {
      margin-bottom: 10px;
      font-size: 20px;
    }
}
}
.submit{
      padding: 18px 25px;
      background-color: #FF5E62;
      color:white ;
      border:none;
      margin-bottom: 40px;
}
.submit:hover{
      background-color: black;
}
.error-message{
      margin-top: 5px;
      margin-bottom: 5px;
      color: red;
}
@media screen and (max-width: 1024px){
      .wrapper{
            padding: 70px 0px !important;
      }
      .left,.right{
            width: 100% !important;

      }
.right{
      padding:0px !important;
      padding-top: 30px !important;
      p{
           max-width: 100% !important;
      }
      .fs-60{
            font-size: 45px !important;
      }
}
}
@media screen and (max-width: 767px){
      .wrapper{
            padding: 30px 0px !important;
      }
      .fs-60{
            font-size: 30px !important;
      }
      margin-top: 50px !important;
      margin-bottom: 30px !important;
}
.hidden-box{
      margin: 20px!important;
}
`;

export default  Section