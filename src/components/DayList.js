/**
 * 3 props
 *  day:String - currently selected day
 *  days:Array - list of day objs {id, name, spots}
 *  setDay:Func - accepts the name of day ('Monday',...)
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
      // selected={day.name === props.day}
      // setDay={props.setDay}
      selected={day.name === props.value}
      // setDay={() => props.onChange(day.name)}
      setDay={props.onChange}
    />
  ));

  return(
    <ul>{listOfDays}</ul>
  );
}