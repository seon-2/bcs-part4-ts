import React, { FC } from "react";
import Box, { Color } from "./components/Box";
import Circle from "./components/Circle";

const App: FC = () => {
  return (
    <div>
      <Box color={Color.Pink} width={300} height={300} />
      <Box color={Color.Red} width={300} height={700} />
      <Box color={Color.Green} width={300} />
      <Circle color={Color.Blue} width={300} height={300} radius={999} />
    </div>
  );
};

export default App;
