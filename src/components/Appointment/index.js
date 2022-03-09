/**
 * Play a role as <Appointment> but with index name
 * Handle create, edit, and delete an appointment in this component
 * Display based on task user is triggering
 * Empty, Show, Form, Confirm, Statur, Error: <Appointment> children
 * 
 * Props:
 *  time:String
 *  interview:Obj - { student:String-name, interviewer:Obj }
 */

import React from "react";
// include style for all children components
// -> no need to import stylesheet in children component files too
import "../styles_components/Appointment.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  const {interview}=props;
  
  return (
    <article className="appointment">
      <Header time={props.time}></Header>
      {interview ? 
        <Show
          student={interview.student}
          interviewer={interview.interviewer.name}
        />
        :
        <Empty></Empty>
      }
    </article>
  );
}
