import styled from "styled-components";
const Section = styled.section`
  margin-top: -150px;
  padding-left: 30px;
  padding-right: 30px;
  .left {
    width: 50%;
    /* background-image: ; */
    background-repeat: no-repeat;
    background-position: center right;
    background-size: cover;
    padding: 0px 120px 30px 30px;
    .question-box {
      background-image: linear-gradient(180deg, #ff5e62 0%, #fec983 100%);
      padding: 30px 80px 30px 40px;
      border-radius: 15px;
    }
    .spacer {
      height: 400px;
    }
  }
  .right {
    width: 50%;
    padding-left: 100px;
    padding-top: 225px;

    .accordian {
      .accor-item:hover {
        color: white !important;

        background: linear-gradient(
          270deg,
          var(--wdtPrimaryColor) 0%,
          var(--wdtTertiaryColor) 100%
        );
      }
      .Mui-expanded {
        border-radius: 30px;
        overflow: auto;
        color: white !important;
        background: linear-gradient(
          270deg,
          var(--wdtPrimaryColor) 0%,
          var(--wdtTertiaryColor) 100%
        );
        .accor-item {
          margin-bottom: 20px;
          border: #ff5e62 1px solid;
        }
      }
      .accor-item {
        margin-bottom: 20px;
        border: #ff5e62 1px solid;
      }
      .accor-item::before {
        content: none !important;
      }
      .accor-item {
        border-radius: 15px;

        margin-bottom: 20px;
        border: #ff5e62 2px solid;
        color: #202020;
        span {
          /* right: 20px;
          position: absolute; */
        }
        .question {
          padding: 0px;
          div {
            margin: 0px !important;
          }
          p {
            line-height: 1;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 24px;
            font-weight: 600;
            font-family: "Outfit", sans-serif !important;
            padding: 20px;
            transition: all 0.3s linear 0s;
          }
        }
        .answer {
          padding: 0px;

          p {
            font-size: 16px;
            line-height: 1.3;

            font-weight: 400;
            transition: all 0.3s linear 0s;
            padding: 20px;
            padding-top: 0px;
            font-family: "Outfit", sans-serif !important;
          }
        }
      }
    } 
    .question-box {
      padding: 40px;
      background: rgba(255, 94, 98, 0.09);
      border-radius: 15px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .w-55 {
        width: 55%;
      }
      .w-45 {
        width: 45%;
      }
    }
    .question-box{
      .primary-btn{
        background-color: black;
      }
    .primary-btn:hover{
      background-color: #ff5e62;
    }
    }
  }
  @media screen and (max-width: 1540px) {
    .left {
      padding: 0px 30px 30px 30px;
    }
    .right {
      padding-left: 60px;
      .question-box {
        .w-55 {
          width: 100%;
          h2,
          p {
            text-align: center;
          }
        }
        .w-45 {
          width: 100%;
          justify-content: center !important;
        }
      }
    }
  }
  @media screen and (max-width: 1280px) {
    margin-top: 70px;
    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
    }
    .right {
      width: 100%;
      padding-left: 0px;
      padding-top: 40px;
    }
    .spacer {
      height: 600px !important;
      width: 100%;
    }
  }
  @media screen and (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 767px) {
    .left {
      .question-box {
        padding: 30px;
      }
      h3 {
        font-size: 30px;
      }
    }
    .right{
      .question-box{
        padding: 20px;
        .w-55{padding:0px}
        .w-45{padding:0px}
      }
    }
    .right .accordian .accor-item .question p {
      font-size: 22px;
      line-height:normal;
    }
  }
  @media screen and (max-width: 600px) {
    .left {
      padding: 10px;
      .question-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding:20px ;
        img {
          margin-right: 0px !important;
          width: 150px;
          object-fit: contain;
          height: auto;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .spacer {
      height: 250px !important;
    }
  }
`;
export default Section;
