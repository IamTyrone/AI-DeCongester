import React, { useState } from "react";

type Props = {
  setAnswers: any;
};

export default function Answers({ setAnswers }: Props) {
  return (
    <>
      <div className="row">
        <div className="col-sm-10 col-sm-offset-2">
          <div className="col-sm-10">
            <div className="form-group">
              <label>Currenct Location</label>
              <select className="form-control">
                <option>- Select Current Location -</option>
                <option>NKULUMANE 12</option>
                <option>EZIPHALENI</option>
              </select>
            </div>
          </div>

          <div className="col-sm-2"></div>
          <div className="col-sm-2"></div>
          <div className="col-sm-2"></div>
        </div>
      </div>
      <br />
      <br />

      <div className="row">
        <div className="col-sm-10 col-sm-offset-2">
          <div className="col-sm-10">
            <div className="form-group">
              <label>Destination </label>
              <select className="form-control">
                <option>- Select Destination -</option>
                <option>NUST</option>
                <option>CBD</option>
              </select>
            </div>
          </div>

          <div className="col-sm-2"></div>
          <div className="col-sm-2"></div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </>
  );
}
