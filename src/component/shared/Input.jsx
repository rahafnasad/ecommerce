import React from "react";

export default function Input({
  type = "text",
  id,
  name,
  title,
  value,
  onChange,
  errors,
  onBlur,
  touched,
  style,
}) {
  return (
    <>
      <div className=" mb-3 row mx-5">
        <label htmlFor={id} className="form-label col-md-12 mt-2">
          {title}
        </label>
        <input
          onBlur={onBlur}
          type={type}
          name={name}
          className={`form-control input-reg ${style} `}
          id={id}
          value={value}
          onChange={onChange}
        />
        {touched[name] && errors[name] && (
          <p className=" text text-danger mb-0 text-end">{errors[name]}</p>
        )}
      </div>
    </>
  );
}
