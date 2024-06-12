import { MagicTextProps } from "./interface";
import styled from "styled-components";

const C = styled.div<{ $fontSize?: string, $textColor?: string, $beforeShadowColor?: string, $afterShadowColor?: string }>`
  font-size: ${props => props?.$fontSize ?? 16}px;
  transform: scale(1);

  &::before {
    content: attr(data-word);
    filter: contrast(200%);
    text-shadow: 1px 0 0 ${props => props?.$beforeShadowColor ?? '#000'};
    animation: move 0.5s infinite;
  }

  &::after {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: -1px;
    overflow: hidden;
    z-index: 3;
    color: ${props => props?.$textColor ?? 'red'};
    filter: contrast(200%);
    text-shadow: -1px 0 0 ${props => props?.$afterShadowColor ?? 'green'};;
    mix-blend-mode: lighten;
    animation: move 0.8s infinite 0.1s;
    white-space: nowrap;
  }

  @keyframes move {
    10% {
      top: -0.6px;
      left: -1.1px;
    }
    20% {
      top: 0.6px;
      left: -0.2px;
    }
    30% {
      left: 0.5px;
    }
    40% {
      top: -0.3px;
      left: -0.7px;
    }
    50% {
      left: 0.2px;
    }
    60% {
      top: 1px;
      left: -1.2px;
    }
    70% {
      top: -0.2px;
      left: 0.1px;
    }
    80% {
      top: -0.4px;
      left: -0.9px;
    }
    90% {
      left: 1.2px;
    }
    100% {
      left: -1.2px;
    }
  }

`

const MagicText = ({ text }: MagicTextProps) => {
  return (
    <C className="magic-text" data-word={text}/>
  )
}

export default MagicText
