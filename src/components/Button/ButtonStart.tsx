import React from 'react';
import cx from 'classnames';

import Button, { ButtonProps } from './Button';

const ButtonStart = ({ children, className, ...restProps }: ButtonProps) => {
  return (
    <Button className={cx('idsk-button--start', className)} {...restProps}>
      {children}
      <svg
        className="govuk-button__start-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="17.5"
        height="19"
        viewBox="0 0 33 40"
        aria-hidden="true"
        focusable="false"
      >
        <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
      </svg>
    </Button>
  );
};

export default ButtonStart;
