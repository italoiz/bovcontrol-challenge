import camelCase from 'lodash.camelcase';

import { BoxProps } from './Box';

export const getLayoutProps = (props: Partial<BoxProps>) => {
  const layoutProps = ['flex', 'justify-content', 'align-self', 'align-items'];
  return layoutProps
    .map(prop => {
      if (!props[camelCase(prop)]) return null;
      return `${prop}: ${props[camelCase(prop)]};`;
    })
    .filter(Boolean)
    .join('');
};

export const getSpacingProps = (props: Partial<BoxProps>) => {
  const spacingProps = [
    'padding',
    'margin',
    'padding-top',
    'padding-bottom',
    'padding-left',
    'padding-right',
    'margin-top',
    'margin-bottom',
    'margin-left',
    'margin-right',
    'padding-vertical',
    'padding-horizontal',
  ];
  return spacingProps
    .map(prop => {
      if (!props[camelCase(prop)]) return null;
      return `${prop}: ${props[camelCase(prop)]}px;`;
    })
    .filter(Boolean)
    .join('');
};

export const getBackgroundProps = (props: Partial<BoxProps>) => {
  const spacingProps = ['background-color'];
  return spacingProps
    .map(prop => {
      if (!props[camelCase(prop)]) return null;
      return `${prop}: ${props[camelCase(prop)]}px;`;
    })
    .filter(Boolean)
    .join('');
};
