import React from 'react';
import cx from 'classnames';

export const Tbody = ({ children, className, ...restProps }: React.HTMLProps<HTMLTableSectionElement>) => {
  return (
    <tbody className={cx('govuk-table__body', className)} {...restProps}>
      {children}
    </tbody>
  );
};
