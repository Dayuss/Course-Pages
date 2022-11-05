import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../atoms/card/Card";
import { Text } from "../atoms/text/TextHeader";
import { PageHeader } from "../organisms/PageHeader";
import { ButtonIcon } from "../molecules/ButtonWithIcon";
import { TabComponent } from "../molecules/TabComponent";
import { Course } from "../organisms/Course";
import { SectionModal } from "../organisms/SectionModal";
import { LessonModal } from "../organisms/LessonModal";
import { v4 as uuidv4 } from 'uuid';
import { useGetSectionQuery, useCreateSectionMutation,useCreateLessonMutation } from "../../redux/api/courseApi";
import { toast } from "react-toastify";

export const Event = () => {
  const [active, setActive] = useState(false);
  const [activeLesson, setActiveLesson] = useState(false);

  const [cards, setCards] = useState([]);
  const { data, error } = useGetSectionQuery();
  const [section, response] = useCreateSectionMutation()
  const [lesson, resp] = useCreateLessonMutation()

  useEffect(()=>{
    if(!error)
      if(data!==undefined)
        setCards(data.data);

  },[data])

  const handleSection = (payload)=>{
   section(payload);
  }
  const handleLesson = async(payload)=>{
   await lesson(payload)
  //  then(resp=>toast(`Success add lesson ${resp.data.data.title}`));
  }

  return (
    <Container>
      <PageHeader />
      <TabComponent item="Curricullum" />
      <Card alert>
        Event Schedule: 24 Oktober 2021, 16:30
      </Card>
      <Content>
        <Course
          cards={cards} 
          setCards={(item)=>setCards([...item])}
         />
        <ButtonMaterial 
          onClick={()=>setActiveLesson(true)}
        />
      </Content>
      

     <BottomSection>
      <ButtonIcon
        primary
        icon="add"
        onClick={()=>setActive(true)}
        >Add Section
      </ButtonIcon>
    </BottomSection>
    <LessonModal
      submit = {handleLesson}
      sections = {cards}
      active={activeLesson}
      setActive={setActiveLesson}
      />
    <SectionModal
      submit = {handleSection}
      active={active}
      setActive={setActive}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 50px;
  display:flex;
  flex-direction: column;
`;

const Content = styled(Card)`
  margin-top:15px;
`

const BottomSection = styled.div`
  display:flex;
  justify-content: end;
  margin-top:20px;
`;

const ButtonMaterial = ({onClick})=>{
  return (
    <ButtonContainer>
      <ButtonIcon primary small icon="add" onClick={onClick}/>
      <Text onClick={onClick} clickable>Add Lesson Material</Text>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  display:flex;
  align-items: center;
  gap:10px;
`