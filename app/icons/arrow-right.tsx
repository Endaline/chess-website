import React from "react";

interface IconSvgProps {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
  opacity?: number | string;
  style?: React.CSSProperties; // Use React.CSSProperties for style
}
export default function ArrowRightIcon({
  width,
  height,
  size = 22,
  className,
  style,
}: IconSvgProps) {
  return (
    <svg
      width={size || width}
      height={size || height}
      className={className}
      fill="#000000"
      viewBox="0 0 32.00 32.00"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
      strokeWidth="0.00032">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title>arrow-down-right</title>
        <path d="M14.48 22.44v-9.72c0-0.48-0.36-0.84-0.84-0.84v0c-0.48 0-0.84 0.36-0.84 0.84v7.68l-11.36-11.44c-0.32-0.32-0.84-0.32-1.2 0-0.32 0.32-0.32 0.84 0 1.2l11.4 11.44h-7.68c-0.48 0-0.84 0.36-0.84 0.84s0.36 0.84 0.84 0.84h9.72c0.52 0 0.8-0.36 0.8-0.84z"></path>
      </g>
    </svg>
  );
}
