import { FC, useState } from "react";

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
  const [newWidth, setNewWidth] = useState<number>(width);

  const onClickBox = () => {
    setNewWidth(newWidth + 100);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        width: newWidth,
        height: height ? height : newWidth,
        margin: 40,
        transition: "1s",
      }}
      onClick={onClickBox}
    ></div>
  );
};

export default Box;
