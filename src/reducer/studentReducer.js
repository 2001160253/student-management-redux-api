const initial = {
  students: [],
  selectedItem: null,
};
const studentReducer = (state = initial, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, students: action.students };
    }
    // case "CREATE_STUDENT": {
    //   const students = [...state.students, action.data];
    //   return { ...state, students };
    // }
    case "GET_DETAIL": {
      return { ...state, selectedItem: action.data };
    }
    case "SEARCH_STUDENT": {
      return { ...state, searchValue: action.value };
    }
    // case "UPDATE_STUDENT": {
    //   const students = state.students.map((item) => {
    //     if (item.id === action.id) {
    //       return { ...action.data, id: action.id };
    //     }
    //   });
    //   return { ...state, students: students };
    // }
    default:
      return state;
  }
};

export default studentReducer;
