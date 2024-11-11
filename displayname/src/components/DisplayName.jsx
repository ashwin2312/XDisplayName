import React, { useState } from "react";

const DisplayName = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  //   const [fullname, setFullname] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Enter FirstName:</h3>
        <input type="text" style={{ height: "20px" }} value={firstname} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Enter LastName:</h3>
        <input type="text" style={{ height: "20px" }} value={lastname} />
      </div>
      <h3>
        {firstname} {lastname}
      </h3>
    </div>
  );
};

export default DisplayName;
