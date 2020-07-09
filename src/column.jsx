import React from "react";
import { Droppable } from "react-beautiful-dnd";
import User from "./user";

import styles from "./styles.module.css";

const Column = ({ column, users }) => {
  return (
    <div
      className=" d-flex flex-column m-2 border border-dark rounded"
      style={{ minWidth: "450px" }}
    >
      <h2 className="  py-3 text-center">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => {
          return (
            <div
              style={{ transition: "0.2s" }}
              className={
                "flex-grow-1 pt-3 px-3 " +
                (snapshot.isDraggingOver ? styles.pinkColor : null)
              }
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {users.map((user, index) => (
                <User user={user} key={user.id} index={index}></User>
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Column;
