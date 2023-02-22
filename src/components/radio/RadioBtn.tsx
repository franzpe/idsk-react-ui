import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

export type RadioBtnProps = {
  wrapperClassName?: string;
  labelClassName?: string;
  label?: string | ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const RadioBtn = forwardRef<HTMLInputElement, RadioBtnProps>(
  ({ wrapperClassName, labelClassName, label, id, className, ...restProps }, ref) => {
    return (
      <div className={cx('govuk-radios__item', wrapperClassName)}>
        <input ref={ref} id={id} type="radio" className={cx('govuk-radios__input', className)} {...restProps} />
        {label && (
          <label className={cx('govuk-label govuk-radios__label', labelClassName)} htmlFor={id}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

export default RadioBtn;
