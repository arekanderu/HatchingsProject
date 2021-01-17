import React from "react";

export default function Tags(props) {
  return (
    <p className="tags">
      {props.test && props.test.map((tag) => <span>{tag}</span>)}
    </p>
  );
}
