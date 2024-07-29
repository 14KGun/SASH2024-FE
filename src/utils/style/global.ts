import { css } from 'styled-components';

import PretendardBoldWoff from '@/assets/fonts/Pretendard-Bold.woff';
import PretendardBoldWoff2 from '@/assets/fonts/Pretendard-Bold.woff2';
import PretendardMediumWoff from '@/assets/fonts/Pretendard-Medium.woff';
import PretendardMediumWoff2 from '@/assets/fonts/Pretendard-Medium.woff2';
import PretendardSemiBoldWoff from '@/assets/fonts/Pretendard-SemiBold.woff';
import PretendardSemiBoldWoff2 from '@/assets/fonts/Pretendard-SemiBold.woff2';

export default css`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;

    -webkit-font-smoothing: antialiased;
    font-style: inherit;
    font-variant: inherit;
    font-weight: inherit;
    font-stretch: inherit;
    line-height: inherit;
    font-optical-sizing: inherit;
    font-kerning: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    box-sizing: border-box;
  }

  button,
  input,
  textarea {
    text-align: left;
    outline: none;
    box-shadow: none;
    background: none;
    border: none;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBoldWoff2}) format('woff2');
    src: url(${PretendardBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardSemiBoldWoff2}) format('woff2');
    src: url(${PretendardSemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardMediumWoff2}) format('woff2');
    src: url(${PretendardMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
`;
