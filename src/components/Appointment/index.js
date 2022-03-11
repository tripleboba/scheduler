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
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";

export default function Appointment(props) {

  const {interview, interviewers}=props;
  const {mode, transition, back} = useVisualMode (interview ? SHOW : EMPTY);
  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    // making transition from saving to show
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW));
  }
  function deleteAppointment(){
    transition(DELETE);
    props.cancelInterview(props.id)
     .then(() =>(transition(EMPTY)));
  }

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)}/> }
      {mode === SHOW &&
        <Show
          student={interview.student}
          interviewer={interview.interviewer.name}
          onDelete={() => transition(CONFIRM)}
        />
      }
      {mode === CREATE &&
        <Form
          interviewers={interviewers}
          onCancel={back}
          onSave={save}
        />
      }

      {mode === SAVING && <Status message={"Saving"} />}
      {mode === DELETE && <Status message={"Deleting"}/>}
      {mode === CONFIRM && 
        <Confirm
          onConfirm={deleteAppointment}
          onCancel={back}
          message={"Delete the appointment ?"}
        />
      }
    </article>
  );
}
