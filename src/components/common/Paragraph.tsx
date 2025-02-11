import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import './common.scss';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: keyof typeof sizeVariants;
  color?: keyof typeof colorVariants;
  weight?: keyof typeof weightVariants;
  children: ReactNode;
}

const sizeVariants = {
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '18px',
  xl: '20px',
};

const colorVariants = {
  black: 'black',
  white: 'white',
  pink: 'rgb(255, 125, 147)',
  gray: 'rgb(104, 104, 104)',
};

const weightVariants = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  heavy: '900',
};

export default function Paragraph({
  color = 'black',
  size = 'm',
  weight = 'normal',
  children,
}: TextProps) {
  return (
    <p
      className="text-custom"
      style={
        {
          '--text-color': colorVariants[color],
          '--text-size': sizeVariants[size],
          '--text-weight': weightVariants[weight],
        } as CSSProperties
      }
    >
      {children}
    </p>
  );
}
