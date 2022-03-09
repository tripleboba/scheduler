/**
 * Props:
 *  onAdd:func - callback() is trigger when click on the img(button)
 */

 import React from "react";
 import classNames from "classnames";
 
 export default function Empty(props) {
   const {onAdd}=props;
   
   const emptyClass = classNames("",
     {
     }
   );
 
   return (
    <main className="appointment__add">
      <img src="images/add.png" alt="Add"
        className="appointment__add-button"
        onClick={onAdd}
      />
    </main>
   );
 }
  