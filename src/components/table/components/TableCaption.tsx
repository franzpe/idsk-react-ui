import React from 'react';
import cx from 'classnames';

import './TableCaption.scss';

type Size = 's' | 'm' | 'l' | 'xl';

type XProps = {
  size?: Size;
} & Omit<React.HTMLProps<HTMLTableCaptionElement>, 'size'>;

export const TableCaption = ({ children, className, size, ...restProps }: XProps) => {
  return (
    <caption
      className={cx('govuk-table__caption', className, { [`govuk-table__caption--${size}`]: size })}
      {...restProps}
    >
      {children}
    </caption>
  );
};
