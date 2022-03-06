import React from "react";
import "./styles_components/Button.scss";
import classNames from "classnames";

export default function Button(props) {
  // <Button danger={true}>Cancel</Button>
  // <Button danger>Cancel</Button> danger=true is prop
  // css className: button button--confirm
  // let buttonClass = "button";
  // if (props.confirm) buttonClass += " button--confirm";
  // if (props.danger) buttonClass += " button--danger";
  
  const buttonClass = classNames("button",
    {
      "button--confirm": props.confirm,
      "button--danger": props.danger
    }
  );

   return (
      <button 
        className={buttonClass}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
   );
}
