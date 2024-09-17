import styled from "styled-components";

const Section = styled.section`

 table{
      border: 1px solid rgba(0,0,0,0.1);
      margin-bottom: 30px;
      border-width: 1px;
      thead{

      }
      tr{
            border-bottom: 1px solid rgba(0,0,0,0.1);
      }
 }
`;
export const Thead=styled.thead`

      border-bottom: 1px solid rgba(0,0,0,0.1);
 th{
      
 }
td{
      padding: 15px;
      p{margin-bottom:0px}
      line-height: 30px;
      font-weight: 700;
}
.th-1,.td-1{
      width: 150px;
      padding-left: 30px !important;
}
.th-2,.td-2{
      width:calc(41.3%);
}
.th-3,.td-3{
      width:calc(10.5%);
}
.th-4,.td-4{
      width:calc(22.2%);
}
.th-5,.td-5{
      width:calc(13%);
}
.th-6,.td-6{
      width:calc(4.5%);
}
`;

export const T_Body=styled.tbody`
td{
      padding: 15px;
      p{margin-bottom:0px}
}

.th-1,.td-1{
      width: 150px;
      padding-left: 30px !important;
}
.th-2,.td-2{
      width:calc(41.3%);
}
.th-3,.td-3{
      width:calc(10.5%);
}
.td-4{
      height: 100%;
}

.th-5,.td-5{
      width:calc(13%);
}
.th-6,.td-6{
      width:calc(4.5%);
}
 .qty-adder{

 margin-top: auto;
 margin-bottom: auto;
 .wrapper{
      display: flex;
      flex-direction: row;
 }
 .btnn,p{
      width: 40px !important;
        display: flex;
        justify-content: center;
        align-items: center;
      height: 50px !important;
      border: 1px solid  rgba(0,0,0,0.15);
      font-size: 20px;
      background-color:       transparent;

 }
 }
`;
 export const CouponBox= styled.div`
 margin-top: 50px;
 border: 1px solid  rgba(0,0,0,0.15);
 padding-left: 3.6%;
 display: flex;
 flex-direction: row;
    padding: 3.6%;
    input{
      flex:1;
      margin:5px;
      padding: 18px;
      height: 56px;
      border: 1px solid  rgba(0,0,0,0.15);

    }
    input:focus{
      outline: none;
      border: 1px solid #ff5e62;
    }
    a{
      margin:5px;
    }

 `;
  export const PriceBox= styled.div`  
     margin-top: 50px;
 border: 1px solid  rgba(0,0,0,0.15);
 padding-left: 3.6%;
 display: flex;
 flex-direction:  column;
    padding: 3.6%;
    .line{
      flex: 1;
 border-bottom: 1px solid  rgba(0,0,0,0.15);
            h2{
                  padding-top:15px;
                  padding-bottom: 15px;
                  font-size: 15px;
            }
    }
    .line.final{
h2{
      font-weight: 600;
      text-transform: capitalize;
}
    }
     `;
export default Section