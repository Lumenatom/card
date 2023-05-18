import styled from "styled-components";
import Bg from "./assets/grid_bg.jpg"
export const MainAppWrapper = styled.div`
  background-image: url("${Bg}");
  background-size: contain;
`
export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  

`;
export const CardItemValue = styled.div`
  display: flex;
  
  
  input{
    border: 2px solid ${({color}) => color};
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    
    &:focus{
      outline: none;
    }
  }
  
`;
export const ControlPanelButtons = styled.div`
  display: flex;
  gap: 5px;

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;

    svg {
      width: 30px;
      height: 30px;
      padding: 0;
      margin: 0;
    }
  }

  .addBtn {
    color: green;
  }
  .delBtn{
    color: orangered;
    
    svg{
      width: 28px;
      height: 28px;
    }
   
  }

`;
export const LineBlocks = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;