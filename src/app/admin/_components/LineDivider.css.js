import { style } from '@vanilla-extract/css';

export const divider = style({
  display: 'flex',
  width: '100%',
  borderBottom: '1px solid #e5e7eb', // border-b-1 text-gray-200
  marginTop: '16px', // my-4 (top)
  marginBottom: '16px', // my-4 (bottom)
});
