import { useState } from "react";
import ContactsLogo from "../../assets/contacts.png";
import "../../styles/Contacts.css";
import { API_URL } from "../../config";

const Contacts = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    const contact = { name, email, message };
    fetch(`${API_URL}/contacts`, {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  return (
    <div className="contacts">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactsLogo})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us </h1>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name:</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit"> Send application </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
