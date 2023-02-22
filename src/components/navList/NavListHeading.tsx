import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import './NavListHeading.scss';

const NavListHeading = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  return <h3 className={cx('nav-list-heading', className)}>{children}</h3>;
};

export default NavListHeading;
