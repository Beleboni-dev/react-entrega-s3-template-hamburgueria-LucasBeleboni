import React from "react";

const Input = ({ label, type, id, placeholder, children, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
      {children}
    </>
  );
};

export default Input;
