import React from "react";
import Input from "./Input";
import Select from "./Select";

function FormControler({ controler, ...props }) {
  switch (controler) {
    case "input":
      return <Input {...props} />;

    case "select":
      return <Select {...props} />;

    default:
      break;
  }
}

export default FormControler;
