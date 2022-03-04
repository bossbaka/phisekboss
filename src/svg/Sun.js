import * as React from "react";

function Sun(props) {
  return (
    <svg width="inherit" height="inherit" viewBox="0 0 400 400" {...props}>
      <path
        fill="#FFBE55"
        d="M347.062 200.001c0-14.445 26.171-32.134 22.612-45.457-3.686-13.786-35.298-16.007-42.282-28.076-7.085-12.241 6.723-40.713-3.21-50.648-9.936-9.936-38.408 3.871-50.65-3.211-12.069-6.983-14.29-38.598-28.074-42.283-13.323-3.56-31.012 22.611-45.457 22.611s-32.134-26.171-45.455-22.611c-13.788 3.686-16.007 35.3-28.077 42.283-12.241 7.085-40.711-6.725-50.647 3.211-9.935 9.935 3.87 38.407-3.212 50.649-6.981 12.067-38.598 14.288-42.283 28.074C26.769 167.866 52.94 185.555 52.94 200c0 14.442-26.171 32.132-22.613 45.455 3.686 13.785 35.302 16.006 42.283 28.075 7.085 12.243-6.723 40.713 3.212 50.648 9.936 9.936 38.406-3.871 50.65 3.211 12.067 6.983 14.286 38.598 28.074 42.283 13.321 3.56 31.011-22.613 45.455-22.613s32.134 26.173 45.457 22.613c13.784-3.686 16.005-35.3 28.076-42.283 12.241-7.085 40.713 6.725 50.648-3.211 9.934-9.936-3.871-38.405 3.21-50.65 6.983-12.067 38.596-14.288 42.282-28.073 3.559-13.322-22.612-31.012-22.612-45.454z"
        opacity={0.6}
      />
      <path
        fill="#FFBE55"
        d="M313.531 200.001c0 57.342-42.515 104.756-97.749 112.438a113.43 113.43 0 01-15.778 1.09c-62.702 0-113.54-50.829-113.54-113.527 0-62.704 50.837-113.531 113.54-113.531 5.354 0 10.623.368 15.778 1.089 55.235 7.68 97.749 55.095 97.749 112.441z"
      />
    </svg>
  );
}

const MemoSun = React.memo(Sun);
export default MemoSun;
