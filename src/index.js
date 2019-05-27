import React from 'react';
import { render } from "react-dom";
import { FeedbackModal } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <FeedbackModal />
  </div>
);

render(<App />, document.getElementById("feedbackId"))
