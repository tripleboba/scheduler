/**
 * 5 props
 *  id:number - id of the interviewer
 *  name:string - name of the interviewer
 *  avatar:url - img's source
 *  selected:boolean - for display name and style if selected
 *  setInterviewer:func - run when <InterviewerListItem> is clicked
 *    receives id as arg and sets selected interviewer
 */
import React from "react";
import "./styles_components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {

  const {id, name, avatar, selected, setInterviewer} = props;

  const interviewerClass = classNames("interviewers__item", 
    {
      "interviewers__item--selected": selected
    }
  );

  return(
    <li
      selected={selected}
      onClick={() => setInterviewer(id)}
      className={interviewerClass}
    >
      <img src={avatar} alt={name}
        className="interviewers__item-image"
      />{selected && name}
    </li>
  );
}
