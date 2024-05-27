import Card from "./Card";
import { useCallback, useEffect, useRef } from "react";

interface Data {
  desc: string;
  value?: boolean;
  poster: string;
  tokenId: number;
  disabled?: boolean;
}

const CheckCard = ({
  data,
  onChange,
}: {
  data: Data[];
  onChange: (p: number[]) => void;
}) => {
  const checkedIds = useRef<number[]>([]);

  const handle = useCallback(
    (params: { checked: boolean; tokenId: number }) => {
      const ids = [...checkedIds.current];

      if (params.checked) {
        checkedIds.current = [...ids, params.tokenId];
      } else {
        checkedIds.current = ids.filter(
          (f) => Number(f) !== Number(params.tokenId),
        );
      }

      onChange(checkedIds.current);
    },
    [],
  );

  useEffect(() => {
    const filter = data.filter((f) => f.value);
    checkedIds.current = filter.map((f) => f.tokenId);
    onChange(checkedIds.current);
  }, [data]);

  return (
    <section className="check-card-container">
      {data.map((d) => (
        <Card
          key={d.tokenId}
          desc={d.desc}
          value={d.value}
          poster={d.poster}
          disabled={d.disabled}
          onChange={(v) => {
            handle({ checked: v, tokenId: d.tokenId });
          }}
        />
      ))}
    </section>
  );
};

export default CheckCard;
