import React from "react";
import Answers from "./answers";

type Props = {
  aiResponse: any;
};

export default function Tab4({ aiResponse }: Props) {
  return (
    <>
      <div className="row">
        <div className="col-sm-10 col-sm-offset-2">
          <div className="col-sm-10">
            <div className="form-group">
              <br />
              <h5 className="text-danger">{aiResponse}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
