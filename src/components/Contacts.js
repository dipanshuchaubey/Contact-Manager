import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
    ]
  };

  onDelete = id => {
    const { contacts } = this.state;

    const newContact = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContact
    });
  };

  render() {
    const { contacts } = this.state;
    return contacts.map(contact => (
      <Contact
        contact={contact}
        key={contact.id}
        deleteClickHandler={this.onDelete.bind(this, contact.id)}
      />
    ));
  }
}

export default Contacts;
