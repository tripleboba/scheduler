import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem";
import DayList from "components/DayList";

const handleClick = action("button-clicked");

/** BUTTONS */
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

/** DAY LIST ITEM */
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

/** DAYS LIST */
const days = [
  {id: 1, date: "Monday", spots: 2},
  {id: 2, date: "Tuesday", spots: 5},
  {id: 3, date: "Wednesday", spots: 0},
];

storiesOf("DayList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Monday", () => <DayList day={"Monday"} days={days} setDay={setDay} />)
  .add("Tuesday", () => <DayList day={"Tuesday"} days={days} setDay={setDay} />)
  .add("Wednesday", () => <DayList day={"Wednesday"} days={days} setDay={setDay} />)
    