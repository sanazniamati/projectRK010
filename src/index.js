import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Line } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Line
          points={[23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93]}
          fill={"#00D2FF"}
          stroke={"black"}
          strokeWidth={5}
          closed
          tension={0.3}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
