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
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

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
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true))
  }
  function deleteAppointment(){
    transition(DELETE, true);
    props.cancelInterview(props.id)
     .then(() =>(transition(EMPTY)))
     .catch(error => transition(ERROR_DELETE, true))
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
          onEdit={() => transition(EDIT)}
        />
      }
      {mode === CREATE &&
        <Form
          interviewers={interviewers}
          onCancel={back}
          onSave={save}
        />
      }
      {mode === EDIT && 
        <Form
          student={interview.student}
          interviewer={interview.interviewer.id}
          interviewers={interviewers}
          onCancel={back}
          onSave={save}
        />
      }
      {mode === DELETE && <Status message={"Deleting"}/>}
      {mode === CONFIRM && 
        <Confirm
          onConfirm={deleteAppointment}
          onCancel={back}
          message={"Delete the appointment ?"}
        />
      }
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === ERROR_SAVE && 
        <Error message={"Could not save appointment. Try again."}
        onClose={back}
        />
      }
      {mode === ERROR_DELETE && 
        <Error message={"Could not delete appointment. Try again."}
        onClose={back}
        />
      }

    </article>
  );
}
