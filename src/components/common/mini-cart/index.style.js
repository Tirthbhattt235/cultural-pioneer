import styled from "styled-components";

const Section = styled.section`
/* z-index: 1000 !important;
position: absolute;
border-radius: 10px;
background-color: aliceblue;top:50px;
padding: 20px;
background-color: var(--wdtBodyBGColor);
    border: 0px solid var(--wdtBorderColor);
    color: var(--wdtBodyTxtColor);
    float: left;
    min-width: 270px;
    padding: 20px;
    position: absolute;
    right: -15px;
    text-align: initial;
    box-shadow: 0 -1px 8px 3px rgba(var(--wdtHeadAltColorRgb), 0.08); */
a{
      color: black !important;
      padding-right: 20px;
      word-break: break-all;
}
a:hover{
      color: white;
      background-color:rgb(255, 94, 98) !important ;
    
}
.primary-btn:hover{
      color: white !important;
      background-color:rgb(255, 94, 98) !important ;
}
`;
export const  Product =styled.div`
      padding-left: 32px;
      padding-bottom: 15px;
      margin-bottom: 10px;
      border-bottom: 3px solid #717171;

      .text{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .link{
                  width: 70%;
            }
      }
      img{
            width: 30%;
            border-radius: 15px !important;
            
      }
      .cross{
            height: 20px !important;
            width: 20px !important;
            background-color:  rgba(0, 0, 0, 0.15);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 0px;
            top: 10px;
            font-size: 16px;
            font-weight: 600;
      }
`;


export const  Belowtext =styled.div`
display: flex;
flex-direction: column;
.primary-btn{
      background-color: black;
      color: white !important;
      text-transform: uppercase;
      cursor: pointer !important    ;
      margin-top: 10px !important;
      margin-bottom: 10px !important;
      padding: 0.75em 1.25em !important;
}
`;
export default Section;