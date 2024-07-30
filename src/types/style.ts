import { CSSProperties, RuleSet } from 'styled-components';

export type InnerRuleSet<T> = T extends RuleSet<infer U> ? U : never;

export interface ThemeCommonProps {
  $width?: CSSProperties['width'];
  $height?: CSSProperties['height'];
  $size?: CSSProperties['width'];
  $aspectRatio?: CSSProperties['aspectRatio'];

  $minWidth?: CSSProperties['minWidth'];
  $maxWidth?: CSSProperties['maxWidth'];
  $minHeight?: CSSProperties['minHeight'];
  $maxHeight?: CSSProperties['maxHeight'];

  $padding?: CSSProperties['padding'];
  $paddingTop?: CSSProperties['paddingTop'];
  $paddingRight?: CSSProperties['paddingRight'];
  $paddingBottom?: CSSProperties['paddingBottom'];
  $paddingLeft?: CSSProperties['paddingLeft'];
  $paddingHorizontal?: CSSProperties['paddingLeft'];
  $paddingVertical?: CSSProperties['paddingTop'];
  $boxSizing?: CSSProperties['boxSizing'];

  $margin?: CSSProperties['margin'];
  $marginTop?: CSSProperties['marginTop'];
  $marginRight?: CSSProperties['marginRight'];
  $marginBottom?: CSSProperties['marginBottom'];
  $marginLeft?: CSSProperties['marginLeft'];
  $marginHorizontal?: CSSProperties['marginLeft'];
  $marginVertical?: CSSProperties['marginTop'];

  $color?: CSSProperties['color'];
  $background?: CSSProperties['background'];
  $boxShadow?: CSSProperties['boxShadow'];
  $backdropFilter?: CSSProperties['backdropFilter'];
  $fill?: CSSProperties['fill'];
  $cursor?: boolean | CSSProperties['cursor'];

  $border?: CSSProperties['border'];
  $borderTop?: CSSProperties['borderTop'];
  $borderRight?: CSSProperties['borderRight'];
  $borderBottom?: CSSProperties['borderBottom'];
  $borderLeft?: CSSProperties['borderLeft'];
  $borderRadius?: CSSProperties['borderRadius'];

  $textAlign?: CSSProperties['textAlign'];
  $textDecoration?: CSSProperties['textDecoration'];
  $textDecorationLine?: CSSProperties['textDecorationLine'];
  $wordBreak?: CSSProperties['wordBreak'];
  $whiteSpace?: CSSProperties['whiteSpace'];
  $resize?: CSSProperties['resize'];

  $hidden?: boolean;
  $nonePointerEvents?: boolean;
  $opacity?: CSSProperties['opacity'];
  $position?: CSSProperties['position'];
  $zIndex?: CSSProperties['zIndex'];
  $top?: CSSProperties['top'];
  $right?: CSSProperties['right'];
  $bottom?: CSSProperties['bottom'];
  $left?: CSSProperties['left'];

  $overflow?: boolean | CSSProperties['overflow'];
  $overflowX?: CSSProperties['overflowX'];
  $overflowY?: CSSProperties['overflowY'];

  $display?: CSSProperties['display'];
  $alignItems?: CSSProperties['alignItems'];
  $justifyContent?: CSSProperties['justifyContent'];
  $gap?: CSSProperties['gap'];
  $flexGrow?: boolean | CSSProperties['flexGrow'];
  $flexGrowHorizontal?: boolean;
  $flexGrowVertical?: boolean;
  $flexShrink?: boolean | CSSProperties['flexShrink'];
  $flexWrap?: boolean | CSSProperties['flexWrap'];
  $flexDirection?: CSSProperties['flexDirection'];

  $transform?: CSSProperties['transform'];
  $transition?: boolean | string;

  $objectFit?: CSSProperties['objectFit'];

  $ellipsis?: boolean | number;

  $css?: RuleSet | string | Array<RuleSet | string>;
}
