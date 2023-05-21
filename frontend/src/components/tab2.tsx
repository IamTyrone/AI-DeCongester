import React from "react";

type Props = {
  setPayload: any;
  payload: any;
};

export default function Tab2({ setPayload, payload }: Props) {
  return (
    <>
      <div className="row">
        <div className="col-sm-10 col-sm-offset-2">
          <div className="col-sm-10">
            <div className="form-group">
              <label>Departure Time</label>
              <input
                type="time"
                className="form-control"
                onChange={(e) => {
                  setPayload({ ...payload, departure_time: e.target.value });
                }}
              />
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
              <label>Departure Date</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => {
                  setPayload({ ...payload, date: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="col-sm-2"></div>
          <div className="col-sm-2"></div>
          <div className="col-sm-2"></div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
    </>
  );
}
