import React from "react";
import "../stylesheet/clear.css";

export const Clear = (props) => {
  return (
    <div className='boton-clear' onClick={props.manejarClear}>
      {props.children}
    </div>
  );
};
