import React from 'react';

import Label from "./Label"
import ErrorMessage from './ErrorMessage';

const Select = ({ className, label, id, options, error, ...props }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Label htmlFor={id} className="self-start font-bold">
        {label}
      </Label>

      <select  id={id} {...props}>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
      <ErrorMessage error={error} />
    </div>
  );
};

export default Select;