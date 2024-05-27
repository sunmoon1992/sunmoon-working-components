import { useCallback } from "react";

export function useSmoothScrollTo() {
  const smoothScrollTo = useCallback(
    (targetYOffset: number, duration: number) => {
      let timer = 0;
      const pageYOffset = window.scrollY;
      const distance = targetYOffset - pageYOffset;

      /**
       * performance.now() 自文档生命期开始以来所经过的毫秒数量
       * requestAnimationFrame
       * 他两的返回值相同 = DOMHighResTimeStamp(高分辨率时间戳)，开始执行回调函数的时刻
       */
      const startTime = performance.now();

      function step(time: number) {
        const _time = time - startTime;
        const progress = Math.min(_time / duration, 1);

        window.scrollTo(0, pageYOffset + distance * progress ** 3);

        if (_time < duration) {
          timer = requestAnimationFrame(step);
        } else {
          cancelAnimationFrame(timer);
        }
      }

      requestAnimationFrame(step);
    },
    [],
  );

  return {
    smoothScrollTo,
  };
}

/**
 *    const dom = document.getElementById('ID')

      if (dom) {
        smoothScrollTo(dom.offsetTop, 500)
      }
 */
