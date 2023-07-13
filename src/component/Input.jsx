import React from 'react';

import Label from "./Label"
import ErrorMessage from "./ErrorMessage"

function Input({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  gender,
  asset,
  ...props
}) {
    
  if (type === "radio") {
    return (
      <div className="flex flex-col ">
        <Label htmlFor={id} className="self-start font-bold">
          {label}
        </Label>
        <div className="flex gap-2">
          <input
            type={type}
            id={id}
            className={className}
            onChange={onChange}
            value={gender}
            {...props}
          />
          {gender}
        </div>
        <ErrorMessage error={error} />
      </div>
    );
  } else if (type === "checkbox") {
    return (
      <div className="flex flex-col ">
        <Label htmlFor={id} className="self-start font-bold">
          {label}
        </Label>
        <div className="flex gap-2">
          <input
            type={type}
            id={id}
            className={className}
            onChange={onChange}
            {...props}
          />
          {asset}
        </div>
        <ErrorMessage error={error} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col ">
        <Label htmlFor={id} className="self-start font-bold">
          {label}
        </Label>
        <input
          type={type}
          id={id}
          className={className}
          onChange={onChange}
          value={value}
          {...props}
        />
        <ErrorMessage error={error} />
      </div>
    );
  }
};


export default Input;