import React, { Component } from "react";
import { connect } from "react-redux";
import StudentItem from "./StudentItem";

class StudentList extends Component {
  render() {
    return (
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Ma sinh vien</th>
            <th>Ho ten</th>
            <th>SDT</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item) => {
            return <StudentItem key={item.id} item={item} />;
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.student.students,
  };
};

export default connect(mapStateToProps)(StudentList);
