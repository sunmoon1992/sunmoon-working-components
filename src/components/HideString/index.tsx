import { hideString, HideStringProps } from "./interface";

const HideString = ({ text, before, end }: HideStringProps) => {
  return (<>{hideString(text, before, end)}</>)
}

export default HideString
