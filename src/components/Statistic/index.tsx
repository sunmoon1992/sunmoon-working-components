import { useEffect, useMemo, useRef, useState } from "react";

import BTween from "b-tween";
import numeral from "numeral";

import { StatisticProps } from "./interface";

function Statistic({
  value = 0,
  format = "0,0.00",
  proceed,
  duration = 2000,
  countFrom: from = 0,
}: StatisticProps) {
  const r = useRef<number | string>(0);

  const tween = useRef<typeof BTween>();

  const [tweenValue, setTweenValue] = useState<string | number>(value);

  const counter = () => {
    const to = value;
    if (from !== to) {
      let from_value = 0;
      if (proceed) {
        from_value = Number(r.current);
      } else {
        from_value = Number(from);
      }
      tween.current = new BTween({
        from: {
          value: from_value,
        },
        to: {
          value: to,
        },
        duration: duration,
        easing: "sineOut",
        onUpdate: (keys: { value: number }) => {
          setTweenValue(keys.value);
        },
        onFinish: () => {
          setTweenValue(to);
        },
      });
      r.current = to;
      tween.current.start();
    }
  };

  const memoValue = useMemo(() => {
    return numeral(tweenValue ?? 0).format(format);
  }, [tweenValue]);

  useEffect(() => {
    if (tween.current) {
      tween.current.stop();
    }

    counter();

    return () => {
      tween.current && tween.current.stop();
      tween.current = null;
    };
  }, [value]);

  return <>{memoValue}</>;
}

export default Statistic;
