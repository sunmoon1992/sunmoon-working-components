import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { CountdownProps } from "./interface";
import styled from "styled-components";

dayjs.extend(duration);
const T = styled.time`
  gap: 4px;
  display: flex;
  align-items: baseline;

  em,
  small {
    color: #888;
    font-size: 12px;
    font-style: normal;
  }
  small {
    min-width: 24px;
  }
`;
const init = ["00", "00", "00", "00", "00", "0"];
const now = dayjs();
const Countdown = ({
  start,
  end,
  unit = ["d", "hr", "min", "sec"],
  interval = 1_000,
  ...props
}: CountdownProps) => {
  const timerRef = useRef<any>(null);

  const [timeLabel, setTimeLabel] = useState<string>("");
  const [estimatedTime, setEstimatedTime] = useState<string[]>(init);

  const stopTimer = () => {
    if (timerRef.current) {
      setTimeLabel("");
      clearInterval(timerRef.current);
      setEstimatedTime(() => init);
    }
    timerRef.current = null;
  };

  const startTimer = useCallback(() => {
    let diff = 0;

    props?.onFinished?.(false);

    timerRef.current = setInterval(function () {
      const current = dayjs().valueOf();

      if (start && current < start) {
        diff = dayjs(start).diff(dayjs(), "millisecond");
        setTimeLabel("notStartText");
      } else {
        diff = dayjs(end).diff(dayjs(), "millisecond");
        setTimeLabel("deadlineText");
      }

      if (diff <= 0) {
        stopTimer();

        if (current >= end) props?.onFinished?.(true);

        return;
      }

      const duration = dayjs.duration?.(diff);
      const days = String(duration.days());
      const hours = String(duration.hours()).padStart(2, "0");
      const minutes = String(duration.minutes()).padStart(2, "0");
      const seconds = String(duration.seconds()).padStart(2, "0");
      const milliseconds = String(duration.milliseconds()).padStart(3, "0");
      const asSeconds = String(Math.floor(duration.asSeconds()));

      setEstimatedTime(() => [
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
        asSeconds,
      ]);
    }, interval);
  }, [end, start]);

  useLayoutEffect(() => {
    if (!timerRef.current && end) {
      startTimer();
    }
    return () => {
      stopTimer();
    };
  }, [end]);

  const progress = useMemo(() => {
    const diff = dayjs(end).diff(now);
    return diff > 0 ? ((Number(estimatedTime[5]) * 1000) / diff) * 100 : 0;
  }, [end, estimatedTime[5]]);

  useEffect(() => {
    const p =
      Number(progress) === 0 || 100 - progress <= 0
        ? "0"
        : (100 - progress).toFixed(4);
    props?.onProgress?.(p);
  }, [props?.onProgress, progress]);

  return (
    <>
      <T className="countdown-time">
        {timeLabel === "notStartText" && props?.notStartText && (
          <label>{props?.notStartText}</label>
        )}
        {timeLabel === "deadlineText" && props?.deadlineText && (
          <label>{props?.deadlineText}</label>
        )}
        {Number(estimatedTime[0]) > 0 && (
          <>
            <span>
              {estimatedTime[0]}
              <em>{unit?.[0]}</em>
            </span>
            :
          </>
        )}
        <span>
          {estimatedTime[1]}
          <em>{unit?.[1]}</em>
        </span>
        :
        <span>
          {estimatedTime[2]}
          <em>{unit?.[2]}</em>
        </span>
        :
        <span>
          {estimatedTime[3]}
          <em>{unit?.[3]}</em>
        </span>
        {props?.showMilliseconds && Number(estimatedTime[5]) > 0 && (
          <>
            <small>{estimatedTime[4]}</small>
          </>
        )}
      </T>
      {props?.extraNode}
    </>
  );
};

export default Countdown;
