import styled from "styled-components";
const Section = styled.section`
height:100vh ;
width: 100%;
background-color: #ffcecf;
display: flex;
padding-top: 35px;
padding-bottom: 50px;
.wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      svg{
            height: 350px !important;
            width: 350px !important;;
      }
      h3,h5{
            letter-spacing: 3.2px;
      }
}
`;
export default Section