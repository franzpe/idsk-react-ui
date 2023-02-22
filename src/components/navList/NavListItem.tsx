import { HTMLAttributes } from 'react';
import cx from 'classnames';

import './NavListItem.scss';

type Props = HTMLAttributes<HTMLLIElement>;

const NavListItem = ({ children, className, ...restProps }: Props) => {
  return (
    <li className={cx('nav-list-item', className)} {...restProps}>
      {children}
    </li>
  );
};

export default NavListItem;
