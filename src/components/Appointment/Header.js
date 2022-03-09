/**
 * Accept props:
 *  time:String - time of the appoinment
 */

import React from "react";
import classNames from "classnames";

export default function Header(props) {
  const {time}=props;
  
  const headerClass = classNames("",
    {
    }
  );

  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">This is Header! @ {time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
}
 