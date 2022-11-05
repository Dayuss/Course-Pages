import styled from "styled-components";
import {Inputs} from "../atoms/input/input" 
import {Selects} from "../atoms/input/select" 
export const Input = (props) => {
  const { placeholder = "", onChange, value, label } = props;
  return (
    <>
      <label>{label}</label>
      <Inputs type="text" placeholder={placeholder} onChange={onChange} value={value} />
    </>
  )
};

export const Select = (props) => {
  const { onChange, options, value, label } = props;
  return (
    <>
      <label>{label}</label>
      <Selects onChange={onChange}>
        {
            options.map(item=><option value={item.value} selected={item.value===value}>{item.label}</option>)
        }
      </Selects>
    </>
  )
};


export const Checkbox = (props) => {
  const { onChange, checked, label } = props;
  return (
    <ContainterCheckbox>
        <input 
            type="checkbox" 
            checked={checked}
            onChange={onChange}
            />
        <label>{label}</label>
    </ContainterCheckbox>
  )
};

const ContainterCheckbox = styled.div`
    display:flex;
    margin-top:5px;
    gap:10px;   
    align-items:center;
` 

