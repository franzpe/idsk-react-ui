import React from 'react';
import cx from 'classnames';

const Table = ({ children, className, ...restProps }: React.HTMLProps<HTMLTableElement>) => {
  return (
    <table className={cx('govuk-table', className)} {...restProps}>
      {children}
    </table>
  );
};

export default Table;
