const InitialData = {
  users: {
    user1: { id: "user1", name: "Daniyal Majeed" },
    user2: { id: "user2", name: "Ali Nawaz" },
    user3: { id: "user3", name: "Ahmad Butt" },
    user4: { id: "user4", name: "Amjad Ali" },
    user5: { id: "user5", name: "Asjad Wali" },
  },
  columns: {
    column1: {
      id: "column1",
      title: "Free Users",
      userList: ["user1", "user2", "user3", "user4", "user5"],
    },
    column2: {
      id: "column2",
      title: "Busy Users",
      userList: [],
    },
  },
  columnOrder: ["column1", "column2"],
};

export default InitialData;
