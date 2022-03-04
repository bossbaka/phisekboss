import * as React from "react";

function UnitedStates(props) {
  return (
    <svg
      data-name="01-United States"
      viewBox="0 0 64 64"
      width="inherit"
      height="inherit"
      {...props}
    >
      <path
        fill="#e9edf5"
        d="M12 27l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM23 27l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM34 27l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM17 17l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM28 17l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM34 7l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM23 7l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM12 7l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM1 54h62v5H1zM1 44h62v5H1zM63 35v4H1v-4h62zM37 25h26v5H37zM37 15h26v5H37zM37 5h26v5H37z"
      />
      <path
        fill="#e21743"
        d="M1 59h62a4 4 0 01-4 4H5a4 4 0 01-4-4zM1 49h62v5H1zM1 39h62v5H1zM37 30h26v5H37zM37 20h26v5H37zM37 10h26v5H37zM63 5H37V1h22a4 4 0 014 4z"
      />
      <path
        fill="#2a54c4"
        d="M19 1H5a4 4 0 00-4 4v30h36V1zm-1 6l1-3 1 3h3l-2 2 1 3-3-2-3 2 1-3-2-2zM7 7l1-3 1 3h3l-2 2 1 3-3-2-3 2 1-3-2-2zm4 25l-3-2-3 2 1-3-2-2h3l1-3 1 3h3l-2 2zm-1-10l1-3-2-2h3l1-3 1 3h3l-2 2 1 3-3-2zm12 10l-3-2-3 2 1-3-2-2h3l1-3 1 3h3l-2 2zm-1-10l1-3-2-2h3l1-3 1 3h3l-2 2 1 3-3-2zm12 10l-3-2-3 2 1-3-2-2h3l1-3 1 3h3l-2 2zM32 9l1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3z"
      />
      <path fill="#dce1eb" d="M63 20v-3a22.161 22.161 0 01-.209 3z" />
      <path fill="#bec3d2" d="M5 32l1.2-.8q-.339-.4-.661-.82z" />
      <path
        fill="#dce1eb"
        d="M1 54h62v5H1zM1 44h62v5H1zM10.358 35H1v4h22a21.894 21.894 0 01-12.642-4zM41 39h22v-4h-9.358A21.894 21.894 0 0141 39zm17.745-9H63v-5h-1.507a21.9 21.9 0 01-2.748 5z"
      />
      <path
        fill="#b51135"
        d="M5 63h54a4 4 0 004-4H1a4 4 0 004 4zM1 49h62v5H1zM23 39H1v5h62v-5H23zM53.642 35H63v-5h-4.255a22.118 22.118 0 01-5.103 5zm7.851-10H63v-5h-.209a21.8 21.8 0 01-1.298 5z"
      />
      <path
        fill="#2448a8"
        d="M6.2 31.2L5 32l.54-1.621A21.9 21.9 0 011 17v18h9.358A22.134 22.134 0 016.2 31.2z"
      />
      <path fill="#ea5172" d="M59 1H37v4h22a4 4 0 014 4V5a4 4 0 00-4-4z" />
      <path
        fill="#4f7fff"
        d="M37 1H5a4 4 0 00-4 4v4a4 4 0 014-4h2.667L8 4l.333 1h10.334L19 4l.333 1h10.334L30 4l.333 1H37z"
      />
      <path
        fill="#f7faff"
        d="M29.667 5h.666L30 4l-.333 1zM18.667 5h.666L19 4l-.333 1zM7.667 5h.666L8 4l-.333 1z"
      />
      <path
        fill="#9da3b5"
        d="M1 55v4h4a4 4 0 01-4-4zm58 4h4v-4a4 4 0 01-4 4z"
      />
      <path fill="#750a26" d="M5 59H1a4 4 0 004 4h54a4 4 0 004-4H5z" />
    </svg>
  );
}

const MemoUnitedStates = React.memo(UnitedStates);
export default MemoUnitedStates;
