import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter Name..."
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter Email..."
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                className="form-control"
                type="text"
                name="phone"
                placeholder="Enter Phone..."
                value={phone}
                onChange={this.onChange}
              />
            </div>
            <input
              className="btn btn-light btn-block"
              type="submit"
              value="ADD CONTACT"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
