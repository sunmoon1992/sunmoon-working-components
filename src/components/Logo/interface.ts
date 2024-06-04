import { ReactNode } from "react";

export interface GroupProps {
  size?: number
  mLeft?: number
  children: ReactNode[]
}

export interface LogoProps {
  src?: string
  alt?: string
  size?: number
  count?: number
  index?: number
  color?: string
  radius?: number
  border?: boolean
  bColor?: string
  wrapper?: boolean
  wrapperColor?: string[]
  borderColor?: string
}

export interface ImageProps {
  src: string
  alt: string
  color?: string
  bColor?: string
}
