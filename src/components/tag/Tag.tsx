import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import './Tag.scss';

export type TagColor =
  | 'grey'
  | 'purple'
  | 'turquoise'
  | 'blue'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'pink'
  | 'green'
  | 'inactive';

export type TagProps = { color?: TagColor } & HTMLAttributes<HTMLElement>;

const Tag = ({ children, className, color, ...restProps }: TagProps) => {
  return (
    <strong className={cx('govuk-tag', className, { [`govuk-tag--${color}`]: color })} {...restProps}>
      {children}
    </strong>
  );
};

export default Tag;
