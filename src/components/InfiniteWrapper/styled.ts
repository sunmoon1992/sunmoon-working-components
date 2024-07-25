import styled from "styled-components";

export const Table = styled.section`
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 0;

    &:hover {
    }
  }

  ::-webkit-scrollbar-track-piece {
    background: transparent;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export const Container = styled.div<{ $color?: string, $containerBg?: string, $tableHeight: string }>`
  width: 100%;
  color: ${(props) => props.$color || '#fff'};
  height: ${(props) => props.$tableHeight};
  overflow: hidden;
  background-color: ${props => props.$containerBg || '#101010'};
`;
