import {useEffect, useState} from "react"

import { Button } from "../atoms/button/Button";
import { Input } from "../molecules/Forms";
import Modal from "../molecules/modal";
import styled from "styled-components";
import { toast } from "react-toastify";


export const SectionModal = ({setActive, active, datum, submit}) => {
  const [title, setTitle] = useState("");
  const handleSubmit = ()=>{
    if(title==="") toast("Write a title first..");
    else{
      console.log(title)
      submit({title});
      setActive(false);

    }
  }
  useEffect(()=>{
    if(datum){
      setTitle(datum.title)
    }
  },[datum])
  return (
    <div>
      <Modal
        active={active}
        hideModal={() => setActive(false)}
        title={datum?'Edit Section':`Add Section`}
        footer={(
            <BtnContainer>
              <Button onClick={() => setActive(false)}>Cancel</Button>
              <Button onClick={handleSubmit} primary>Save</Button>
            </BtnContainer>
          )}
      >
        <Input
          label = 'Title Section'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder = 'Write a title...'
        />
      </Modal>
    </div>
  );
};


const BtnContainer = styled.div`
  display:flex;
  justify-content: end;
  gap:10px;
`