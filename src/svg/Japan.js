import * as React from "react";

function Japan(props) {
  return (
    <svg viewBox="0 0 64 64" width="inherit" height="inherit" {...props}>
      <g data-name="25-Japan">
        <rect width={62} height={62} x={1} y={1} fill="#eef2fa" rx={4} />
        <path
          fill="#dce1eb"
          d="M23 39A22 22 0 011 17v42a4 4 0 004 4h54a4 4 0 004-4V17a22 22 0 01-22 22z"
        />
        <path
          fill="#cdd2e1"
          d="M59 59H5a4 4 0 01-4-4v4a4 4 0 004 4h54a4 4 0 004-4v-4a4 4 0 01-4 4z"
        />
        <path
          fill="#f7faff"
          d="M59 1H5a4 4 0 00-4 4v4a4 4 0 014-4h54a4 4 0 014 4V5a4 4 0 00-4-4z"
        />
        <circle cx={32} cy={32} r={16} fill="#e21743" />
        <path
          fill="#ba0028"
          d="M32 48a16 16 0 0014.737-9.76A22.021 22.021 0 0141 39H23a22.021 22.021 0 01-5.737-.76A16 16 0 0032 48z"
        />
      </g>
    </svg>
  );
}

const MemoJapan = React.memo(Japan);
export default MemoJapan;
