import styled from "styled-components";
const Section = styled.section`
  @media screen and (max-width: 1024px) {
      padding-left: 20px;
      padding-right: 20px;
  }`;
export default Section;
export const Line = styled.div`
  align-items: center;
  margin-bottom: 15px;
  .sorting-list {
    -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
    width: 250px;

    .span-title {
      padding-left: 15px;
      padding-right: 15px;
      border-radius: 10px;
      line-height: 50px;
      border: 1px solid black;
    }
    li {
      list-style-type: none;
    }
    .dropdownlist {
      
  
      height: 287px;
      position: absolute;
      transition: all 0.3s linear 0s;
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      border-radius: 10px;
      margin-top: 10px;
      row-gap: 15px;
      z-index: 123;
      right: 0%;
      background-color: white;
      .search {
        padding: 10px;
        width: 100%;
        padding: 18px;

        border: 1px black solid;
      }
      .search:focus{
        outline: none;
      }
    }
    ul {
      /* position: absolute; */
      margin-bottom: 0px;
      overflow-y: scroll;
      right: 0px;
      padding-top: 0px;

      li {
        margin-bottom: 10px;
      }
      button {
        display: flex;
        align-items: center;
        transition: all 0.3s linear 0s;
        width: 100%;
        text-align: start;
        padding: 5px 10px;
        font-size: 16px;
        height: 30px;
        background-color: transparent;
        border: none;
      }
      button.active {
        background-color: #ddd;
      }
      button:hover {
        background-color: #ff5e62;
        color: white;
        transition: all 0.3s linear 0s;
      }
    }
  }
  @media screen and (max-width: 768px) {
    row-gap: 10px;
    
  }
`;
export const LinkBox = styled.div`
  position: absolute;
  grid-area: 1/1;
  height: fit-content;
  margin: auto 0 0 0;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px);
  left: 20px;
  bottom: 20px;
  padding: 30px;
  background: linear-gradient(
    90deg,
    var(--wdtPrimaryColor) 0%,
    var(--wdtTertiaryColor) 100%
  );
  align-items: center;
  border-radius: var(--wdtRadius_2X);
  flex-direction: row;
  flex-wrap: wrap;
  .left {
    width: 70%;
    display: flex;
    flex-direction: column;
    a {
      color: black;
    }
    a:hover {
      color: white;
    }
  }
  .right {
    width: 30%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: end;
    a {
      border-radius: 10px;
      margin: 5px;
      transition: all 0.3s linear 0s;
      svg {
        height: 25px;
        width: 25px;
        color: white;
      }
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ff5e62;
    }
    a:hover {
      background-color: black;
    }
  }
  @media screen and (max-width: 767px) {
      padding: 20px;
  }
  @media screen and (max-width: 500px) {
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
      justify-content: start;
    }
  }
`;
export const Product = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 30px;
  .product {
    width: calc((100% / 3) - 20px);
  }
  @media screen and (max-width: 1024px) {
    .product {
      width: calc((100% / 2) - 20px);
    }
  }
  @media screen and (max-width: 767px) {
    .product {
      width: 100%;
    }
    img{
      height: auto !important;
      object-fit: contain  !important;
    }
  }
`;
export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
  margin-top: 35px;
  padding-top: 15px;

  .prev-btn{
  transition: all 0.3s linear 0s;

    background-color: transparent;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 3.2px;
    font-weight: 500;
    column-gap: 4px;

    svg{
      height: 14px;
      width: 14px;
    }
  }
  .prev-btn:hover, .next-btn:hover{
    color: #ff5e62;
  transition: all 0.3s linear 0s;

  } 
  .next-btn{     background-color: transparent;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 3.2px;
    font-weight: 500;
    column-gap: 4px;
  transition: all 0.3s linear 0s;

    svg{
      height: 14px;
      width: 14px;
    } }
  .page-numbers {
    background-color: black;
    color: white;
    height: 60px;
    width: 60px;
    transition: all 0.3s linear 0s;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
  }
  .page-numbers:disabled {
    background-color: #ff5e62;
  }
`;
