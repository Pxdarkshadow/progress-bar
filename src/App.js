import { useState } from "react";
import ProgressBar from "./progressbar.js";

export default function App() {
  const [progress, setProgress] = useState(0);
  function updateProgress() {
    setProgress(prev => Math.min(prev + 10, 100));
  }
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <ProgressBar progress={progress} />
      <button
        onClick={updateProgress}
        style={{
          marginTop: "16px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "4px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Increase Progress
      </button>
    </div>
  );
}
