const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    {
      id: 1,
      name: "lean react",
      completed: false,
      priority: "Medium",
    },
    {
      id: 1,
      name: "lean nodejs",
      completed: false,
      priority: "Low",
    },
    {
      id: 1,
      name: "lean react",
      completed: false,
      priority: "Heigh",
    },
  ],
};
const rootReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};
export default rootReducer;
