interface Props extends React.SVGProps<SVGSVGElement> {
  fill1?: string
  fill2?: string
  stroke1?: string
  stroke2?: string
}

const CopySuccessSvg = (
  {
    width = '64px',
    height = '64px',
    fill1 = '#292D32',
    fill2 = '#292D32',
    stroke1 = 'currentColor',
    stroke2 = '#7fff00',
  }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
         transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier">
        <path opacity="0.4"
              d="M17.0998 2H12.8998C9.44976 2 8.04977 3.37 8.00977 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V15.99C20.6298 15.95 21.9998 14.55 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z"
              stroke={stroke1}
              fill={fill1}/>
        <path
          d="M11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1V12.9C16 9.4 14.6 8 11.1 8ZM12.29 13.65L8.58 17.36C8.44 17.5 8.26 17.57 8.07 17.57C7.88 17.57 7.7 17.5 7.56 17.36L5.7 15.5C5.42 15.22 5.42 14.77 5.7 14.49C5.98 14.21 6.43 14.21 6.71 14.49L8.06 15.84L11.27 12.63C11.55 12.35 12 12.35 12.28 12.63C12.56 12.91 12.57 13.37 12.29 13.65Z"
          stroke={stroke2}
          fill={fill2}/>
      </g>
    </svg>
  )
}

export default CopySuccessSvg
