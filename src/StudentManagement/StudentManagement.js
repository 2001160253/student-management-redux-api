import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";
import { getStudent } from "../action/studentAction";
import SearchStudent from "./SearchStudent";

class StudentManagement extends Component {
  componentDidMount() {
    this.props.getData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.props.getData();
    }
  }
  render() {
    return (
      <div className="container">
        <h2 style={{ margin: "20px " }}>Quản lý sinh viên</h2>
        <StudentForm />
        <SearchStudent></SearchStudent>
        <StudentList />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    searchValue: state.student.searchValue,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => {
      dispatch(getStudent());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentManagement);
