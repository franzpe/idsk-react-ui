import { HTMLAttributes } from 'react';
import cx from 'classnames';

type Props = HTMLAttributes<HTMLDivElement>;

const BreadcrumbListItem = ({ children, className }: Props) => {
  return <li className={cx('govuk-breadcrumbs__list-item', className)}>{children}</li>;
};

export default BreadcrumbListItem;
