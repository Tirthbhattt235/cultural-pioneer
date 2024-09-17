import styled from "styled-components";
const Section = styled.section`
li{
  list-style-type: none;
  position: relative;
}
svg{
  color: #FF5E62;
  padding-left: 20px;
  padding-right: 20px;
}
li:not(:last-child)::after{
  position: absolute;
  color: #FF5E62;
    content: "/";
    width: 1px;
    height: 10px;
    right: 0;
}
  .header-text {
    margin-bottom: 70px;
  }
  .team {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 40px;

    .team-member {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: calc(25% - 40px);
      .text {
        h5 {
          margin-top: 30px;
          margin-bottom: 10px;
        }
        .toggler{
          height: 40px;
          display: flex;
        }
        .position {
          height: 25px !important;
          transition: all 0.3s linear 0s;
          opacity: 1;
          position: absolute;
          h6 {
                font-size: 0.9em;
    letter-spacing: 0.05em;
            font-weight: 400;
            transition: all 0.3s linear 0s;
          }
        }
        .link {
          height: 25px !important;

          transition: all 0.3s linear 0s;
          margin-top: 21px;
          opacity: 0;
          position: absolute;

         li:hover{
          svg{
            color:#fec983;
            transition: all 0.3s linear 0s ;
          }
         }
        
        }
      }
      .img-container {
      border-radius: 10px;

        transition: all 0.3s linear 0s;

        img {
          transition: all 0.3s linear 0s;

          scale: 1.1;
        }
      }
    }
    .team-member:hover {
      .img-container {
        border-radius: 200px;
        scale: 1;
        transition: all 0.3s linear 0s;
        img {
          scale: 1;
          transition: all 0.3s linear 0s;
        }
      }
      .text {
        position: relative;
        .position {
          position: relative;
          transition: all 0.3s linear 0s;
          overflow: hidden;
          margin-top: 21px;
          
          h6 {
            transition: all 0.3s linear 0s;
          }
          
          opacity: 0;
        }
        .link {
          transition: all 0.3s linear 0s;

          margin-top: 0px;
          opacity: 1;
        }
      }
    }
    .team-member:nth-child(even) {
      flex-direction: column-reverse;
      transition: all 0.3s linear 0s;
      .text {
        h5 {
          margin-top: 5px;
          margin-bottom: 10px;
        }
      }
    }
  }
  @media screen and (max-width:1024px){
    .team{
      .team-member {
      width: calc(50% - 40px);
    }
    }
.header-text{
  margin-bottom: 40px;
}
  }

  @media screen and (max-width:500px){
    .header-text{
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .team{
      .team-member {
      width: 100%;
      margin-bottom:20px ;
      .text h5{
        margin-top:20px;
      }
    }
    .team-member:nth-child(even) {
      flex-direction: column;
      .text h5{
        margin-top:20px;
      }
    }
    }

  }
`;
export default Section;
