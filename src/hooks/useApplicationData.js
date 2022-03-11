import React, {useState, useEffect} from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // Update the day state when selecting day in the sidebar
  const setDay = day => setState({ ...state, day});

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get('/api/interviewers')
    ]).then((all) => {
      const [days, appointments, interviewers] = all;
      setState(prev => ({
        ...prev,
        days: days.data,
        appointments: appointments.data,
        interviewers: interviewers.data
      }));
      //console.log(days); 
      //console.log(all);
    });
  },[]);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({
      ...state,
      appointments,
    });
    return axios.put(`/api/appointments/${id}`, {interview});
  }
  function cancelInterview(id) {
    return axios
    .delete(`/api/appointments/${id}`)
    .then(() => setState(prev => ({
      ...prev,
      id: { id, interview: null} 
      }))
    )
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}