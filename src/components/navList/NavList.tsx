import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import './NavList.scss';

const NavList = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  return <ul className={cx('nav-list', className)}>{children}</ul>;
};

export default NavList;
