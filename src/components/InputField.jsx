import React from "react";

const InputField = ({ type = "text", name, id, placeholder, className, icon }) => {
  return (
    <div className="form-group">
      <div className="inputIconWrapper">
        {icon}
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={`form-control ${className}`}
        />
      </div>
    </div>
  );
};

export default InputField;