import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { deleteStudent } from "../action/studentAction";

class StudentItem extends Component {
  render() {
    const { item, getDetail } = this.props;
    return (
      <tr>
        <td style={{ textAlign: "left", with: "25%" }}>{item.masv}</td>
        <td style={{ textAlign: "left", with: "25%" }}>{item.hoten}</td>
        <td style={{ textAlign: "left", with: "25%" }}>{item.sdt}</td>
        <td style={{ textAlign: "left", with: "25%" }}>{item.email}</td>
        <td>
          <button
            style={{
              marginRight: "10px",
            }}
            className="btn btn-success"
            onClick={() => {
              getDetail(item);
            }}
          >
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.deleteStudent(item.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: (data) => {
      const action = { type: "GET_DETAIL", data };
      dispatch(action);
    },
    deleteStudent: (id) => {
      dispatch(deleteStudent(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(StudentItem);
