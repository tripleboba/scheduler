import React, {Fragment} from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem";
import DayList from "components/DayList";
import InterviewerListItem from "components/InterviewerListItem";
import InterviewerList from "components/InterviewerList";
import Appointment from "components/Appointment/index.js";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";

/** ---------- BUTTONS ---------- */
const handleClick = action("button-clicked");

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  
  .add("Clickable", () => (
    <Button onClick={handleClick}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={handleClick}>Disabled</Button>
  ));

/** ---------- DAY LIST ITEM ---------- */
let interviewSpots = 5;
const setDay = action("setDay");

storiesOf("DayListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => <DayListItem date="Monday" spots={interviewSpots} />)
  .add("Selected", () => <DayListItem selected date="Monday" spots={interviewSpots} />)
  .add("Full", () => <DayListItem date="Monday" spots={0} />)
  .add("Clickable", () => (
    <DayListItem setDay={setDay} date="Tuesday" spots={1} />
  ));

/** ---------- DAYS LIST ---------- */
const days = [
  {id: 1, date: "Monday", spots: 2},
  {id: 2, date: "Tuesday", spots: 5},
  {id: 3, date: "Wednesday", spots: 0},
];

storiesOf("DayList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  // .add("Monday", () => <DayList day={"Monday"} days={days} setDay={setDay} />)
  .add("Monday", () => <DayList day={"Monday"} days={days} onChange={setDay} />)
  .add("Tuesday", () => <DayList day={"Tuesday"} days={days} onChange={setDay} />)
  .add("Wednesday", () => <DayList day={"Wednesday"} days={days} onChange={setDay} />)

/** ---------- INTERVIEWER LIST ITEM ---------- */
const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};
const setInterviewer = action("setInterviewer");
storiesOf("InterviewerListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => (
    <InterviewerListItem 
      id={interviewer.id} name={interviewer.name} avatar={interviewer.avatar}
    />
  ))
  .add("Selected", () => (
    <InterviewerListItem 
      selected
      id={interviewer.id} name={interviewer.name} avatar={interviewer.avatar}
    />
  ))
  .add("Clickable", () => (
      <InterviewerListItem 
        // setInterviewer={setInterviewer}
        // id={interviewer.id} 
        setInterviewer={() => setInterviewer(interviewer.id)}
        name={interviewer.name} avatar={interviewer.avatar}
      />
  ));

/** ---------- INTERVIEWERS LIST ---------- */
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];
storiesOf("InterviewerList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Initial", () => <InterviewerList interviewers={interviewers} />)
  .add("Selected", () => (
    <InterviewerList
      interviewer={3}
      interviewers={interviewers}
    />
  ))
  .add("Clickable", () =>(
    <InterviewerList
      // setInterviewer={setInterviewer}
      onChange={setInterviewer}
      interviewers={interviewers} 
    />
  ))

/** ---------- APPOINMENT ---------- */
const time = "4pm";
const student = "Lydia Miller-Jones";

const onAdd = action("onAdd");
const onEdit = action("onEdit"); 
const onDelete = action("onDelete");
const onConfirm = action("onConfirm");
const onCancel = action("onCancel");
const onSave = action("onSave");
const onClose = action("onClose");


storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => <Appointment  />)
  .add("Appointment with Time", () => <Appointment time={time} />)
  .add("Header", () => <Header  time={time}/>)
  .add("Empty", () => <Empty onAdd={onAdd} />)
  .add("Show", () => (
    <Show
      student={student}
      interviewer={interviewer.name}
      onEdit={onEdit}
      onDelete={onDelete}
    />))
  .add("Confirm", () => (
    <Confirm
      message={"Delete the appointment ?"}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />))
  .add("Status", () => <Status  message={"Deleting"}/>)
  .add("Error", () => (
    <Error
      message={"Could not delete appointment."}
      onClose={onClose}
    />))
  .add("Create", () => (
    <Form
      interviewers={interviewers}
      onCancel={onCancel}
      onSave={onSave}
    />))
  .add("Edit", () => (
    <Form
      student={student}
      interviewer={3}
      interviewers={interviewers}
      onCancel={onCancel}
      onSave={onSave}
    />))
  .add("Appointment Empty", () => (
    <Fragment>
      <Appointment id={1} time="4pm" />
      {/* css stylesheet set the last element will have no add interview button 
          to indicate close hour for booking */}
      <Appointment time="5pm" />

    </Fragment>
  ))
  .add("Appointment Booked", () => (
    <Fragment>
      <Appointment
        id={1} time="4pm"
        interview={{ student: "Lydia Miller-Jones", interviewer }}
      />
      <Appointment time="5pm" />
    </Fragment>
  ))
