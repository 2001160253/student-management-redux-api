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
      },
      errors: {
        masv: "",
        hoten: "",
        sdt: "",
        email: "",
      },
    };
  }

  handleChange = (e) => {
    const { name, value, type, pattern } = e.target;

    let erorrMessage = "";

    //kiemt tra rong
    if (value.trim() === "") {
      erorrMessage = name + " khong duoc bo trong";
    }
    //kiem tra masv
    if (name === "masv") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        erorrMessage = "Mã sinh viên là ký tự số, tối đa 10 ký tự";
      }
    }
    //kiem tra so dien thoai
    if (name === "sdt") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        erorrMessage = "Số điện thoại tối đa 10 ký tự";
      }
    }
    //kiem tra email
    if (type === "email") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        erorrMessage = "Email không đúng định dạng";
      }
    }

    this.setState((state) => {
      return {
        values: {
          ...state.values,
          [name]: value,
        },
        errors: {
          ...state.errors,
          [name]: erorrMessage,
        },
      };
    });
  };

  handleSubmit = (e) => {
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
  renderButtonSubmit = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
      }
    }

    if (valid) {
      return (
        <button
          className="btn btn-success"
          style={{ width: "300px", margin: "auto", marginTop: "20px" }}
        >
          Them sinh vien
        </button>
      );
    } else {
      return (
        <button
          disabled
          className="btn btn-success"
          style={{ width: "300px", margin: "auto", marginTop: "20px" }}
        >
          Them sinh vien
        </button>
      );
    }
  };
  render() {
    const { values, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-sm-6" style={{ textAlign: "left" }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Ma sinh vien
              </label>
              <input
                id="masv"
                className="form-control"
                name="masv"
                value={values.masv}
                onChange={this.handleChange}
                pattern="^[0-9]{1,10}$"
              />

              <p className="text-danger">{errors.masv}</p>
            </div>

            <div className="mb-3" style={{ textAlign: "left" }}>
              <label htmlFor="description" className="form-label">
                Ho ten
              </label>
              <input
                type="text"
                id="hoten"
                className="form-control"
                name="hoten"
                value={values.hoten}
                onChange={this.handleChange}
              />
              <p className="text-danger">{errors.hoten}</p>
            </div>
          </div>

          <div className="col-sm-6" style={{ textAlign: "left" }}>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                SDT
              </label>
              <input
                pattern="(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b"
                type="number"
                id="sdt"
                className="form-control"
                name="sdt"
                value={values.sdt}
                onChange={this.handleChange}
              />
              <p className="text-danger">{errors.sdt}</p>
            </div>
            <div className="mb-3" style={{ textAlign: "left" }}>
              <label htmlFor="price" className="form-label">
                Email
              </label>
              <input
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                type="email"
                id="email"
                className="form-control"
                name="email"
                value={values.email}
                onChange={this.handleChange}
              />
              <p className="text-danger">{errors.email}</p>
            </div>
          </div>

          {this.renderButtonSubmit()}
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
