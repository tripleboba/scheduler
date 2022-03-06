import React, {useState} from "react";

import "./styles_components/Application.scss";
import DayList from "components/DayList";

const days = [
  {id: 1, date: "Monday", spots: 2},
  {id: 2, date: "Tuesday", spots: 5},
  {id: 3, date: "Wednesday", spots: 0},
];

export default function Application(props) {
  const [day, setDay] = useState("Monday");

  return (
    <main className="layout">
      
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={days}
            day={day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>

      <section className="schedule">
      </section>
    </main>
  );
}
