import styled from "styled-components";

const Section = styled.section`
  label {
      margin-bottom: 10px;
      font-size: 20px;
    }
  .input-row {
    width: calc(50% - 10px);
    position: relative;
    input {
      height: 70px;
      padding: 18px 25px;
      font-size: 20px;
    }
    input:focus {
      outline: 0px;
      border: 1px solid #ff5e62;
    }
  
  }
  form {
    .error-message{
      position: absolute;
      color: #ff5e62;
      font-size: 20px;
      right: 0px;
      top:0px;

  }
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    flex-wrap: wrap;
    row-gap: 20px;
  }
  .submit {
    background-color: #ff5e62;
    border: none;
    height: fit-content;
    padding: 15px 25px;
    color: white;
  }
  .submit:hover {
    background-color: black;
  }
  .password {
      cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 10;
    svg {
    }
    height: 100%;
    max-width: 20%;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 25px;
  }
  .black-dots-input {
    -webkit-text-security: disc; /* For Safari */
    text-security: disc; /* For other browsers */
    font-size: 20px;
  }



  .forgot{
    position: absolute;
    right: 0;
    font-size: 20px;
    transition: all 0.3s linear 0s;

  }
  .submit {
    background-color: #ff5e62;
    border: none;
    height: fit-content;
    padding: 15px 25px;
    color: white;
  }
  .submit:hover {
    background-color: black;
  }
.hidden-box{
  .error-message{
    position: static !important;
      color: #ff5e62;
      font-size: 20px;
      right: 0px;
      top:0px;

  }
  transition: all 0.3s linear 0s;

  background-color: rgba(var(--wdtHeadAltColorRgb), 0.5);
  position: absolute;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left:   0;
  display: flex;
  justify-content: center;
  align-items: center;
  form{
  transition: all 0.3s linear 0s;
    z-index: 101;
    svg{
    height: 30px;
    width: 30px;
  }
border-radius: 20px;
background-color: white;
display: flex;
flex-direction: column;
padding: 40px;
overflow: hidden;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
.input-wrapper{
  display: flex;
  flex-direction: column;
  input{
    height: 70px;
    height: 70px;
      padding: 18px 25px;
      font-size: 20px;
  }
  input:focus{outline: none;}
  
}
  }
}
`;

export default Section;
