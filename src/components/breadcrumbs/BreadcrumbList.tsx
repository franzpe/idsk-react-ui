import { HTMLAttributes } from 'react';
import cx from 'classnames';

const BreadcrumbList = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  return <ol className={cx('govuk-breadcrumbs__list', className)}>{children}</ol>;
};

export default BreadcrumbList;
