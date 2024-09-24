import { times } from 'lodash'
import { useEffect } from 'react'
import styled from 'styled-components'
import { SimulateVideoPlaybackProps } from "./interface";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  img {
    width: 100vw;
  }
`

const SimulateVideoPlayback = ({ imgs, adjust = 100 }: SimulateVideoPlaybackProps) => {
  useEffect(() => {
    let index = 1
    let timer: any = -1
    const content = times(imgs.length, function (i) {
      const img = document.createElement('img')
      img.src = imgs[i]
      return img
    })
    const container = document.getElementById('simulateVideoPlayback')

    const simulateVideoPlayback = function () {
      if (content[index - 1] && container) container.innerHTML = ''

      container && container.appendChild(content[index])

      index++

      if (index < imgs.length) {
        timer = setTimeout(simulateVideoPlayback, adjust)
      } else {
        index = 1

        simulateVideoPlayback()
      }
    }

    simulateVideoPlayback()

    return () => clearTimeout(timer)
  }, [imgs, adjust])

  return (
    <Container id='simulateVideoPlayback'/>
  )
}
export default SimulateVideoPlayback
