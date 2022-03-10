export function getAppointmentsForDay(state, day) {
 
  const selectedDay = state.days.find(dayObj => dayObj.name === day);

  // if (state.days.length === 0) return [];
  // if (selectedDay.length === 0) return [];
  if (!selectedDay) return [];
  return selectedDay.appointments.map(id => state.appointments[id]);
}

export function  getInterviewersForDay(state, day) {
  
  const selectedDay = state.days.find(dayObj => dayObj.name === day);

  // if (state.days.length === 0) return [];
  if (!selectedDay) return [];
  return selectedDay.interviewers.map(id => state.interviewers[id]);
}

export function getInterview(state, interview) {
  if (!interview) return null;
  // for (let interviewId in state.interviewers) {
  //   if (state.interviewers[interviewId].id === interview.interviewer) {
  //     return {
  //       "student": interview.student,
  //       "interviewer": state.interviewers[interviewId]
  //     }
  //   }
  // }
  return {
    student: interview.student,
    interviewer: {...state.interviewers[interview.interviewer]}
  };
}