import styled from "styled-components";
const Section = styled.section`
  padding-top: 40px;
  .wrapper {
    padding: 60px;
    border-radius: 20px;
    background-color: rgba(244, 244, 244, 255);
  }
  @media screen and (max-width:1280px) {
    .wrapper {padding: 30px;}
  }

  .reviews {
  }
  .review {
    .text {
      padding-left: 14px;
      .name {
        color: #000000;
      }
      .date {
        color: #202020;
        font-size: 14px;
      }
      .name-date {
        margin-top: 5px;
        margin-bottom: 5px;
        min-height: 30px;
      }
      .MuiRating-iconFilled {
        color: #ff5e62 !important;
      }
      .horizontal-line {
        border-top: 1px solid rgba(0, 0, 0, 0.15);
      }
    }
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 30px 20px;
    padding-bottom: 25px;
    .review-img {
      .img-wrapper {
        border: 1px rgba(0, 0, 0, 0.15) solid;
        border-radius: 50%;
        width: 40px;
        height: 40px;
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
        border: 1px solid transparent;
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
    .review,.text{
      flex-direction: column !important;
      p{
      text-align: center;
    }
    }
    .review-img{
      margin-left: auto !important;
      margin-right: auto !important;
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
`;
export default Section;
