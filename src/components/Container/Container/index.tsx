'use client';

import React from 'react';
import styled from 'styled-components';

import { forwardStyledRef } from '@/utils/style';

type Props = {
  type?:
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'p'
    | 'header'
    | 'main'
    | 'article';
} & React.HTMLAttributes<HTMLDivElement>;

const Div = styled.div``;
const Button = styled.button``;
const Input = styled.input``;

export default forwardStyledRef(
  ({ type = 'div', ...props }: Props, ref: React.Ref<HTMLDivElement>) => (
    <Div as={type} ref={ref} {...props} />
  ),
);

type ClickContainerProps = {
  type?: 'button';
} & React.HTMLAttributes<HTMLButtonElement>;

export const ClickContainer = forwardStyledRef(
  (
    { type = 'button', ...props }: ClickContainerProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => <Button as={type} ref={ref} {...props} />,
);

type InputContainerProps = {
  type?: 'input' | 'textarea';
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputContainer = forwardStyledRef(
  (
    { type = 'input', ...props }: InputContainerProps,
    ref: React.Ref<HTMLInputElement>,
  ) => <Input as={type} ref={ref} {...props} />,
);
