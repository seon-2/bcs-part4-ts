import { FC } from "react";

// enum으로 한 번 선언해 놓으면 오타 줄일 수 있음
export enum Color {
  Pink = "pink",
  Red = "red",
  Blue = "blue",
  Green = "green",
}

export interface BoxProps {
  color: Color;
  width: number;
  height?: number;
}

const Box: FC<BoxProps> = ({ color, width, height }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: width,
        height: height ? height : width,
        margin: 40,
      }}
    ></div>
  );
};

export default Box;
