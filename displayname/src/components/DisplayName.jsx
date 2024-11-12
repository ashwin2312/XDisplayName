import React, { useState } from "react";

const DisplayName = () => {
  const [fullname, setFullname] = useState({ firstname: "", lastname: "" });
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
        <input
          type="text"
          style={{ height: "20px" }}
          value={fullname.firstname}
          onChange={(e) =>
            setFullname({ ...fullname, firstname: e.target.value })
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Enter LastName:</h3>
        <input
          type="text"
          style={{ height: "20px" }}
          value={fullname.lastname}
          onChange={(e) =>
            setFullname({ ...fullname, lastname: e.target.value })
          }
        />
      </div>
      <h3>
        {fullname.firstname} {fullname.lastname}
      </h3>
    </div>
  );
};

export default DisplayName;
