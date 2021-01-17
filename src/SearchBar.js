import React from "react";
import { TextField } from "@material-ui/core";

export default function SearchBar(props) {
  const { name, id, placeHolder, onChange, value, onKeyDown } = props;
  return (
    <div>
      <TextField
        name={name}
        id={id}
        type="text"
        placeholder={placeHolder}
        fullWidth
        onChange={onChange}
        autoComplete="off"
        value={value}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
