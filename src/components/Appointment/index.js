/**
 * Play a role as <Appointment> but with index name
 * Handle create, edit, and delete an appointment in this component
 * Display based on task user is triggering
 * Empty, Show, Form, Confirm, Statur, Error: <Appointment> children
 */

import React from "react";
// include style for all children components
// -> no need to import stylesheet in children component files too
import "../styles_components/Appointment.scss";

export default function Appointment(props) {
  const {time}=props;
  
  return (
    <article className="appointment">
      {time}
    </article>
  );
}
