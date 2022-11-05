import { useState, useCallback } from "react";
import { CourseItem } from "./CourseItem";
import { CourseSession } from "./CourseSession";
import update from "immutability-helper";
import { useUpdateLessonMutation, useUpdateSectionMutation } from "../../redux/api/courseApi";
import { toast } from "react-toastify";

export const Course = ({cards, setCards}) => {
  const [lessonUpdate, ] = useUpdateLessonMutation()
  const [sectionUpdate, ] = useUpdateSectionMutation();
    const sessionMove = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        const card = update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        });
        setCards(card);
        // update sequense to db
        // sectionUpdate({payload: card}).then(resp=>toast("OKE"));
      },
      [cards]
    );

    const itemMove = useCallback(
      (dragIndex, hoverIndex, parentId) => {
        const card = JSON.parse(JSON.stringify(cards));
        const dragCard = card[parentId].children[dragIndex];
        card[parentId].children = update(card[parentId].children, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard]
            ]
          })
          
          setCards([...card]);
          // update sequense to db
          // lessonUpdate({payload: card[parentId].children}).then(resp=>toast("OKE"));
      },
      [cards]
    );

    const renderCard = (data) => {
      return (
        <>
          {data.map((card, i) => {
            return (
              <>
              <CourseSession
                key={i}
                index={i}
                id={card.sectionId}
                text={card.title}
                sessionMove={sessionMove}
              />
                {card.children && renderItem(card.children, i)}
              </>
            );
          })}
        </>
      );
    };

    const renderItem = (data, parentId) => {
      return (
        <>
          {data.map((card, i) => {
            return (
              <CourseItem
                key={i}
                index={i}
                parentId={parentId}
                id={card.lessonId}
                title={card.title}
                isPreview={card.isPreview}
                isRequired={card.isRequired}
                createdAt={card.createdAt}
                lessonType={card.lessonType}
                itemMove={itemMove}
              />
            );
          })}
        </>
      );
    };

    return renderCard(cards);
};
