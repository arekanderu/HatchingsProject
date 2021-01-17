import React from "react";

export default function Tags(props) {
  return (
    <p className="tags">
      {props.array && props.array.map((tag) => <span>{tag}</span>)}
    </p>
  );
}
