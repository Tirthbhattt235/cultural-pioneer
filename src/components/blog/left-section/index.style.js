import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SearchBox = styled.div`
  position: relative;
  input {
    border-radius: 10px;
    padding: 12px 60px 12px 30px;
    font-size: 16px;
    outline: none;
    border: 1px solid #cbcbcb; 
    width: 100%;
    height: 55px !important;
  }
  input:focus {
    border: 1px solid #ff5e62;
  }
  .submit {
    height: 55px !important;
    width: 50px;
    right: 15px;
    position: absolute;
    top: 0;
    background-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-size: 1.25em auto;
    background-size: 1.25em auto;
    content: none;
    border: none;
    background-color: transparent;
    outline: none;
    padding: 0;
    background-position: center;
    background-color: #ff5e62;
    mask-repeat: no-repeat;
  }
  .submit:hover {
    background-color: black;
  }
 .resultbox{
  z-index: 100;
  box-shadow: 0 -1px 8px 3px rgba(var(--wdtHeadAltColorRgb), 0.08);
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  margin-top: 15px;
  transition: all .4s ease;
  top: 65px;
   background-color: white;
   row-gap: 20px;
    transform: translateY(10px);
    opacity: 0;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
   .small-blog{
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    img{
      border-radius:15px ;

    }
    h5{
      font-size: 14px;
    font-weight: 500;
    margin-bottom: 0px;
    }

   }
   li{
    marker: none;
    list-style: none;
   }
 }
 input::focus + .resultbox{
 
  
 }
 .show{
  opacity: 1;
  z-index: 100;
  flex-direction: column;
  row-gap: 20px;
  z-index: 100;
  transform: translateY(0);


 }
`;
export const CategoryBox= styled.div`
  margin-top: 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
    padding: 30px;
    border: 1px solid #CBCBCB;
    position: relative;
    width: 100%;
    border-radius: 10px;
    .header{
      background: #F6F6F6;
      width: 100%;
      display: block;
    padding: 15px 30px;
    border: 0;
    font-weight: var(--wdtFontWeight_Ext);
    border-radius: var(--wdtRadius_3X);
    -webkit-border-radius: var(--wdtRadius_3X);
    }
    ul{
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-bottom: 0px;
    }
    li{
      list-style-type: none;
      margin-bottom: 4px;
      height: 54px;
      a{
        text-decoration: none;

        color: black;
      }
    }
    .tag-ul{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .taglink{
      width: fit-content !important;
margin-right: 10px;
margin-bottom: 10px;
      a{
        padding: 10px 18px;
        width: fit-content !important;
        color: black;
        text-decoration-line: none;
        font-size:16px;
        font-weight: 400;
      }
      a:hover{
        background-image: linear-gradient(80deg, #ff5e62 0%, #fec983 100%);
        color: white;
      }
    }
    }

`;
export const RecentBLogs= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
    padding: 30px;
    border: 1px solid #CBCBCB;
    position: relative;
    width: 100%;
    border-radius: 10px;

    ul{
        display: flex;
        flex-direction: column;
        padding-left: 0%;
        margin-bottom: 0%;
         row-gap: 36px;
    }
    .recent-blog{
      display: flex;
      flex-direction: row;
      
      column-gap: 15px;
      
      img{
        border-radius:10px ;
  
      }
      h5{
        font-size: 16px;
      font-weight: 600;
      margin-bottom: 0px;
      margin-bottom: 7px;
      }
  
     .date{
      font-size: 14px;
      font-weight: 600;
     }
     li{
      marker: none;
      list-style: none;
     }
    }
    @media screen and (max-width:1540px) {
      .recent-blog{
        flex-direction: column;
        row-gap: 15px;
      }
    }
    @media screen and (max-width:1024px) {
      .recent-blog{
        flex-direction: row;
      }
    }
    @media screen and (max-width:500px) {
      .recent-blog{
        flex-direction: column;
      }
    }
    `;
export default Section;
