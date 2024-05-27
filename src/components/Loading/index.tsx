import classNames from "classnames";
import { times } from "lodash";
import { LoadingProps } from "./interface";
import { Container } from "./styled";

const Loading = ({ cls, color, fontSize }: LoadingProps) => {
  return (
    <Container
      $color={color}
      $fontSize={fontSize}
      className={classNames("loader", cls)}
    >
      <section>
        {times(9, function (i: number) {
          return (
            <div key={i} className={classNames("square", `square${++i}`)} />
          );
        })}
      </section>
    </Container>
  );
};

export default Loading;
