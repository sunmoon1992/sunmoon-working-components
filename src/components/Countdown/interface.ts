import * as React from "react";

export interface CountdownProps {
  end: number;
  start?: number;
  notStartText?: string;
  deadlineText?: string;
  interval?: number;
  showMilliseconds?: boolean;
  millisecondsDivider?: boolean;
  unit?: string[];
  extraNode?: React.ReactNode;
  onFinished?: (p: boolean) => void;
  onProgress?: (p: string) => void;
}
