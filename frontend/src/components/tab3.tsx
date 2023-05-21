import { Spin } from "antd";
import React from "react";

type Props = {
  loading: boolean;
  payload: any;
};

export default function Tab3({ payload, loading }: Props) {
  return (
    <>
      <Spin spinning={loading}>
        <div className="row">
          <div className="col-sm-10 col-sm-offset-2">
            <div className="col-sm-10">
              <div className="form-group">
                <h5 className="text-info">
                  1. Your current Location is {payload?.location}
                </h5>
                <br />
                <h5 className="text-info">
                  2. Your selected destination is {payload?.destination}
                </h5>
                <br />
                <h5 className="text-info">
                  3. Your departure time is {payload?.departure_time} on{" "}
                  {payload?.date}
                </h5>
                <br />
                <br />
                <h5 className="text-danger">
                  Please Make Sure The Information Provided Is Accurate Before
                  Submitting To Our AI
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Spin>
      <br />
      <br />

      {/* <br />
      <br />
      <br /> */}
    </>
  );
}
