/**
 * Informs the user when an error occurs
 * Props:
 *  message:String
 *  onClose:Func - handle user click the Close button
 */
import React from "react";

export default function Error(props) {
  const {message, onClose}=props;
  return(
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{message}</h3>
      </section>
      <img src="images/close.png" alt="Close"
        className="appointment__error-close"
        onClick={onClose}
      />
    </main>
  );
}