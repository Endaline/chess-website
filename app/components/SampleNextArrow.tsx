import React from "react";

const SampleNextArrow = (props: {
  className: any;
  style: any;
  onClick: any;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: {
  className: any;
  style: any;
  onClick: any;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

export { SampleNextArrow, SamplePrevArrow };
