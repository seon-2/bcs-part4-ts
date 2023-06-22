import { FC } from "react";

const Box: FC = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: 400,
        height: 400,
        margin: 40,
      }}
    ></div>
  );
};

export default Box;
