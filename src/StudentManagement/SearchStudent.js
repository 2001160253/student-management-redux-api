import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchStudentByName } from "../action/studentAction";
import { getStudent } from "../action/studentAction";

class SearchStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
    };
  }

  render() {
    return (
      <div className="d-flex justify-content-end mt-5">
        <input
          style={{
            marginRight: "20px",
          }}
          type="text"
          className="form-control"
          placeholder="Search student name"
          value={this.state.searchValue}
          onChange={(evt) => this.setState({ searchValue: evt.target.value })}
        />
        <button
          className="btn btn-success"
          onClick={() => this.props.changeSearch(this.state.searchValue)}
        >
          Search
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearch: (value) => dispatch(SearchStudentByName(value)),
  };
};

export default connect(null, mapDispatchToProps)(SearchStudent);
