import React from "react";
import GitCurve from "./GitCurve";
import GitCurveReversedSVG from "./GitCurveReversedSVG";

const GitCurveWithCircle = () => {
  return (
    <div className="git__branch__container flex">
      <div className="git__branch two-hundred"> </div>
      <div className="git__branch__content">
        <div className="git__curve">
          <GitCurve />
          <div className="git__branch__circle flex">
            <div className="git__branch__circle__left">
              <div className="circle"></div>
              <div className="git__branch__circle__straight hundred"></div>
              <GitCurveReversedSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitCurveWithCircle;
