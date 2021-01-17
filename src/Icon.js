import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Icon(props) {
  const { onClick } = props;
  return (
    <div>
      {props.action ? (
        <AddIcon
          className="expand-btn"
          color="disabled"
          fontSize="large"
          onClick={onClick}
        />
      ) : (
        <RemoveIcon
          className="expand-btn"
          color="disabled"
          fontSize="large"
          onClick={onClick}
        />
      )}
    </div>
  );
}
