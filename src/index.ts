import Statistic from "./components/Statistic";
import CheckCard from "./components/CheckCard";
import FormatAmount from "./components/FormatAmount";
import Countdown from "./components/Countdown";
import OGP, { OGPProvider } from "./components/OGP";
import Video from "./components/Video";
import Loading from "./components/Loading";
import Skeleton from "./components/Skeleton";
import TokenSkeleton from "./components/TokenSkeleton";
import Logo from "./components/Logo/out";
import Copy from "./components/Copy";
import InfiniteTable from "./components/InfiniteTable";
import InfiniteWrapper from "./components/InfiniteWrapper";
import SimulateVideoPlayback from "./components/SimulateVideoPlayback";
import HideString from "./components/HideString";
import MagicText from "./components/MagicText";
import { useSmoothScrollTo } from "./hooks/useSmoothScrollTo";
import { atoh, htoa } from "./utils/index";

export type { MagicTextProps } from "./components/MagicText/interface";
export type { HideStringProps } from "./components/HideString/interface";
export type { CopyProps } from "./components/Copy/interface";
export type { VideoProps } from "./components/Video/interface";
export type { InfiniteTableProps, InfiniteTableColumnProps } from "./components/InfiniteTable/interface";
export type { InfiniteWrapperProps, InfiniteWrapperTableBodyProps } from "./components/InfiniteWrapper/interface";
export type { CountdownProps } from "./components/Countdown/interface";
export type { CheckCardProps } from "./components/CheckCard/interface";
export type { StatisticProps } from "./components/Statistic/interface";
export type { FormatAmountProps } from "./components/FormatAmount/interface";
export type { OGPProps } from "./components/OGP/interface";
export type { LoadingProps } from "./components/Loading/interface";
export type { GroupProps, LogoProps } from "./components/Logo/interface";
export type { SkeletonProps } from "./components/Skeleton/interface";
export type { TokenSkeletonProps } from "./components/TokenSkeleton/interface";
export type { SimulateVideoPlaybackProps } from "./components/SimulateVideoPlayback/interface";

export {
  atoh,
  htoa,
  Copy,
  OGP,
  Logo,
  Video,
  Loading,
  Countdown,
  CheckCard,
  Statistic,
  HideString,
  MagicText,
  FormatAmount,
  Skeleton,
  TokenSkeleton,
  useSmoothScrollTo,
  OGPProvider,
  InfiniteTable,
  InfiniteWrapper,
  SimulateVideoPlayback,
};

