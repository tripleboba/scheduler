/**
 * Track the state of 2 elements
 *  student:String - text input field
 *  selected interviewer - ID as a number
 * Having 2 modes:
 *  creating a new appointment
 *  editing an existing appointment
 * -> need to pass correct props for each of the modes
 * 
 * Needed components
 *  <InterviewerListItem> to display interviewers' list
 *  <input> element to get student's name
 *  onSave:Func - save button is clicked -> pass std name and inte id as an arg
 *  setStudent:Func
 *  setInterviewer:Func
 * 
 * Props:
 *  student:String
 *  interviewers:Array
 *  interviewer:Number
 *  onSave
 *  onCancel
 */

import React, {useState} from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  /**
   * Default values of stu and inter may come from props
   * or set new in the Form
   * appointment is created for the 1st time > value is "" or null
   * but if pass as props > choose props as default
   * if props true > take props || if props undefined > "" 
   */
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const formInputHandler = e => {setStudent(e.target.value)};

  return(
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            name="name" type="text"
            placeholder="Enter Student Name"
            className="appointment__create-input text--semi-bold"
            /*
              This must be a controlled component your code goes here
            */
           value={student}
           onChange={formInputHandler}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onCancel}>Cancel</Button>
          <Button confirm onClick={props.onConfirm}>Save</Button>
        </section>
      </section>
    </main>
  );
}