'use client';

import { styled } from 'styled-components';

import { Center } from '@/components';

export const CursorShape = styled(Center)`
  color: white;
  width: 7.6rem;
  height: 7.6rem;
  border-radius: 100vmax;
  font-size: 1.275rem;
  line-height: 1.25rem;
  position: fixed;
  z-index: 2;
  pointer-events: none;
`;
