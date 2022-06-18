import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { createStudent } from "../action/studentAction";
import { UpdateStudent } from "../action/studentAction";
import isEmpty from "validator/lib/isEmpty";

class StudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        masv: "",
        hoten: "",
        sdt: "",
        email: "",
        loi: "",
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState((state) => {
      return {
        values: {
          ...state.values,
          [name]: value,
        },
      };
    });
  };

  validateAll = () => {
    const msg = {};

    if (isEmpty(this.state.values.masv)) {
      this.state.values.masv = "Please input your Email";
    }

    // if (isEmpty(password)) {
    //   msg.password = "Please input your Password";
    // }

    this.setState({ loi: msg });
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  handleSubmit = (e) => {
    const isValid = this.validateAll();
    if (!isValid) return;

    e.preventDefault();

    const { id, ...student } = this.state.values;
    if (id) {
      this.props.UpdateStudent(id, student);
    } else {
      this.props.createStudent(this.state.values);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedStudent !== this.props.selectedStudent) {
      this.setState({ values: { ...this.props.selectedStudent } });
    }
  }

  render() {
    const { values } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Ma sinh vien
              </label>
              <input
                type="text"
                id="masv"
                className="form-control"
                name="masv"
                value={values.masv}
                onChange={this.handleChange}
              />

              <span id="spanMasv">{this.state.loi}</span>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                id="hoten"
                className="form-control"
                name="hoten"
                value={values.hoten}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                SDT
              </label>
              <input
                type="text"
                id="sdt"
                className="form-control"
                name="sdt"
                value={values.sdt}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                name="email"
                value={values.email}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button className="btn btn-success">Them sinh vien</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedStudent: state.student.selectedItem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createStudent: (data) => {
      const action = { type: "CREATE_STUDENT", data };
      dispatch(action);
    },
    createStudent: (student) => {
      dispatch(createStudent(student));
    },
    UpdateStudent: (id, data) => {
      dispatch(UpdateStudent(id, data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
