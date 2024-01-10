import React from "react";

interface IconSvgProps {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
  opacity?: number | string;
  onClick?: (event: any) => void;
}
export default function ChessIllustrationIcon({
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
            d="M389.625,411.673c-2.414-4.873-5.495-9.16-8.854-13.184c-5.056-6.01-10.761-11.444-16.413-17.411 c-5.651-5.967-11.251-12.424-16.255-20.386c-14.979-23.841-23.185-47.867-27.595-65.881c-2.205-9.012-3.464-16.519-4.165-21.724 c-0.114-0.813-0.21-1.566-0.289-2.266h21.987c1.89,0,3.797-0.42,5.46-1.226c2.519-1.19,4.462-3.176,5.687-5.38 c1.242-2.223,1.837-4.699,1.837-7.201c0-2.896-0.805-5.862-2.415-8.565c-1.592-2.704-4.007-5.1-7.07-6.921 c-4.409-2.607-8.574-5.459-11.286-8.294c-1.366-1.425-2.345-2.8-2.975-4.059c-0.612-1.295-0.892-2.432-0.892-3.718h0.385 c-0.017-5.626,0.892-11.952,2.502-18.522c2.414-9.852,6.422-20.263,11.024-29.852c4.602-9.589,9.834-18.408,14.594-25.119 c2.397-3.421,4.234-6.641,5.512-9.773c1.278-3.123,2.012-6.176,2.012-9.239c0-2.205-0.402-4.418-1.294-6.448 c-0.665-1.531-1.61-2.931-2.73-4.112c-1.68-1.785-3.745-3.053-5.897-3.894c-2.152-0.848-4.41-1.287-6.737-1.452 c-0.892-0.061-1.732-0.096-2.572-0.096c-4.007-0.018-7.507,0.779-10.342,1.978c-2.152,0.883-3.885,1.942-5.337,2.878 c-0.07,0.036-0.122,0.071-0.174,0.106c-1.733-16.833-9.3-31.987-20.63-43.308C293.753,65.636,275.773,57.604,256,57.604 s-37.753,8.032-50.702,20.998c-11.33,11.322-18.898,26.475-20.63,43.316c-1.26-0.813-2.704-1.706-4.471-2.537 c-1.514-0.708-3.22-1.338-5.136-1.767c-1.908-0.429-3.998-0.665-6.255-0.665c-0.823,0-1.68,0.026-2.572,0.096h0.008 c-2.073,0.149-4.085,0.516-6.028,1.181c-1.443,0.508-2.862,1.182-4.173,2.083c-1.951,1.329-3.684,3.211-4.804,5.442 c-1.146,2.222-1.671,4.724-1.662,7.2c0.009,3.062,0.744,6.116,2.012,9.239c1.278,3.132,3.114,6.352,5.53,9.773 c6.343,8.95,13.5,21.618,18.95,34.935c2.73,6.65,5.048,13.465,6.658,20.036c1.61,6.57,2.511,12.896,2.511,18.522h0.384 c-0.009,1.286-0.288,2.423-0.901,3.718c-0.91,1.89-2.73,4.059-5.258,6.177c-2.519,2.135-5.695,4.226-9.003,6.176 c-3.053,1.82-5.468,4.217-7.078,6.921c-1.592,2.703-2.398,5.67-2.398,8.565c0,3.334,1.033,6.641,3.281,9.318 c1.12,1.32,2.555,2.475,4.235,3.263c1.671,0.805,3.569,1.226,5.468,1.226h21.978c-0.639,5.231-1.942,13.779-4.567,24.401 c-4.436,17.97-12.607,41.812-27.481,65.47c-4.445,7.07-9.37,12.966-14.384,18.373c-3.753,4.059-7.55,7.839-11.216,11.654 c-5.486,5.721-10.718,11.531-14.663,18.565c-1.969,3.508-3.605,7.332-4.716,11.496c-1.129,4.165-1.724,8.68-1.724,13.535 c0,1.137,0.027,2.319,0.097,3.526c0.271,4.918,1.732,9.186,3.814,12.564c1.558,2.528,3.43,4.558,5.329,6.16 c1.172,0.997,2.345,1.794,3.482,2.484l-9.738,16.396V512h271.635v-36.545l-9.712-16.387c1.732-1.059,3.569-2.442,5.337-4.244 c1.855-1.898,3.587-4.26,4.9-7.122c1.312-2.861,2.17-6.186,2.362-9.878c0.07-1.19,0.106-2.362,0.106-3.508 C394.823,425.672,392.863,418.148,389.625,411.673z M215.019,88.332C225.527,77.824,239.98,71.358,256,71.35 c16.02,0.009,30.474,6.475,40.981,16.982c9.808,9.816,16.09,23.062,16.877,37.832c-2.082-0.132-3.534-0.49-4.795-0.962 c-1.181-0.429-2.24-0.998-3.499-1.751c-0.936-0.56-1.977-1.225-3.211-1.942c-1.82-1.085-4.094-2.275-6.868-3.123 c-2.774-0.866-6.002-1.364-9.728-1.364c-4.419-0.009-8.146,0.726-11.226,1.864c-2.31,0.857-4.208,1.916-5.783,2.852 c-1.181,0.718-2.196,1.366-3.114,1.908c-1.391,0.813-2.546,1.391-3.955,1.82c-1.408,0.438-3.132,0.752-5.678,0.752 c-3.027-0.008-4.874-0.437-6.448-1.014c-1.173-0.429-2.24-0.998-3.491-1.751c-0.945-0.56-1.986-1.225-3.211-1.942 c-1.828-1.085-4.094-2.275-6.868-3.123c-2.782-0.866-6.011-1.364-9.738-1.364c-4.419-0.009-8.146,0.726-11.225,1.864 c-2.302,0.857-4.209,1.916-5.775,2.852c-1.19,0.718-2.205,1.366-3.123,1.908c-1.382,0.813-2.537,1.391-3.946,1.82 c-1.085,0.333-2.362,0.596-4.042,0.7C198.921,111.394,205.211,98.148,215.019,88.332z M184.091,171.134 c-4.943-10.289-10.481-19.668-15.748-27.105c-1.951-2.765-3.255-5.144-4.024-7.026c-0.77-1.898-0.997-3.272-0.997-4.05 c0.008-0.56,0.105-0.805,0.14-0.919l0.131-0.192c0.097-0.097,0.332-0.306,0.928-0.552c0.577-0.228,1.495-0.454,2.712-0.533h0.017 c0.552-0.035,1.068-0.062,1.558-0.062c2.362,0.018,3.736,0.385,5.074,0.927c0.997,0.411,1.986,0.98,3.211,1.759 c1.811,1.155,4.112,2.818,7.331,4.226c3.211,1.417,7.262,2.38,12.074,2.354c4.41,0.018,8.146-0.709,11.216-1.864 c2.311-0.848,4.209-1.908,5.783-2.844c1.191-0.709,2.197-1.356,3.115-1.898c1.391-0.814,2.537-1.392,3.954-1.838 c1.408-0.428,3.132-0.735,5.678-0.744c3.027,0.009,4.873,0.437,6.448,1.006c1.173,0.438,2.232,1.006,3.491,1.75 c0.944,0.569,1.977,1.242,3.211,1.96c1.829,1.076,4.094,2.266,6.868,3.114c2.773,0.857,6.01,1.365,9.738,1.356 c4.41,0.018,8.146-0.709,11.225-1.864c2.302-0.848,4.208-1.908,5.775-2.844c1.19-0.709,2.204-1.356,3.114-1.898 c1.391-0.814,2.546-1.392,3.954-1.838c1.408-0.428,3.141-0.735,5.688-0.744c3.018,0.009,4.873,0.437,6.439,1.006 c1.182,0.438,2.249,1.006,3.5,1.75c0.935,0.569,1.985,1.242,3.202,1.96c1.828,1.076,4.094,2.266,6.868,3.114 c2.782,0.857,6.01,1.365,9.729,1.356c4.279,0.018,7.953-0.726,10.98-1.898c2.258-0.876,4.129-1.934,5.687-2.905 c2.345-1.479,3.972-2.642,5.459-3.316c0.753-0.359,1.488-0.613,2.363-0.814c0.857-0.192,1.872-0.332,3.202-0.332 c0.49,0,1.015,0.027,1.575,0.062c1.085,0.079,1.925,0.254,2.52,0.463c0.437,0.158,0.716,0.316,0.892,0.429 c0.263,0.193,0.28,0.245,0.332,0.342c0.052,0.105,0.158,0.323,0.175,0.962c0,0.778-0.228,2.152-0.997,4.05 c-0.77,1.89-2.065,4.27-4.024,7.026c-7.017,9.921-14.558,23.29-20.455,37.648c-2.94,7.183-5.478,14.602-7.288,21.987 c-1.225,5.022-2.117,10.009-2.572,14.917H198.649c-0.455-4.908-1.348-9.895-2.572-14.917 C193.356,192.586,189.034,181.414,184.091,171.134z M174.738,257.068c0-0.018-0.009-0.026-0.009-0.026 c0-0.403,0.105-0.936,0.481-1.566c0.376-0.63,1.024-1.366,2.266-2.118c4.848-2.887,9.939-6.211,14.182-10.595 c2.109-2.196,4.007-4.689,5.424-7.586c0.437-0.9,0.806-1.864,1.138-2.852h115.558c0.323,0.988,0.7,1.951,1.138,2.852 c2.126,4.358,5.31,7.769,8.758,10.674c3.448,2.922,7.209,5.346,10.848,7.507c1.243,0.752,1.89,1.488,2.258,2.118 c0.385,0.63,0.49,1.163,0.49,1.539c0,0-0.018,0.035-0.018,0.053H174.738z M378.077,498.246H133.932v-19.02l9.764-16.457h224.617 l9.764,16.457V498.246z M380.981,437.054c-0.174,2.748-0.875,4.62-1.802,6.142c-0.7,1.146-1.557,2.082-2.502,2.87 c-1.382,1.208-2.992,2.038-4.199,2.52c-0.49,0.21-0.875,0.332-1.19,0.437H140.703c-0.314-0.105-0.734-0.253-1.225-0.455 c-1.557-0.63-3.701-1.82-5.31-3.596c-0.822-0.883-1.523-1.916-2.083-3.176c-0.542-1.26-0.944-2.773-1.058-4.742l-0.009-0.026 c-0.053-0.918-0.079-1.82-0.079-2.712c0.018-6.658,1.391-11.75,3.754-16.527c1.767-3.587,4.155-6.982,7.06-10.455 c4.375-5.206,9.922-10.543,15.871-16.807c5.924-6.264,12.223-13.474,17.918-22.521c15.994-25.46,24.629-50.85,29.301-69.932 c2.713-11.12,4.086-20.07,4.76-25.696h92.784c0.683,5.625,2.047,14.576,4.769,25.696c4.671,19.082,13.316,44.472,29.309,69.932 c5.058,8.05,10.587,14.638,15.924,20.404c4.006,4.322,7.891,8.18,11.392,11.837c5.284,5.486,9.641,10.49,12.598,15.766 c1.47,2.634,2.625,5.355,3.43,8.33c0.805,2.983,1.242,6.229,1.242,9.974C381.051,435.209,381.033,436.119,380.981,437.054z"></path>
          <path
            className="st0"
            d="M256,49.695c6.842,0,13.097-2.8,17.568-7.279c4.488-4.48,7.279-10.735,7.271-17.577 c0.008-6.833-2.792-13.088-7.271-17.568C269.097,2.792,262.842-0.008,256,0c-6.842-0.008-13.098,2.792-17.568,7.271 c-4.488,4.471-7.279,10.726-7.279,17.568s2.791,13.097,7.279,17.577C242.903,46.896,249.158,49.695,256,49.695z M248.152,16.991 c2.03-2.012,4.76-3.246,7.848-3.246c3.088,0,5.818,1.234,7.848,3.246c2.021,2.03,3.246,4.76,3.246,7.848 c0,3.088-1.225,5.818-3.246,7.848c-2.03,2.021-4.76,3.246-7.848,3.255c-3.088-0.009-5.818-1.234-7.848-3.255 c-2.021-2.03-3.246-4.76-3.255-7.848C244.906,21.751,246.131,19.021,248.152,16.991z"></path>
        </g>
      </g>
    </svg>
  );
}
