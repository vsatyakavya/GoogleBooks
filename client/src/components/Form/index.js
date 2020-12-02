import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}



export function Btn(props) {
  return (
    <button {...props} style={{marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
