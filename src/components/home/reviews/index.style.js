import styled from "styled-components";

const Section = styled.section`
  background-position: top left;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left:200px;
  padding-right: 200px;
  @media screen and (max-width:1540px) {
    padding-left: 0px;  
    padding-right: 0px;
    
  }

.main-block{
      padding-left: 30px;
  padding-right: 30px;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}

  .review {
    .box {
      box-shadow: 0px 0px 40px 0px rgba(var(--wdtSecondaryColorRgb), 0.1);
      padding: 30px 60px 30px 70px;
      background: #ffffff;
    }

    img {
      margin-bottom: 0;
      width: fit-content;
      position: absolute;
      left: -60px;
    top: 45px;
      border-radius: 50%;
    }
    @media screen and (max-width: 992px) {
      img {
        position: static !important;
      }
      .box {
        padding: 30px;
      }
    }
    svg {
      bottom: -10px;
    right: -35px;

      bottom: 0px;
      margin-bottom: 25px;
      right: 15px;
      color: #ff5e62;
    }
  }
  @media screen and (max-width: 992px) {
    .review:nth-child(odd) {
      margin-left: 0% !important;
    }
    .review:nth-child(even) {
      margin-right: 0% !important;
    }
  }
  h2{
      line-height: 1.2;
  }
  .mt-40{
      margin-top: 40px;
  }
  .line-one{width:33% ;padding:0;}
  .line-two{width:20% ;padding:0;}
  .line-three{width:47% ;padding:0;}
  .review:nth-child(odd) {
    margin-left: 0% !important;
  }
  .review:nth-child(even) {
    margin-left: -75px !important;
  }
  @media screen and (max-width: 1024px) {
      .line-one{
            width: 100%;
      }
      .line-two{
            display: none;
      }
      .line-three{
            width: 100%;
            padding-top: 50px;
            padding-left: 120px;
      }
      
  }
  @media screen and (max-width: 768px) {
      .review:nth-child(odd) {
    margin-left: 0% !important;
  }
  .review:nth-child(even) {
    margin-left: 0px !important;
  }
  .line-three{
            padding-top: 50px;
            padding-left: 0px;
            p{
                  margin-top: 10px;
            }
      }
  }
`;
export default Section;
