/**
 * Displaying depends on the state
 *  - name of the day (wheather it is selected or unselected)
 *  - interview spots left
 * 
 * 4 props
 *  name:String - name of the day
 *  spots:Number - number of spots left
 *  selected:Boolean - day is selected ?
 *  setDay:Func - accepts the name of day ('Monday',...)
 */
import React from "react";
import "./styles_components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {

  const dayClass = classNames("day-list__item", 
    {
      "day-list__item--selected": props.selected,
      "day-list__item--full": !props.spots
    }
  );
  const formatSpots = spots => {
    if (spots === 0) return "no spots remaining";
    else if (spots === 1) return "1 spot remaining";
    else return `${spots} spots remaining`;
  };

  return(
    <li
      onClick={() => {props.setDay(props.name)}}
      selected={props.selected}
      className={dayClass}
      
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
