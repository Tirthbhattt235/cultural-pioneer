import styled from "styled-components";
const Section = styled.section`
margin-top: 140px;
.q-wrapper{
      display: flex;
      flex-direction: row;
      column-gap: 30px;
      .q-card{
            width: calc(25% - 30px);
            background-color: #fff0f1;
            padding: 50px;
            border-radius: 15px;
           p{
            line-height: 27px;
           }
      }
      .q-card:hover{
            background: linear-gradient(270deg, var(--wdtPrimaryColor) 0%, var(--wdtTertiaryColor) 100%);
       color:white;
      }
}
`;
export default Section;