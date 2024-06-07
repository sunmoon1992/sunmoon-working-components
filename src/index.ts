import Statistic from "./components/Statistic";
import CheckCard from "./components/CheckCard";
import FormatAmount from "./components/FormatAmount";
import Countdown from "./components/Countdown";
import OGP, { OGPProvider } from "./components/OGP";
import Video from "./components/Video";
import Loading from "./components/Loading";
import Logo from "./components/Logo/out";
import InfiniteTable from "./components/InfiniteTable";
import { useSmoothScrollTo } from "./hooks/useSmoothScrollTo";

export type { VideoProps } from "./components/Video/interface";
export type { InfiniteTableProps, InfiniteTableColumnProps } from "./components/InfiniteTable/interface";
export type { CountdownProps } from "./components/Countdown/interface";
export type { CheckCardProps } from "./components/CheckCard/interface";
export type { StatisticProps } from "./components/Statistic/interface";
export type { FormatAmountProps } from "./components/FormatAmount/interface";
export type { OGPProps } from "./components/OGP/interface";
export type { LoadingProps } from "./components/Loading/interface";
export type { GroupProps, LogoProps } from "./components/Logo/interface";

export {
  OGP,
  Logo,
  Video,
  Loading,
  Countdown,
  CheckCard,
  Statistic,
  FormatAmount,
  useSmoothScrollTo,
  OGPProvider,
  InfiniteTable,
};

