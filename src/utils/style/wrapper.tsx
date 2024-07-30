import React from 'react';
import styled from 'styled-components';

import type { ThemeCommonProps } from '@/types/style';

import { theme } from '.';

export const forwardStyled = <T extends any>(
  c: React.FC<T>,
): React.FC<T & ThemeCommonProps> =>
  styled(c)<ThemeCommonProps>`
    width: ${({ $width, $size, $flexGrowHorizontal }) =>
      $width || $size || ($flexGrowHorizontal ? '0' : undefined)};
    height: ${({ $height, $size, $flexGrowVertical }) =>
      $height || $size || ($flexGrowVertical ? '0' : undefined)};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};

    min-width: ${({ $minWidth }) => $minWidth};
    max-width: ${({ $maxWidth }) => $maxWidth};
    min-height: ${({ $minHeight }) => $minHeight};
    max-height: ${({ $maxHeight }) => $maxHeight};

    padding: ${({ $padding }) => $padding};
    padding-top: ${({ $paddingTop, $paddingVertical }) =>
      $paddingTop || $paddingVertical};
    padding-right: ${({ $paddingRight, $paddingHorizontal }) =>
      $paddingRight || $paddingHorizontal};
    padding-bottom: ${({ $paddingBottom, $paddingVertical }) =>
      $paddingBottom || $paddingVertical};
    padding-left: ${({ $paddingLeft, $paddingHorizontal }) =>
      $paddingLeft || $paddingHorizontal};
    box-sizing: ${({ $boxSizing = 'border-box' }) => $boxSizing};

    margin: ${({ $margin }) => $margin};
    margin-top: ${({ $marginTop, $marginVertical }) =>
      $marginTop || $marginVertical};
    margin-right: ${({ $marginRight, $marginHorizontal }) =>
      $marginRight || $marginHorizontal};
    margin-bottom: ${({ $marginBottom, $marginVertical }) =>
      $marginBottom || $marginVertical};
    margin-left: ${({ $marginLeft, $marginHorizontal }) =>
      $marginLeft || $marginHorizontal};

    color: ${({ $color }) => $color || theme.color.black};
    background: ${({ $background }) => $background};
    box-shadow: ${({ $boxShadow }) => $boxShadow};
    backdrop-filter: ${({ $backdropFilter }) => $backdropFilter};
    fill: ${({ $fill }) => $fill};
    cursor: ${({ $cursor = false }) =>
      typeof $cursor === 'boolean'
        ? $cursor
          ? 'pointer'
          : undefined
        : $cursor};

    border: ${({ $border }) => $border};
    border-top: ${({ $borderTop }) => $borderTop};
    border-right: ${({ $borderRight }) => $borderRight};
    border-bottom: ${({ $borderBottom }) => $borderBottom};
    border-left: ${({ $borderLeft }) => $borderLeft};
    border-radius: ${({ $borderRadius }) => $borderRadius};

    text-align: ${({ $textAlign }) => $textAlign};
    text-decoration: ${({ $textDecoration }) => $textDecoration};
    text-decoration-line: ${({ $textDecorationLine }) => $textDecorationLine};
    letter-spacing: 0;
    word-break: ${({ $wordBreak = 'break-word' }) => $wordBreak};
    white-space: ${({ $whiteSpace }) => $whiteSpace};
    resize: ${({ $resize }) => $resize};

    visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
    pointer-events: ${({ $nonePointerEvents }) =>
      $nonePointerEvents ? 'none' : undefined};
    opacity: ${({ $opacity }) => $opacity};
    position: ${({ $position }) => $position};
    z-index: ${({ $zIndex }) => $zIndex};
    top: ${({ $top }) => $top};
    right: ${({ $right }) => $right};
    bottom: ${({ $bottom }) => $bottom};
    left: ${({ $left }) => $left};

    overflow: ${({ $overflow = false }) =>
      typeof $overflow === 'boolean'
        ? $overflow
          ? 'hidden'
          : undefined
        : $overflow};
    overflow-x: ${({ $overflowX }) => $overflowX};
    overflow-y: ${({ $overflowY }) => $overflowY};

    && {
      display: ${({ $display }) => $display};
      align-items: ${({ $alignItems }) => $alignItems};
      justify-content: ${({ $justifyContent }) => $justifyContent};
      gap: ${({ $gap }) => $gap};
      flex-grow: ${({
        $flexGrow = false,
        $flexGrowHorizontal,
        $flexGrowVertical,
      }) =>
        typeof $flexGrow === 'boolean'
          ? $flexGrow || $flexGrowHorizontal || $flexGrowVertical
            ? 1
            : undefined
          : $flexGrow};
      flex-shrink: ${({ $flexShrink = false }) =>
        typeof $flexShrink === 'boolean'
          ? $flexShrink
            ? 1
            : undefined
          : $flexShrink};
      flex-wrap: ${({ $flexWrap = false }) =>
        $flexWrap
          ? typeof $flexWrap === 'boolean'
            ? 'wrap'
            : $flexWrap
          : undefined};
      flex-direction: ${({ $display, $flexDirection = 'row' }) =>
        $display === 'flex' ? $flexDirection : undefined};
    }
    & > * {
      flex-grow: ${({ $display }) => ($display === 'flex' ? 0 : undefined)};
      flex-shrink: ${({ $display }) => ($display === 'flex' ? 0 : undefined)};
    }

    object-fit: ${({ $objectFit }) => $objectFit};

    ${({ $ellipsis }) =>
      typeof $ellipsis === 'number'
        ? theme.effect.ellipsisWithLines($ellipsis)
        : !!$ellipsis && theme.effect.ellipsis}

    transform: ${({ $transform }) => $transform};
    transition: ${({ $transition = false }) =>
      $transition
        ? `${typeof $transition === 'boolean' ? 'all' : $transition} ${theme.duration} ease-in-out`
        : undefined};

    ${({ $css }) => $css}
  ` as React.FC<T & ThemeCommonProps>;

export const forwardStyledRef = <T, P>(
  c: React.ForwardRefRenderFunction<T, P>,
): React.FC<
  React.ComponentProps<
    React.ForwardRefExoticComponent<
      React.PropsWithoutRef<P> & React.RefAttributes<T>
    >
  > &
    ThemeCommonProps
> => forwardStyled(React.forwardRef<T, P>(c));

type ForwardAttrComponentProps<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export const forwardAttr = <
  T extends React.ComponentType<any>,
  P extends Partial<React.ComponentProps<T>>,
>(
  Component: T,
  defaultProps: P,
) => {
  const ForwardedComponent = (
    _props: ForwardAttrComponentProps<React.ComponentProps<T>, keyof P>,
  ) => {
    const props = { ...defaultProps, ..._props } as React.ComponentProps<T>;
    return <Component {...props} />;
  };
  return ForwardedComponent;
};
