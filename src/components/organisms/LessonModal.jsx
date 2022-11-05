import {useEffect, useState} from "react"

import { Button } from "../atoms/button/Button";
import { Input, Select, Checkbox } from "../molecules/Forms";
import Modal from "../molecules/modal";
import styled from "styled-components";
import { toast } from "react-toastify";

export const LessonModal = ({setActive, active, sections, submit}) => {
  const [title,setTitle] = useState('')
  const [type,setType] = useState('video')
  const [section,setSection] = useState('')
  const [require,setRequire] = useState(false)
  const [preview,setPreview] = useState(false)
  const [opt,setOpt] = useState([])
  useEffect(()=>{
    if(sections!==undefined){
      const opts = [{
        label:'select a section..',
        value: ''
      }];
      for(let i of sections){
        opts.push({
          label: i.title,
          value: i.sectionId
        })
      }
       setOpt(opts)
    }
  },[sections])

  const handleSubmit = async ()=>{
    if(section==='') toast("Pilih section terlebih dahulu.")
    else{
      await submit({
        sectionId:section,
        title,
        lessonType:type,
        isRequired:require,
        isPreview:preview
      });
      setActive(false);
      setTitle("")
      setType("video")
      setSection("")
      setRequire(false)
      setPreview(false)
    }
  }
  return (
    <div>
      <Modal
        active={active}
        hideModal={() => setActive(false)}
        title="Add Lesson"
        footer={(
            <BtnContainer>
              <Button onClick={() => setActive(false)}>Cancel</Button>
              <Button onClick={() => handleSubmit()} primary>Save</Button>
            </BtnContainer>
          )}
      >
        <Select
          label = 'Sections'
          value={section}
          onChange={(e)=>setSection(e.target.value)}
          options ={opt}
        />
        <Input
          label = 'Title Lesson'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder = 'Write a title...'
        />
        <Select
          label = 'Lesson Type'
          value={type}
          onChange={(e)=>setType(e.target.value)}
          options ={[{
            label:'Video',
            value:'video'
          },{
            label:'Onsite',
            value:'onsite'
          }]}
        />
        <Checkbox 
          checked={require}
          onChange={(e)=>setRequire(!require)}
          label="Required Lesson"
         />
        <Checkbox 
          checked={preview}
          onChange={(e)=>setPreview(!preview)}
          label="Previewable Lesson"
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