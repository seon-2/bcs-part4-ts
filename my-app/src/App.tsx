import React, { FC } from "react";
import Box from "./components/Box";
import Circle from "./components/Circle";

const App: FC = () => {
  return (
    <div>
      <Box color="pink" width={300} height={300} />
      <Box color="red" width={300} height={700} />
      <Box color="green" width={300} />
      <Circle color="blue" width={300} height={300} radius={999} />
    </div>
  );
};

export default App;
