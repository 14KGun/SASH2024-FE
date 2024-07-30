'use client';

import React from 'react';
import { css } from 'styled-components';

import { Container } from '@/components/Container';

import { theme } from '@/utils/style';

type Props = Omit<React.ComponentProps<typeof Container>, 'type'>;

export default React.forwardRef(
  (
    { $fill = theme.color.gray[400], $height = '1px', $css, ...props }: Props,
    ref: React.Ref<HTMLDivElement>,
  ) => (
    <Container
      ref={ref}
      $fill={$fill}
      $height={$height}
      $css={React.useMemo(
        () => [
          css`
            background-image: linear-gradient(
              to right,
              ${$fill} 50%,
              rgba(0, 0, 0, 0) 0%
            );
            background-size: 12px ${$height};
            background-repeat: repeat-x;
          `,
          $css,
        ],
        [$fill, $height, $css],
      )}
      {...props}
    />
  ),
);
