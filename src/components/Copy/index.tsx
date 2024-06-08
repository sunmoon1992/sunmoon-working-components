import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyProps } from "./interface";
import CopySvg from "./CopySvg";
import CopySuccessSvg from "./CopySuccessSvg";
import styled from "styled-components";
import { useEffect, useState } from "react";

const C = styled.div`
  svg {
    cursor: pointer;
  }
`

const Copy = ({ text, width, height, fill1, fill2, stroke1, stroke2 }: CopyProps) => {
  const [v, setV] = useState<boolean>(false)

  useEffect(() => {
    if (!v) return
    const t = setTimeout(() => {
      setV(() => false)
    }, 1000)

    return () => clearTimeout(t)
  }, [v])

  return (text ?
      <CopyToClipboard
        text={text}
        onCopy={() => setV(true)}>
        <C>
          {!v
            ? <CopySvg
              width={width}
              height={height}
              fill1={fill1}
              fill2={fill2}
              stroke2={stroke2}
              stroke1={stroke1}/>
            : <CopySuccessSvg
              width={width}
              height={height}
              fill1={fill1}
              fill2={fill2}
              stroke2={stroke2}
              stroke1={stroke1}/>}
        </C>
      </CopyToClipboard> : null
  )
}

export default Copy
