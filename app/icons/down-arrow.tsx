import React from "react";

interface IconSvgProps {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
  opacity?: number | string;
  onClick?: (event: any) => void;
}
export default function DownArrowIcon({
  width,
  height,
  size = 22,
  className,
}: IconSvgProps) {
  return (
    <svg
      width={size || width}
      height={size || height}
      className={className}
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M7 10L12 15L17 10"
          stroke="#000000"
          strokeWidth="0.504"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </g>
    </svg>
  );
}
