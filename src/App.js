import React from "react";
import ServicesForm from "./ServicesForm";
import "./App.css"; // Import your external CSS file for additional styling if needed

function App() {
  return (
    <div className="App">
      <div className="services-container">
        <h1 className="App-title">Our Services</h1>
        <ServicesForm />
        {/* Display services here */}
      </div>
    </div>
  );
}

export default App;
