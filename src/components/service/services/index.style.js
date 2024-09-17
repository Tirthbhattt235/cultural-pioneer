import styled from "styled-components";

const  Section =styled.section`
margin-top: 50px;
display: flex;
justify-content: center;
align-items: center;
.text{
         padding: 0px 20px 70px 20px;

}
.service{
    
      position: relative;
}
.overlay{
      position: absolute;
height: 100%;
width:100%;
      background-color: transparent;
    background-image: linear-gradient(90deg, #FF5E62 0%, #FEC983 100%);
    opacity: 0.85;
    z-index: -1;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}
.service:nth-child(even){
 display: flex;
 flex-direction: row-reverse;
}
.service:nth-child(odd){
 display: flex;
 flex-direction: row;
}
.service:nth-child(even){
 display: flex;
 flex-direction: row-reverse;
}
.service-wrapper{
 row-gap: 60px;
 color: white;
}
.left{
      padding: 40px 40px 40px 120px;
}
.index{
      height: 100px;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #FF5E62;
      background-color: white;

}
.left,.right{
      width: calc( 50% );
}
.left{
      h4,p{
            max-width:500px;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
}
.service-list{
      padding-bottom: 40px;
      display: flex;
      flex-direction: row;
      column-gap: 80px;
      div{
            min-width: 180px;
      }
      li{
            .icon{
                  margin-right: 8px;
            }
            list-style-type: circle white;
            padding-left: 5px;
      }
      
}
.line{
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 align-items: center;
 .primary-btn{
      margin-right: 30px;
 }
 p:hover{
      color: black;
 }
}
`;
export  default Section;