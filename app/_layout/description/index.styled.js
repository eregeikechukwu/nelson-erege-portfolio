"use client";

import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: stretch;

  justify-content: space-between;
  gap: 2.5rem;
  padding-block: clamp(4em, 12vw, 20em) clamp(5em, 14vh, 16em);

  @media screen and (min-width: 1024px) {
    padding-inline: 7rem;
  }

  @media screen and (max-width: 720px) {
    padding-block: clamp(4em, 12vw, 20em) clamp(5em, 14vh, 6em);
    padding-inline: clamp(2.5em, 4vw, 8em);
    flex-wrap: wrap;
  }

  @media screen and (max-width: 540px) {
    padding-inline: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    flex-wrap: revert;
    margin: 0 auto 5rem;
    width: 90%;
  }
`;

export const Title = styled.h4`
  font-size: clamp(1.5em, 2.2vw, 3em);
  line-height: 1.45;
`;
