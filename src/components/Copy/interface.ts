import { Props } from "./CopySvg";

export interface CopyProps extends Props{
  text: string
  onCopy?:() => void
}
