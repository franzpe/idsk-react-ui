/* eslint-disable no-undef */
import React from 'react';
import cx from 'classnames';

import './Td.scss';

type Props = { isNumeric?: boolean; noWrap?: boolean } & React.HTMLProps<HTMLTableDataCellElement>;

export const Td = ({ children, className, isNumeric, noWrap, ...restProps }: Props) => {
  return (
    <td
      className={cx('govuk-table__cell', className, {
        'govuk-table__cell--numeric': isNumeric,
        'td-no-wrap': noWrap
      })}
      {...restProps}
    >
      {children}
    </td>
  );
};
