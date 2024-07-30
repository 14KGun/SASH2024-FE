import { css } from 'styled-components';

export default {
  ellipsis: css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  ellipsisWithLines: (line: number) => css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${line};
  `,
} as const;
