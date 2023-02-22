import React, { HTMLAttributes } from 'react';

import cx from 'classnames';

type Props = HTMLAttributes<HTMLDivElement>;

const Row = ({ children, className }: Props) => {
  return <div className={cx('govuk-grid-row', className)}>{children}</div>;
};

export default Row;
