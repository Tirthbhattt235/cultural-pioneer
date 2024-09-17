import styled from "styled-components";
const Section = styled.section`
.mb-40{
  margin-bottom: 40px ;
}
  .service-link {
    position: absolute;
    left: 0%;
    bottom: 45px;
    /* background: linear-gradient(90deg, rgba(var(255, 94, 98), 0.8), rgba(var(254, 201, 131), 0.8)); */
    transition: all 0.3s linear 0s;
    -webkit-transition: all 0.3s linear 0s;
    font-size: var(--wdtFontSize_Ext);
    text-transform: uppercase;
    padding: 20px;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 0;
    font-weight: 600;
    position: relative;
    z-index: 1;
    flex: inherit;
    /* background-color:  rgb(255, 94, 98); */
    width: 80%;
  }
  .service-link::after {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(var(--wdtPrimaryColorRgb), 0.8),
      rgba(var(--wdtTertiaryColorRgb), 0.8)
    );
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0;
    transition: var(--wdtBaseTransition);
    -webkit-transition: var(--wdtBaseTransition);
  }
  .service-link::before {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(var(--wdtPrimaryColorRgb), 0.8),
      rgba(var(--wdtTertiaryColorRgb), 0.8)
    );
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    transition: var(--wdtBaseTransition);
    -webkit-transition: var(--wdtBaseTransition);
  }
  .img-container-1 {
    padding: 0 !important;
    padding-right: 20px !important;
    
  }
  .img-container-2 {
    padding: 0 !important;
    padding-left: 20px !important;
  }
  .img-container-3 {

    padding: 0 !important;
    padding-right: 20px !important;

  }
  .img-container-4 {
    padding: 0 !important;
    padding-left: 20px !important;
      .pb-20{
        padding-bottom: 20px !important;
      }
      .pt-20{
        padding-top: 20px !important;
      }
  }

  .left-block {
    padding: 0 !important;
      padding-right: 20px !important;
    /* overflow: hidden; */
  }
  .right-block {
    padding: 0 !important;

    padding-left: 20px !important;
    /* overflow: hidden; */
  }
  .row{
    margin: 0;
    padding: 0;
  }
  @media (max-width: 1220px){
    .img-container-4 {
    padding: 0 !important;
    
      .pb-20{
        padding-bottom: 15px !important;
      }
      .pt-20{
        padding-top: 15px !important;
      }
  }
  .img-container-1{ padding-right:15px !important}
  .img-container-3{padding-right:15px !important}
  .img-container-2{ padding-left :15px !important}
  .img-container-4{padding-left :15px !important ;padding-top: 30px !important;}
  .left-block{padding:0px !important}
  .right-block{padding:0px !important}
  }
  @media (max-width: 768px){
    .img-container-4 {
    padding: 0 !important;
      .pb-20{
        padding-bottom: 15px !important;
      }
      .pt-20{
        padding-top: 15px !important;
      }
  }
  .img-container-1{padding:0px !important; margin-bottom:15px !important; margin-top:15px !important}
  .img-container-3{padding:0px !important; margin-bottom:15px !important; margin-top:15px !important}
  .img-container-2{padding:0px !important; margin-bottom:15px !important; margin-top:15px !important}
  .img-container-4{padding:0px !important; margin-bottom:15px !important; margin-top:15px !important}
  .left-block{padding:0px !important}
  .right-block{padding:0px !important}
  }
  /* }
} */
`;
export default Section;
