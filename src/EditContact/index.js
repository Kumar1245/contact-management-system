import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const EditContact = ({ contact, onUpdate }) => {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);

  return (
    <div>
      <h2>Edit Contact</h2>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button type="submit">Update Contact</button>
      </form> */}
    </div>
  );
};

export default EditContact;
