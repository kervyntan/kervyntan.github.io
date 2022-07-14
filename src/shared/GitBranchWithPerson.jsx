import React from "react";
import PersonSVG from "./PersonSVG";

const GitBranchWithPerson = (props) => {
  return (
    <div className="git__branch__container">
      <PersonSVG />
      <div className={`git__branch ${props.className}`}> </div>
    </div>
  );
};

export default GitBranchWithPerson;
