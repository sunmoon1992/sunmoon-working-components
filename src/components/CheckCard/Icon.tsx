import { FC, SVGAttributes } from "react";

type SVG = SVGAttributes<SVGElement>;

interface IconProps extends SVG {
  active?: boolean;
}

const Icon: FC<IconProps> = (props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <g clipPath="url(#clip0_821_12603)">
        <rect
          width="16"
          height="16"
          rx="4"
          fill={!props.active ? "#303044" : "#477BFF"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8047 4.19526C14.065 4.45561 14.065 4.87772 13.8047 5.13807L8.08084 10.8619C7.29979 11.643 6.03346 11.643 5.25241 10.8619L2.86189 8.4714C2.60154 8.21106 2.60154 7.78894 2.86189 7.5286C3.12224 7.26825 3.54435 7.26825 3.8047 7.5286L6.19522 9.91912C6.45557 10.1795 6.87768 10.1795 7.13803 9.91912L12.8619 4.19526C13.1222 3.93491 13.5443 3.93491 13.8047 4.19526Z"
          fill="#F7F7F7"
        />
      </g>
      <defs>
        <clipPath id="clip0_821_12603">
          <rect
            width="16"
            height="16"
            rx="4"
            fill={!props.active ? "#C3C2D4" : "#FFFFFF"}
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
