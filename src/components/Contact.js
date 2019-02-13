import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showInfo: false
  };

  onClickShow = e => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  onClickDelete = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={this.onClickShow}
            className="fa fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fa fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onClickDelete}
          />
        </h4>
        {this.state.showInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
