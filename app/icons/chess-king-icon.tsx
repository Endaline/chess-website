import React from "react";

interface IconSvgProps {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
  opacity?: number | string;
  onClick?: (event: any) => void;
}
export default function ChessKingIcon({
  width,
  height,
  size = 10,
  className,
}: IconSvgProps) {
  return (
    <svg
      className={className}
      height="150px"
      width="150px"
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill="#000000">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <style type="text/css"> </style>
        <g>
          <path
            className="st0"
            d="M424.073,431.665c1.569-3.668,2.496-7.942,2.496-12.622c0.018-8.509-2.023-16.044-5.257-22.398 c-2.42-4.775-5.464-8.906-8.717-12.564c-4.878-5.493-10.192-9.984-14.976-14.154c-4.764-4.15-8.981-7.998-11.779-11.695 l-0.057-0.085l-0.057-0.046c-10.513-13.161-19.098-32.117-25.66-53.664c-9.889-32.325-15.354-70.361-18.266-103.498 c-2.93-33.157-3.328-61.464-3.328-74.616c0-1.229,0-2.326,0-3.272l46.233-28.902V0h-72.327v43.878h-21.84V0h-69.093v43.878h-21.821 V0h-72.346v94.148l46.233,28.902c0.019,0.946,0.019,2.033,0.019,3.263c0,17.518-0.738,62.012-7.167,108.992 c-3.214,23.476-7.847,47.584-14.427,69.122c-6.561,21.557-15.147,40.513-25.678,53.674l-0.039,0.038l-0.056,0.094 c-2.516,3.291-6.089,6.694-10.23,10.316c-6.164,5.474-13.557,11.382-19.703,19.363c-3.063,3.98-5.787,8.528-7.734,13.728 c-1.948,5.191-3.082,11.024-3.063,17.406c-0.019,6.24,1.645,11.761,4.254,16.082c1.948,3.253,4.349,5.824,6.769,7.838 c1.551,1.295,3.12,2.316,4.614,3.204l-12.026,20.271V512h333.915v-45.561l-12.026-20.252c2.289-1.343,4.709-3.101,7.016-5.428 C420.291,438.359,422.504,435.334,424.073,431.665z M144.427,84.646V17.141h38.045v43.878h56.122V17.141h34.812v43.878h56.103 V17.141h38.064v67.505l-41.694,26.057H186.121L144.427,84.646z M405.807,494.859H106.173v-23.712l12.556-21.14h274.54l12.538,21.14 V494.859z M407.584,426.333c-0.794,1.333-1.815,2.458-2.987,3.442c-1.74,1.456-3.839,2.506-5.446,3.12 c-0.228,0.095-0.436,0.161-0.644,0.237v-0.256H113.756v0.359c-0.359-0.123-0.736-0.264-1.172-0.435 c-2.08-0.832-4.803-2.354-6.694-4.472c-0.964-1.059-1.758-2.241-2.345-3.706c-0.566-1.466-0.964-3.225-0.983-5.578 c0.018-5.872,1.305-10.438,3.403-14.645c1.608-3.148,3.725-6.088,6.259-8.944c3.783-4.293,8.528-8.358,13.407-12.613 c4.821-4.226,9.832-8.622,14.03-14.068v0.01c0.02-0.029,0.038-0.048,0.057-0.076c0.018-0.029,0.038-0.048,0.056-0.067 c12.518-15.798,21.594-36.476,28.553-59.204c10.438-34.188,15.94-73.14,18.947-107.006c2.874-32.666,3.365-60.528,3.384-74.587 h130.662c0.056,18.937,0.907,62.882,7.317,109.795c3.309,24.109,8.074,49.012,15.033,71.798 c6.958,22.728,16.034,43.406,28.552,59.204c0.02,0.029,0.038,0.047,0.057,0.076c0.018,0.019,0.018,0.038,0.038,0.067l0.018-0.01 c3.726,4.831,8.094,8.84,12.386,12.641c6.543,5.73,12.972,11.061,17.434,16.933c2.25,2.921,4.047,5.956,5.275,9.284 c1.248,3.337,1.986,7.006,1.986,11.412C409.399,422.381,408.643,424.537,407.584,426.333z"></path>
        </g>
      </g>
    </svg>
  );
}