import { FC } from "react";

export interface BoxProps {
  color: string;
  width: number;
  height: number;
}

const Box: FC<BoxProps> = ({ color, width, height }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        margin: 40,
      }}
    ></div>
  );
};

export default Box;
