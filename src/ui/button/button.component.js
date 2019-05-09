import React from "react";
import './button.component.scss';

function Button(props) {
  const {
    className,
    type
  } = props;
  return (
    <button 
      className={`ui-button ${className}`} 
      name={name}
      type={type}
    />
  )
}

export {
  Button
}
