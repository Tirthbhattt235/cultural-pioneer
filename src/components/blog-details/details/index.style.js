import styled from "styled-components";

const Section = styled.section`
.reply-btn a{
  border: 2px solid #ff5e62;
  padding: 8px 15px ;
  color:#ff5e62 ;
border-radius: 5px;
text-decoration-line: none;
font-size: 14px;
}
.reply-btn a:hover{
  color: white;
  background-color: #ff5e62;

}
.blog-box{
  padding: 15px;
  padding-left: 0%;
}

  .blog-wrapper {
   

    padding-bottom: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 40px;
    border-bottom: 1px solid #CBCBCB;
    .left,.right{
      width: calc(50% - 20px );
  }
  .hover{
    a{

      transition: opacity .35s, transform .45s ;

      transform: translate3d(0, 0, 0) !important;
       
      }
  } 
  .right{
    margin-left: 0px !important ;
  }
 
  .left{
    overflow: hidden;
    border-radius: 15px;
    a{
      transition: opacity .35s, transform .45s ;
      height: 100%;
      display: flex;
      transform: translate3d(-6.66%, 0, 0) ;
      width: calc(100% + 10%);
      background-position: center;
background-size: cover;
    }
   
  .wrapper:hover{
   .left{
    
   }
  }
 
.right{
  margin-left: 0px !important ;
  .date{
    margin-top: 30px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 16px;
    span{
      margin-right: 7px;
    }
  }

}
  }
}

  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .left {
    width: 400px;
  }
  .right {
    width: calc(100% - 500px);
    margin-left: 100px;
  }
  .btns{
    margin-top: 60px;
    button{
      background-color: transparent;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 3.2px;
      font-weight: 500;
      border: none;
      transition: all 0.3s linear 0s; 
      position: relative  ;
      padding: 0px;
    }
    button:hover{
      color: #ff5e62;
    }
    .prev-btn{
      padding-right: 30px;
    }
    .next-btn{
      padding-left: 27px;
    }
    .prev-btn::after {
content: "/";
position: absolute;
right: 0px;
    }
    .next-btn::after {
      content: "";
      position: relative;
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-left: 10px;
      border-top: 2px solid var(--wdtSecondaryColor);
      border-left: 2px solid var(--wdtSecondaryColor);
      border-right: transparent;
      border-bottom: transparent;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
      transition: var(--wdtBaseTransition);
      -webkit-transition: var(--wdtBaseTransition);
    }
    .prev-btn::before {
      content: "";
      position: relative;
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 10px;
      border-top: 2px solid var(--wdtSecondaryColor);
      border-left: 2px solid var(--wdtSecondaryColor);
      border-right: transparent;
      border-bottom: transparent;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      transition: var(--wdtBaseTransition);
      -webkit-transition: var(--wdtBaseTransition);
    }
  }
  @media screen  and (max-width:1540px){
    .left{
      width: 300px;
    }
    .right{
      width: calc(100% - 350px);
      margin-left: 50px;
    }
   
  }
  @media screen  and (max-width:1200px){
    .service-wrapper{
        .service-left,.service-right{
          width: 100% !important;

        }
        .service-right{
          padding-left: 0 !important;
          margin-top: 50px;
        }
      }
  }
  @media screen  and (max-width:1024px){
    .wrapper{
      flex-direction: column-reverse ;

    }
    .left{
      width: 100%;
    }
    .right{
      margin-bottom: 50px;
      width: 100%;
      margin-left: 0px;
    }
   
  }
  @media screen  and (max-width:767px){
    .line{
      flex-direction: column;
    }
    .fs-30{
      font-size: 30px;

    }
    .blog-box{
      padding: 0px;
    }
    
    .blog-wrapper{
      .left,.right{
        width: 100%;
        
      }
      .right{
        .primary-btn{
         
        }
        margin-bottom: 0px;
      }
      .left a{
        min-height: 300px;
      }
    }
  }
  @media screen and (max-width: 450px) {
    .swiper-container{
      .swiper-slide{
  padding-right: 0px !important;

}
    }
}
`;
export const Blog = styled.div`
.text{
  p{
    margin-bottom: 20px;
    line-height: 24px;
  }
}
  .banner {
    overflow: hidden;
    border-radius: 15px;
    height: 100%;
    width: 100%;
  }
  .line{
    p{
      display: flex;
    flex-direction: row;
    margin-bottom: 0px;
    }
   
    span:not(:first-child){
      padding: 0 10px;
      margin-left: 20px;
     position: relative;
     display: flex;
     align-items: center;
    }
    span:not(:first-child)::after{
      position: absolute;
    content: '/';
    top: 0;
    left: -8px;
    }
    color: black;
}
.service-wrapper{
  padding-top:70px ;
display: flex;
flex-direction: row;
flex-wrap: wrap;
  .service-left,.service-right{
    width: calc( 50%);
  }
  .service-right{
    padding-left: 40px;
    display: flex;
    align-items: center;
  }
  .service-left{
    overflow: hidden;
    border-radius: 10px;
  }
  ul{
    padding-left: 0%;
    list-style: none;
    
  }
  .icon{
    margin-right: 16px !important;
  }
}
.swiper-container{
padding-top: 80px;
color: black;
.slider-wrapper{
  overflow: hidden;
  border-radius: 15px;
}
.swiper-slide{
  padding-right: 30px;

}
}


`;
export const Review=styled.div`
margin-top: 65px;
@media screen and (max-width:1280px) {
    .wrapper {padding: 30px;}
  }

  .reviews {
  }
  .review {
    p{
      line-height: 1.8;

    }
    .text {
      padding-left: 80px;
      padding-bottom: 35px;
      border-bottom: 1px solid  rgba(0, 0, 0, 0.15);
      .name {
    line-height: 1.8;

      }
      .date {
    line-height: 1.8;

        color: #202020;
        font-size: 13px;
      }
      .name-date {
        margin-top: 5px;
        margin-bottom: 15px;
        min-height: 30px;
      }
      
      .horizontal-line {
        border-top: 1px solid rgba(0, 0, 0, 0.15);
      }
    }
   
    .review-img {
      position: absolute;
      left: 0%;
      .img-wrapper {
        border: 1px rgba(0, 0, 0, 0.15) solid;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        border-radius: 50%;
      }
    }
  }
  
  form {
    column-gap: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    textarea {
      width: 100%;
      font-size: 16px;
      padding: 18px;
      border: 1px solid transparent;
      outline: none;
      height: 100%;
    }
    textarea:focus {
      border: 1px solid #ff5e62;
    }

    .input-row {
      display: flex;
      width: calc(50% - 10px);
      row-gap: 20px;
    }
    .input {
      input {
        width: 100%;
        font-size: 16px;
        padding: 18px;
        outline: none;
      }
      input:focus {
        border: 1px solid #ff5e62;
      }
    }
    .input{
      position: relative;
    }
    .error-message{
      position: absolute;
      right:20px;
      bottom: 5px;
      color: red;

    }
  }
 form {
  input,textarea{
    border: 1px solid rgba(0, 0, 0, 0.15) ;
  }
  label {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 5px;
    color: #000000;
  }
 }
  .MuiRating-root{
    span{
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 20px;
      }
    }
  }
  .condition{
    font-size: 14px !important;
  }
  @media screen and (max-width: 768px) {
    .input-row{
      width: 100% !important;
    }
    form{
      
      div:nth-child(1){order :2 !important;}
      div:nth-child(2){ order :1 !important; margin-bottom:20px;}
      div:nth-child(3){ order :3 !important;}
    }
    
    /* .input-row:nth-child(1){
      order: 1 !important;
    } */
  }
  @media screen and (max-width: 575px) {
    .reply-btn{
      margin-bottom: 15px;
    }
    .review,.text{
      flex-direction: column !important;
      p{
    }
    }
    .review-img{
      margin-right: auto !important;
      position: static !important;
      .img-wrapper{
        height: 60px !important;
        width: 60px !important;
        img{
          height: 55px !important;
          width: 55px !important;
        }
      }
    }
    .text{
      padding-left: 0px !important;
    }
    .MuiStack-root {
      justify-content: center;
    }
    
  }
  .fs-30{
    font-size: 30px !important;
  }
  .form-text{
    color: #202020;
      h3{
        margin-top: 24px;
        margin-bottom: 12px;
        span{
          line-height: 1.5;
          font-size: 13px;
        }
      }
  }

  `;
  export const FormBox =styled.div``;
export default Section;
