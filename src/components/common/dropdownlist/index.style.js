import styled from "styled-components";

const  Section =styled.section`
/* styles/ComboBox.module.css */
.combobox-container {
  position: relative;
  width: 200px;
}

.combobox-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.combobox-options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  box-sizing: border-box;
}

.combobox-option {
  padding: 8px;
  cursor: pointer;
}

.combobox-option:hover {
  background-color: #f0f0f0;
}

`;
export default Section;