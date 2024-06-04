import numeral from "numeral";
import { useMemo } from "react";

import { FormatAmountProps } from "./interface";

const o = (value: string | number, decimal = 8, local?: boolean): string => {
  const base = String(value);
  const _value = f(base.indexOf(".") > -1 ? base : `${base}.0`, decimal)
  return local ? Number(_value).toLocaleString() : _value;
};

const f = (value: string, decimal = 8): string => {
  const regexp = /(?:\.0*|(\.\d+?)0+)$/;
  const [a, b] = value.split(".");
  const output = `${a}.${b.substring(0, decimal)}`;
  return output.replace(regexp, "$1");
};

const FormatAmount = ({ amount, decimals = 8, format, local }: FormatAmountProps) => {
  return useMemo(
    () => (
      <span className={"format-amount"}>
        {format ? numeral(amount).format(format) : Number(amount) === 0 ? "0.00" : o(amount, decimals, local)}
      </span>
    ),
    [format, amount],
  );
};

export default FormatAmount;
