import styled from "styled-components";
import {useRef, useState} from 'react';
import { useDrag, useDrop } from "react-dnd";
import { Text } from "../atoms/text/TextHeader";
import {
  DragAbleIcon,
  UpdateIcon,
  VerticalActionIcon
} from "../atoms/icon"
  import { SectionModal } from "../organisms/SectionModal";
import { useDeleteSectionMutation, useUpdateSectionDataMutation } from "../../redux/api/courseApi";
import { toast } from "react-toastify";
import {ButtonDropdown} from "../molecules/ButtonDropdown"

export const CourseSession = ({ id, text, index, sessionMove }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'SESSION',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      sessionMove(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'SESSION',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  const [updateSection, ]= useUpdateSectionDataMutation();
  const [active, setActive] = useState(false);
  const handleSection = (payload) =>{
    updateSection({id, payload}).then(resp => toast("Success update section."))
  }
  const [hidden, setHidden] = useState(true)
  const toggleHidden = ()=>{
    setHidden(current => !current);
  }
  const [deleteSection, ] =  useDeleteSectionMutation();
  
  const handleDelete = ()=> deleteSection({id}).then(resp=>{toggleHidden();toast("Deleted!");})
  return (
    <Container
      ref={ref}
      data-handler-id={handlerId}
      >
      <LeftSide>
        <DragAbleIcon />
        <Text>{text}</Text>
          <a href="#" onClick={(e)=>{e.preventDefault();setActive(true)}}>
          <UpdateIcon />
        </a>
      </LeftSide>
       <SectionModal
          submit = {handleSection}
          datum={{title:text}}
          active={active}
          setActive={setActive}
          />
      <RightSide>
        <a href="#" onClick={(e) => {e.preventDefault();toggleHidden();}}>
          <VerticalActionIcon />
        </a>
        <ButtonDropdown hidden={hidden} setHidden={toggleHidden} actionButton={handleDelete} />
      </RightSide>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  gap:10px;
  align-items: center;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
`;
