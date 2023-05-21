/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Tab1 from "./tab1";
import { Button, message, Steps } from "antd";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import Tab4 from "./tab4";
import "antd/dist/antd.css";
import axios from "axios";

const { Step } = Steps;

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const [payload, setPayload]: any = useState({
    location: "",
    destiation: "",
    departure_time: "",
    date: "",
  });
  const [aiResponse, setAiResponse]: any = useState();

  const steps = [
    {
      title: "First",
      content: <Tab1 setPayload={setPayload} payload={payload} />,
    },
    {
      title: "Second",
      content: <Tab2 setPayload={setPayload} payload={payload} />,
    },
    {
      title: "Third",
      content: aiResponse ? (
        <Tab4 aiResponse={aiResponse} />
      ) : (
        <Tab3 loading={loading} payload={payload} />
      ),
    },
  ];

  const onSubmitHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAiResponse(
        "The best possible route would be via old Esigodini road and joining cecil avenue and eventually, NUST as it is the least congested route."
      );
    }, 3500);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div
      className="image-container set-full-height"
      style={{ backgroundImage: "url('assets/img/maps.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="wizard-container">
              <div
                className="card wizard-card"
                data-color="orange"
                id="wizardProfile"
              >
                <form action="" method="">
                  {/* <!--        You can switch " data-color="orange" "  with one of the next bright colors: "blue", "green", "orange", "red", "azure"          --> */}

                  <div className="wizard-header text-center">
                    <h3 className="wizard-title">Submit your </h3>
                    <p className="category">
                      This information will let us determine the most efficient
                      route.
                    </p>
                  </div>
                  <div
                    className="wizard-navigation"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <Steps current={current}>
                      {steps.map((item) => (
                        <Step key={item.title} title={item.title} />
                      ))}
                    </Steps>
                  </div>

                  <div className="tab-content">{steps[current].content}</div>
                  <div className="wizard-footer">
                    {current < steps.length - 2 && (
                      <Button type="primary" onClick={() => next()}>
                        Next
                      </Button>
                    )}
                    {current === steps.length - 2 && (
                      <Button type="primary" onClick={() => next()}>
                        Next
                      </Button>
                    )}
                    {current === steps.length - 1 && !aiResponse && (
                      <Button type="primary" onClick={onSubmitHandler}>
                        Submit
                      </Button>
                    )}
                    {current > 0 && !aiResponse && (
                      <Button
                        style={{ margin: "0 8px" }}
                        onClick={() => prev()}
                      >
                        Previous
                      </Button>
                    )}
                    <div className="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
