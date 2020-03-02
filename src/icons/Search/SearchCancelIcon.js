import React from 'react';
import { colors } from 'colors';

export const SearchCancelIcon = props => (
  <svg viewBox="0 0 20 20" stroke={colors.lightGray} fill="none" {...props}>
    <g strokeWidth="2">
      <circle cx="10" cy="10" r="10" fill="white" />
      <path d="M 5,5 L 15,15 M 15,5 L 5,15" />
    </g>
  </svg>
);
