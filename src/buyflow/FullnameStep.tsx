import React, { useState } from "react";

interface FullnameStepProps {
  cb: (field: string, value: string) => void;
}

const FullnameStep: React.FC<FullnameStepProps> = (props) => {
  const [name, setName] = useState({
    first: "",
    last: ""
  });
  return (
    <>
      <div>
        First name:{" "}
        <input
          type="text"
          name="first"
          onChange={({ target: { value } }) => {
            setName({ ...name, first: value });
          }}
          value={name.first}
        ></input>
      </div>
      <div>
        Last name:{" "}
        <input
          type="text"
          name="last"
          onChange={({ target: { value } }) => {
            setName({ ...name, last: value });
          }}
          value={name.last}
        ></input>
      </div>
      <button onClick={() => props.cb("name", `${name.first} ${name.last}`)}>
        Next
      </button>
    </>
  );
};

export default FullnameStep;
