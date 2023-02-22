/* eslint-disable no-undef */
import React from 'react';
import cx from 'classnames';

import { ButtonLink } from 'components/Button';

import './Th.scss';

type SortDirection = 'ascending' | 'descending';

type Props = {
  isNumeric?: boolean;
  isSortable?: boolean;
  sortDirection?: SortDirection;
} & React.HTMLProps<HTMLTableHeaderCellElement>;

export const Th = ({
  children,
  scope = 'col',
  isNumeric,
  className,
  isSortable,
  sortDirection,
  ...restProps
}: Props) => {
  return (
    <th
      scope={scope}
      className={cx('govuk-table__header th', className, { 'govuk-table__header--numeric': isNumeric })}
      aria-sort={sortDirection}
      {...restProps}
    >
      {!isSortable ? <span>{children}</span> : <ButtonLink className="th-sortable-btn">{children}</ButtonLink>}
    </th>
  );
};
