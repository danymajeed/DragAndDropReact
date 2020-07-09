import React, { Component } from "react";
import InitialData from "./initialData";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./column";

class DragDrop extends Component {
  state = InitialData;

  onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (
      destination === null ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;

    const sourceColumn = this.state.columns[source.droppableId];
    const destColumn = this.state.columns[destination.droppableId];

    const newSourceUsers = Array.from(sourceColumn.userList);
    newSourceUsers.splice(source.index, 1);
    let newState = null;

    if (sourceColumn === destColumn) {
      newSourceUsers.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        userList: newSourceUsers,
      };
      newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
    } else {
      const newDestUsers = Array.from(destColumn.userList);
      newDestUsers.splice(destination.index, 0, draggableId);
      const newSourceColumn = {
        ...sourceColumn,
        userList: newSourceUsers,
      };
      const newDestColumn = {
        ...destColumn,
        userList: newDestUsers,
      };
      newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newSourceColumn.id]: newSourceColumn,
          [newDestColumn.id]: newDestColumn,
        },
      };
    }
    this.setState(newState);
  };

  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="d-flex flex-column flex-lg-row ">
          <DragDropContext onDragEnd={this.onDragEnd}>
            {this.state.columnOrder.map((columnId) => {
              const column = this.state.columns[columnId];
              const users = column.userList.map(
                (userId) => this.state.users[userId]
              );
              return (
                <Column key={column.id} column={column} users={users}></Column>
              );
            })}
          </DragDropContext>
        </div>
      </div>
    );
  }
}

export default DragDrop;
