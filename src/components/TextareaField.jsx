import React from "react";

const TextareaField = ({ name, id, placeholder, className, icon }) => {
  return (
    <div className="form-group textareaInput">
      <div className="inputIconWrapper">
        {icon}
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          className={`form-control ${className}`}
        ></textarea>
      </div>
    </div>
  );
};

export default TextareaField;