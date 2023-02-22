import React, { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';
import debounce from 'lodash.debounce';

import { noop } from 'utils';
import { BUTTON_DEBOUNCE_TIMEOUT_IN_SECONDS } from './Button';

import './ButtonIcon.scss';

type Color = 'green' | 'dark-red' | 'inherit';

type Props = {
  color?: Color;
  debounceTimeoutInSeconds?: number;
  disableDebounce?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonIcon = ({
  children,
  onClick,
  className,
  color,
  debounceTimeoutInSeconds = BUTTON_DEBOUNCE_TIMEOUT_IN_SECONDS,
  disableDebounce,
  ...restProps
}: Props) => {
  const debouncedClick = debounce(onClick || noop, debounceTimeoutInSeconds * 1000, {
    leading: true,
    trailing: false
  });

  return (
    <button
      className={cx('button-icon', className, { [`button-icon--${color}`]: color })}
      onClick={disableDebounce ? onClick : debouncedClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
