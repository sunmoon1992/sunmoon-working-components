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
  slice?: number
  color?: string
  radius?: string
  border?: boolean
  bColor?: string
  wrapper?: boolean
  wrapperColor?: string[]
  borderColor?: string
}

export interface ImageProps {
  src: string
  alt: string
  slice?: number
  color?: string
  bColor?: string
}
