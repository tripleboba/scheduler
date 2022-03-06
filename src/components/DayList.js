/**
 * 3 props
 *  day:String - currently selected day
 *  days:Array - list of day objs {id, date, spots}
 *  setDay:Func - accepts the date of day ('Monday',...)
 * 
 * container for all DayListItem components
 * responsible for rendering a list of DayListItem components
 */
import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  
  const listOfDays = props.days.map((day) => (
    <DayListItem
      key={day.id}
      {...day}
      selected={day.date === props.day}
      setDay={props.setDay}
    />
  ));

  return(
    <ul>{listOfDays}</ul>
  );
}