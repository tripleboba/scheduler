/**
 * Displaying depends on the state
 *  - date of the day (wheather it is selected or unselected)
 *  - interview spots left
 * 
 * 4 props
 *  date:String - name of the day
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
      onClick={() => props.setDay(props.date)}
      selected={props.selected}
      className={dayClass}
    >
      <h2 className="text--regular">{props.date}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
