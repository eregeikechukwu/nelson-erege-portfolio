"use client";

import { styled } from "styled-components";

const containerValue = ({ theme }) => theme?.breakpoints?.container;

export const Container = styled.div`
  padding-inline: calc(clamp(2.5em, 8vw, 8em) * 2);
  margin-inline: auto;

  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
  @media screen and (max-width: 720px) {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 2rem;
  }
  @media screen and (max-width: 540px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: ${containerValue}) {
    max-width: ${containerValue};
  }
`;

export const Row = styled.div`
  --default-padding: clamp(5em, 21vh, 12em);

  &:nth-child(1) {
    padding-block-end: calc(var(--default-padding) / 2);

    @media screen and (max-width: 720px) {
      padding-bottom: 4rem;
    }
  }

  &:nth-child(2) {
    padding-block-end: calc(var(--default-padding) * 0.5);
  }
`;

export const ImageWrapper = styled.div`
  --image-size: clamp(4.5em, 6.5vw, 8em);

  position: relative;
  width: var(--image-size);
  height: var(--image-size);
`;

export const MainTitle = styled.h2`
  font-size: calc(clamp(3.25em, 7vw, 8em) * 0.875);
  line-height: 1.1;
`;
