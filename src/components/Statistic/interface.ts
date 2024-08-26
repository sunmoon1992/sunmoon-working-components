import { ReactNode } from "react";

export interface StatisticProps {
  title?: string | ReactNode;
  value?: string | number;
  format?: string;
  prefix?: string | ReactNode;
  suffix?: string | ReactNode;
  loading?: boolean;
  proceed?: boolean;
  duration?: number;
  countFrom?: number;
  className?: string | string[];
  precision?: number;
  customFormatFn?: (n: number | string) => string
}
