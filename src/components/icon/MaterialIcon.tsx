import React from 'react';
import cx from 'classnames';

import './MaterialIcon.scss';

type MaterialIconType = 'round' | 'sharp' | 'two-tone' | 'outlined';

type Size = 'tiny' | 'small' | 'normal' | 'medium' | 'big';

export type MaterialIconProps = { type?: MaterialIconType; size?: Size } & React.HTMLAttributes<HTMLElement>;

const MaterialIcon = ({ children, className, type, size = 'normal', ...restProps }: MaterialIconProps) => {
  return (
    <i
      className={cx('material-icons mt', className, { [`material-icons-${type}`]: type, [`mt--${size}`]: size })}
      {...restProps}
    >
      {children}
    </i>
  );
};

export default MaterialIcon;
