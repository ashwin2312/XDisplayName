import React, { useState } from "react";
// import { use } from "react";

export default function DisplayName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [display, setDisplay] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setDisplay((prev) => !prev);
  };

  return (
    <div>
      <form action="" onSubmit={handleForm}>
        <div>
          First Name:{" "}
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setDisplay(false);
            }}
            required
          />
        </div>
        <div>
          Last Name:{" "}
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {display && (
        <p>
          Full Name: {firstName} {lastName}
        </p>
      )}
    </div>
  );
}
