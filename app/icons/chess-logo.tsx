import React from "react";

interface IconSvgProps {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
  opacity?: number | string;
  style?: React.CSSProperties; // Use React.CSSProperties for style
}

export default function ChessLogo({
  width,
  height,
  size = 22,
  className,
  style,
}: IconSvgProps) {
  const svgStyle: React.CSSProperties = {
    ...style,
    width: size || width,
    height: size || height,
  };

  return (
    <svg
      style={svgStyle}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-5.4 -5.4 64.80 64.80"
      xmlSpace="preserve"
      fill="#000000"
      stroke="#000000"
      strokeWidth="0.00054">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <rect
            x="0"
            y="0"
            style={{ fill: "#ECF0F1" }}
            width="18"
            height="18"></rect>
          <rect
            x="36"
            y="0"
            style={{ fill: "#ECF0F1" }}
            width="18"
            height="18"></rect>
          <rect
            x="0"
            y="18"
            style={{ fill: "#2C2F38" }}
            width="18"
            height="18"></rect>
          <rect
            x="18"
            y="18"
            style={{ fill: "#ECF0F1" }}
            width="18"
            height="18"></rect>
          <rect
            x="36"
            y="18"
            style={{ fill: "#2C2F38" }}
            width="18"
            height="18"></rect>
          <rect
            x="0"
            y="36"
            style={{ fill: "#ECF0F1" }}
            width="18"
            height="18"></rect>
          <rect
            x="36"
            y="36"
            style={{ fill: "#ECF0F1" }}
            width="18"
            height="18"></rect>
          <rect
            x="18"
            y="36"
            style={{ fill: "#2C2F38" }}
            width="18"
            height="18"></rect>
          <rect
            x="18"
            y="0"
            style={{ fill: "#2C2F38" }}
            width="18"
            height="18"></rect>
        </g>
      </g>
    </svg>
  );
}
