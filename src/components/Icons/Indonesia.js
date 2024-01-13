const Indonesia = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <g filter="url(#a)">
      <circle
        cx={10}
        cy={10}
        r={8}
        fill="url(#b)"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="translate(-.25) scale(.00588)" />
      </pattern>
      <filter
        id="a"
        width={24}
        height={24}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={2} dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_267_918" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_267_918"
          result="shape"
        />
      </filter>
      <image
        xlinkHref="data:image/png;base64,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"
        id="c"
        width={255}
        height={170}
      />
    </defs>
  </svg>
);

export default Indonesia;
