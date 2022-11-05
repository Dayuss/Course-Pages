import styled from "styled-components";
import {useRef, useState} from 'react';
import { useDrag, useDrop } from "react-dnd";

import { Text } from "../atoms/text/TextHeader";
import moment from "moment";
import { TextWithIcon } from "../molecules/TextWithIcon"
import { Line, Dot } from "../atoms/separate/Separate";
import {ButtonDropdown} from "../molecules/ButtonDropdown"
import {
  DragAbleIcon,
  ActionIcon,
  VideoIcon,
  OnsiteIcon
} from "../atoms/icon"
import {  toast } from 'react-toastify';
import { useDeleteLessonMutation } from "../../redux/api/courseApi";

export const CourseItem = ({ 
  id,
  title,
  createdAt,
  isPreview,
  isRequired,
  lessonType,
  index, 
  itemMove, 
  parentId 
}) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'CARD',
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
      itemMove(dragIndex, hoverIndex, parentId);
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const [hidden, setHidden] = useState(true)
  const toggleHidden = ()=>{
    setHidden(current => !current);
  }
  const handleDownloadAble = ()=> toast("Downloaded!")
  const [deleteLesson, ] =  useDeleteLessonMutation();
  const handleDelete = ()=> deleteLesson({id}).then(resp=>{toggleHidden();toast("Deleted!");})

  return(
    <>
    <Container
      ref={ref}
      data-handler-id={handlerId}
    >
      <LeftSide>
        <DragAbleIcon />
        {
          lessonType==='video'?<VideoIcon />:<OnsiteIcon />
        }
        <Text>{title}</Text>
        {
          isRequired&&(
            <>
              <Line/>
              <Text primary>Required</Text>
            </>
          )
        }
        {
          isPreview&&(
            <>
              <Dot />
              <Text muted>Previewable</Text>
            </>
          )
        }

      </LeftSide>
      <RightSide>
        <TextWithIcon icon='time'>{moment(createdAt).format("DD MMMM YYYY, HH:mm")}</TextWithIcon>
        <Dot />
        <TextWithIcon icon='time'>6:30 Min</TextWithIcon>
        <Dot />
        <TextWithIcon icon='download' clickable onClick={()=>handleDownloadAble()}>Downloadable</TextWithIcon>
        <WrapAction>
          <a href="#" onClick={(e) => {e.preventDefault();toggleHidden();}}>
            <ActionIcon />
          </a>
          <ButtonDropdown hidden={hidden} setHidden={toggleHidden} actionButton={handleDelete} />
        </WrapAction>
      </RightSide>
    </Container>
    </>
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
  padding-left:25px;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
`;

const WrapAction = styled.div`
  margin-left:10px;
`