import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const PHInput = ({ type, name, label }) => {
 
  return (
    <div style={{marginBottom:'10px'}}>
      {label ?? label}
      <Controller
        name={name}
        render={({ field }) => (
          <Input {...field} type={type} id={name}  />
        )}
      />
    </div>
  );
};

export default PHInput;
