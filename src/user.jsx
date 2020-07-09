import React from "react";
import { Draggable } from "react-beautiful-dnd";

import styles from "./styles.module.css";

const User = ({ user, index }) => {
  return (
    <Draggable draggableId={user.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            className={
              "border border-dark rounded p-3 mb-3 " +
              (snapshot.isDragging ? styles.blueColor : styles.floralColor)
            }
          >
            <h5>{user.name}</h5>
          </div>
        );
      }}
    </Draggable>
  );
};

export default User;
