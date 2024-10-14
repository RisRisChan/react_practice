import "./Child.css";
//import React from "react";
import {Fragment} from "react";

const Child = () => {
  return (
    <Fragment key="">
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>フラグメント</h3>
      <p>こんにちは</p>
    </Fragment>
  );
};

export default Child;
