import { HTMLAttributes } from 'react';
import cx from 'classnames';

import './Breadcrumbs.scss';

const Breadcrumbs = ({ className, children }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cx('govuk-breadcrumbs', 'breadcrumbs', className)}>{children}</div>;
};

export default Breadcrumbs;
