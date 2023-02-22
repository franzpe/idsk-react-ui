import React, { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

import './ButtonLink.scss';

const ButtonLink = ({ children, className, ...restProps }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={cx('button-link', className)} {...restProps}>
      {children}
    </button>
  );
};

export default ButtonLink;
