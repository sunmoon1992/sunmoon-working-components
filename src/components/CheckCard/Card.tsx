import { FC, useState } from "react";

import styled from "styled-components";
import Icon from "./Icon";
import { CheckCardProps } from "./interface";

const D = styled.section`
  user-select: none;

  input {
    margin: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    appearance: none;
    background: transparent;
  }

  .check-card-checkbox {
    width: 16px;
    height: 16px;
    position: relative;

    .check-card-icon {
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }
`;

const Card: FC<CheckCardProps> = ({
  desc,
  value,
  poster,
  disabled,
  className,
  onChange,
}) => {
  const [checked, setChecked] = useState<boolean>(!!value);

  return (
    <D
      className={`${className} check-card`}
      onClick={() => {
        if (disabled) return;
        onChange(!checked);
        setChecked(!checked);
      }}
    >
      <div
        className="check-card-checkbox"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            const v = e.target.checked;
            onChange(v);
            setChecked(v);
          }}
          disabled={disabled}
        />
        <Icon className="check-card-icon" active={checked} />
      </div>
      <img className="check-card-img" src={poster} alt="" />
      <div className="check-card-desc">{desc}</div>
    </D>
  );
};

export default Card;
