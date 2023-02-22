import React from 'react';
import cx from 'classnames';

export const Thead = ({ children, className, ...restProps }: React.HTMLProps<HTMLTableSectionElement>) => {
  return (
    <thead className={cx('govuk-table__head', className)} {...restProps}>
      {children}
    </thead>
  );
};
