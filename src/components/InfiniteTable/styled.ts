import styled from "styled-components";
import { size } from "./interface";

export const Table = styled.section<{
  $height?: number;
  $border?: boolean;
  $borderCr?: string;
  $tableHeadBg?: string;
  $tableHeadCr?: string;
  $gridTemplateColumns: string[];
}>`
  font-size: 14px;

  ::-webkit-scrollbar {
    width: 0;
    background: #2e2e33;
  }

  ::-webkit-scrollbar-thumb {
    background: #2e2e33;
    border-radius: 4px;

    &:hover {
    }
  }

  ::-webkit-scrollbar-track-piece {
    background: #39393e;
  }

  ::-webkit-scrollbar-corner {
    background: #2e2e33;
  }

  .table-thead,
  .table-tbody-tr {
    display: grid;
    grid-template-columns: ${(props) => props.$gridTemplateColumns.join(" ")};
  }

  .table-thead-td {
    color: ${props => props.$tableHeadCr || '#6f6e84'};
    background-color: ${props => props.$tableHeadBg || '#2e2e33'};
  }

  .table-thead-td,
  .table-tbody-td {
    padding: 0 0.5em;
    border-style: solid;
    border-width: ${props => props.$border ? '0 1px 1px 0' : 0};
    border-color: ${props => props.$borderCr || '#39393e'};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: ${(props) => props.$height}px;

    &:last-child {
      border-right-width: 0;
    }
  }

  @media screen and (max-width: ${size.screen}px) {
    .table-thead {
      display: none;
    }

    .table-tbody-td {
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      height: auto;
    }

    .table-tbody-td-inner {
      width: 100%;
    }

    .table-tbody-tr {
      display: block;
      padding: 10px 10px 0;
      box-sizing: border-box;
    }

    .table-tbody-td-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .table-tbody-tr-inner {
      gap: 8px;
      display: flex;
      padding: 10px;
      flex-direction: column;
      background-color: #39393e;
      border-radius: 0.5em;
    }
  }
`;

export const Nothing = styled.div`
  color: #666;
  padding: 2em;
  font-size: 12px;
  text-align: center;
`;

export const Container = styled.div<{ $color?: string, $containerBg?: string, $tableHeight: string }>`
  width: 100%;
  color: ${(props) => props.$color || '#c3c2d4'};
  height: ${(props) => props.$tableHeight};
  overflow: hidden;
  background-color: ${props => props.$containerBg || '#1d1d22'};
`;

export const TableHead = styled.section``;

export const TableBody = styled.section`position: relative`;
