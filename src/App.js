import React from 'react';
import './App.css';
import FeedbackModal from './FeedbackModal';
import Example from './ImageCrop';

function App() {
  return (
    <div className="App">
      <img src="./sampleui.jpg" />
      <button color="secondary" style={{ top: "5px", right: "5px" }} id="submit-feedback-btn">Give Feedback</button>
      <h4>Feedback Modal</h4>
      <FeedbackModal />
      {/* <Example /> */}
    </div>
  );
}

export default App;
