import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Dipanshu Chaubey",
        email: "dipanshuchaubey@gamil.com",
        phone: "888-888-8888"
      },
      {
        id: 2,
        name: "Chaubey",
        email: "dipanshu@gamil.com",
        phone: "999-999-9999"
      },
      {
        id: 3,
        name: "Dipanshu",
        email: "dipanshuddc@gamil.com",
        phone: "777-777-7777"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
