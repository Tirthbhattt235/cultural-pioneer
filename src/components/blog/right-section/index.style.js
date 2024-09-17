import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .left {
    width: 400px;
  }
  .right {
    width: calc(100% - 500px);
    margin-left: 100px;
  }

  .pagination {
    margin-top: 35px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    a {
      height: 60px;
      min-width: 60px;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white; 
      
      transition: all 0.3s linear 0s;
      border-radius: 5px;
      background-color: black;
      letter-spacing: 3.2px;
    }
    .active a {
      background-color: rgb(255, 94, 98);
    }
    a:hover {
      background-color: rgb(255, 94, 98);
      color: white;
    }
    li {
      margin: 0 8px;
    }
    .next a::after {
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
    .previous a::before {
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
    .previous,
    .next {
      position: relative;
      a {
        text-decoration: none;
        text-transform: uppercase;
        background-color: transparent;
        color: black;
        font-size: 16px;
        font-weight: 500;
      }
      a:hover {
        background-color: transparent;
        color: rgb(255, 94, 98);
      }
    }
  }
  @media only screen and (min-width: 1281px) and (max-width: 1540px) {
    .left {
      width: 300px;
    }
    .right {
      width: calc(100% - 350px);

      margin-left: 50px;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;

    .left {
      width: 100%;
      margin-top: 50px;
    }
    .right {
      width: 100%;

      margin-left: 0px;
    }
  }
  @media screen and (max-width: 1024px) {
.pagination{
  a{
    height:40px;
    min-width: 40px;
  }
  flex-direction: row;
  flex-wrap: wrap;
}
  }
  @media screen and (max-width: 400px) {
    .pagination{
      justify-content: flex-start;
    }
  }
`;
export const Blog = styled.div`
  padding: 15px;
  padding-left: 0%;
  .blog-wrapper:not(:last-child) {
  }
  .blog-wrapper:hover{
    a {
        transition: opacity 0.35s, transform 0.45s;
        transform: translate3d(0, 0, 0) !important;
      }
  }
  .blog-wrapper {
    padding-bottom: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 40px;
    border-bottom: 1px solid #cbcbcb;
    .left,
    .right {
      width: calc(50% - 20px);
    }
    .hover {
    
    }
    .right {
      margin-left: 0px !important ;
      margin-left: 0px !important ;

    }
    .date {
      margin-top: 30px !important;
      margin-bottom: 20px;
      text-transform: uppercase;
      font-size: 16px;
      span {
        margin-right: 7px;
      }
    }
   
    .left {
      overflow: hidden;
      border-radius: 15px;
      a {
        transition: opacity 0.35s, transform 0.45s;
        height: 100%;
        display: flex;
        transform: translate3d(-6.66%, 0, 0);
        width: calc(100% + 10%);
        background-position: center;
        background-size: cover;
      }

      
    }
    .primary-btn {
      svg {
        height: 16px;
        width: 16px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    .blog-wrapper{
      .left,.right{
      width: 100%;

    }
    .left{
      a{
        min-height: 300px;
      }
    }
    }
   
  }
`;
export default Section;
