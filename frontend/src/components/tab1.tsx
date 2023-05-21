import React from "react";

type Props = {
  setPayload: any;
  payload: any;
};

export default function Tab1({ setPayload, payload }: Props) {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-2">
            <div className="col-sm-10">
              <div className="form-group">
                <label>Currenct Location</label>
                <select
                  className="form-control"
                  onChange={(e) => {
                    setPayload({ ...payload, location: e.target.value });
                  }}
                >
                  <option>- Select Current Location -</option>
                  <option>CITY HALL</option>
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
                <select
                  className="form-control"
                  onChange={(e) => {
                    setPayload({ ...payload, destination: e.target.value });
                  }}
                >
                  <option>- Select Destination -</option>
                  <option>NUST</option>
                </select>
              </div>
            </div>

            <div className="col-sm-2"></div>
            <div className="col-sm-2"></div>
            <div className="col-sm-2"></div>
          </div>
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
