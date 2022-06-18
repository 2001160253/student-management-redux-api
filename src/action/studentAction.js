import axios from "axios";

export const getStudent = () => {
  return async (dispatch, getState) => {
    try {
      const { searchValue } = getState().student;
      console.log(getState().student.searchValue);
      const res = await axios.get(
        "https://62abd0e7bd0e5d29af15943d.mockapi.io/Student",
        {
          params: {
            name: searchValue,
          },
        }
      );
      dispatch({ type: "GET_DATA", students: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteStudent = (id) => {
  return async (dispatch, getState) => {
    try {
      await axios.delete(
        `https://62abd0e7bd0e5d29af15943d.mockapi.io/Student/${id}`
      );
      dispatch(getStudent());
    } catch (error) {
      console.log(error);
    }
  };
};

export const createStudent = (student) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "https://62abd0e7bd0e5d29af15943d.mockapi.io/Student",
        student
      );

      dispatch(getStudent());
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateStudent = (id, student) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `https://62abd0e7bd0e5d29af15943d.mockapi.io/Student/${id}`,
        student
      );

      dispatch(getStudent());
    } catch (error) {
      console.log(error);
    }
  };
};

export const SearchStudentByName = (value) => {
  return { type: "SEARCH_STUDENT", value };
};
