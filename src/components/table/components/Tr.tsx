import React from 'react';
import cx from 'classnames';

export const Tr = ({ children, className, ...restProps }: React.HTMLProps<HTMLTableRowElement>) => {
  return (
    <tr className={cx('govuk-table__row', className)} {...restProps}>
      {children}
    </tr>
  );
};
