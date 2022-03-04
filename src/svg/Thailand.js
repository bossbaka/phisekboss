import * as React from "react";

function Thailand(props) {
  return (
    <svg viewBox="0 0 64 64" width="inherit" height="inherit" {...props}>
      <g data-name="29-Thailand">
        <path fill="#eef2fa" d="M1 43h62v10H1z" />
        <path
          fill="#e21743"
          d="M63 5a4 4 0 00-4-4H5a4 4 0 00-4 4v6h62zM1 59a4 4 0 004 4h54a4 4 0 004-4v-6H1z"
        />
        <path fill="#2448a8" d="M1 21h62v22H1z" />
        <path fill="#eef2fa" d="M1 11h62v10H1z" />
        <path fill="#dce1eb" d="M1 43h62v10H1z" />
        <path fill="#c7002b" d="M1 59a4 4 0 004 4h54a4 4 0 004-4v-6H1z" />
        <path
          fill="#1f3d8f"
          d="M41 39H23A22 22 0 011.37 21H1v22h62V21h-.37A22 22 0 0141 39z"
        />
        <path
          fill="#dce1eb"
          d="M63 21v-4a22.058 22.058 0 01-.37 4zM1 17v4h.37A22.058 22.058 0 011 17z"
        />
        <path
          fill="#960e2c"
          d="M59 59H5a4 4 0 01-4-4v4a4 4 0 004 4h54a4 4 0 004-4v-4a4 4 0 01-4 4z"
        />
        <path
          fill="#ea5172"
          d="M59 1H5a4 4 0 00-4 4v4a4 4 0 014-4h54a4 4 0 014 4V5a4 4 0 00-4-4z"
        />
      </g>
    </svg>
  );
}

const MemoThailand = React.memo(Thailand);
export default MemoThailand;
