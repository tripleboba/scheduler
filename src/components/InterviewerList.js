/**
 * 3 props
 *  interviewers:array - arr of obj interviewers{id, name, avatar}
 *  setInterviewer:func - func get id >>> passed down to <InterviewerListItem>
 *  interviewer:number - id of currently selected interviewer
 */
import React from "react";
import classNames from "classnames";
import "./styles_components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
 
export default function InterviewerList(props) {

  const listOfInterviewer = props.interviewers.map((interviewer) => (
    <InterviewerListItem
     key={interviewer.id}
     {...interviewer}
     selected={interviewer.id === props.interviewer}
     setInterviewer={props.setInterviewer}
    />
  ));

  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer:</h4>
      <ul className="interviewers__list">{listOfInterviewer}</ul>
    </section>
  );
 }