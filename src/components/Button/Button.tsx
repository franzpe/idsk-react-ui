import { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';
import debounce from 'lodash.debounce';

import { noop } from '../../utils/index';
import { DEBOUNCE_TIMEOUT_IN_SECONDS } from '../../utils/hooks/useDebouncedSubmit';
import './Button.scss';

type Color = 'tertiary' | 'secondary' | 'warning';

export const BUTTON_DEBOUNCE_TIMEOUT_IN_SECONDS = DEBOUNCE_TIMEOUT_IN_SECONDS;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  disableDebounce?: boolean;
  debounceTimeoutInSeconds?: number;
}

const Button = ({
  children,
  className,
  color,
  debounceTimeoutInSeconds = BUTTON_DEBOUNCE_TIMEOUT_IN_SECONDS,
  disableDebounce,
  onClick,
  ...restProps
}: ButtonProps) => {
  const debouncedClick = debounce(onClick || noop, debounceTimeoutInSeconds * 1000, {
    leading: true,
    trailing: false
  });

  return (
    <button
      className={cx('button idsk-button ', className, { [`idsk-button--${color}`]: color })}
      onClick={disableDebounce ? onClick : debouncedClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
