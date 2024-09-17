import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  .grid{
display: flex;
flex-direction: row;
flex-wrap: wrap;
column-gap: 30px;
}
  .blog-box {
    width: calc(50% - 20px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 40px;
    .left {
      
      border-radius: 15px;
      overflow: hidden;
      a {
        width: 100%;
        height: 100%;
        display: flex;
        background-position: center;
        background-size: cover;
      }
    }
    .left,
    .right {
      width:calc( 50% - 20px);
    }
    .right {
      display: flex;
    flex-direction:column;
    .date{
      margin-top: 30px;
      margin-bottom: 20px;
    }
    }
  }
  @media screen and (max-width: 1024px;) {
    
  }
`;
export const Blog = styled.div`
  padding: 15px;
  padding-left: 0%;
  width: calc(50% - 15px);
  .blog-wrapper {
    padding-bottom: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 40px;
    border-bottom: 1px solid #CBCBCB;
    .left,.right{
      width: calc(50% - 20px );
  }
  .hover{
    a{

      transition: opacity .35s, transform .45s ;

      transform: translate3d(0, 0, 0) !important;
       
      }
  } 
  .right{
    margin-left: 0px !important ;
  }
  .date{
    margin-top: 30px !important;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 16px;
    span{
      margin-right: 7px;
    }
  }
.right{
  margin-left: 0px !important ;
  
  
}
  .left{
    overflow: hidden;
    border-radius: 15px;
    a{
      transition: opacity .35s, transform .45s ;
      height: 100%;
      display: flex;
      transform: translate3d(-6.66%, 0, 0) ;
      width: calc(100% + 10%);
      background-position: center;
background-size: cover;
    }
   
  .wrapper:hover{
   .left{
    
   }
  }

  }
  .primary-btn{
    svg{
      height: 16px;
      width: 16px;
    }
  }
}
  @media screen and (max-width: 1024px) {
     width: calc(100%);
  }
  @media screen and (max-width: 767px) {
    .blog-wrapper{
    .left,.right{
      width: 100%;
    }
    .left a{
    min-height:300px;}
    }
    padding: 0%;
  }


`;
export default Section;
