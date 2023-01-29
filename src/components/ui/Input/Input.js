import React from "react";

import "./Input.css";

const Input = ({ label, name, value, onChange,className}) => {
  return (
    <div className={className}>
      <div className="input-label">{label}</div>
      <input
        className="input-box"
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;