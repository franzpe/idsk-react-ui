import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

import './Input.scss';

export type InputProps = {
  wrapperClassName?: string;
  inputWrapperClassName?: string;
  labelClassName?: string;
  error?: string;
  label?: string | JSX.Element;
  labelBig?: boolean;
  hint?: string | ReactNode;
  prefix?: string | ReactNode;
  suffix?: string | ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapperClassName,
      inputWrapperClassName,
      labelClassName,
      label,
      id,
      hint,
      labelBig,
      'aria-describedby': ariaDescribedBy,
      className,
      error,
      prefix,
      suffix,
      onBlur,
      maxLength = 255,
      ...restProps
    },
    ref
  ) => {
    let labelNode = null;
    if (label) {
      labelNode = (
        <label className={cx('govuk-label', labelClassName, { 'govuk-label--l': labelBig })} htmlFor={id}>
          {label}
        </label>
      );

      if (labelBig) {
        labelNode = <h1 className="govuk-label-wrapper">{labelNode}</h1>;
      }
    }

    return (
      <div className={cx('govuk-form-group', wrapperClassName, { 'govuk-form-group--error': error })}>
        {labelNode}
        {hint && (
          <div id={ariaDescribedBy} className="govuk-hint">
            {hint}
          </div>
        )}
        {error && (
          <span id={id + '-error'} className="govuk-error-message">
            <span className="govuk-visually-hidden">Error:</span> {error}
          </span>
        )}
        <div className={cx('govuk-input__wrapper', inputWrapperClassName)}>
          {prefix && (
            <div className="govuk-input__prefix" aria-hidden="true">
              {prefix}
            </div>
          )}
          <input
            ref={ref}
            id={id}
            className={cx('govuk-input', className, { 'govuk-select--error': error })}
            aria-describedby={ariaDescribedBy}
            onWheel={e => e.preventDefault()}
            maxLength={maxLength}
            onBlur={e => {
              e.target.value = e.target.value.trim();
              if (onBlur) {
                onBlur(e);
              }
            }}
            {...restProps}
          />
          {suffix && (
            <div className="govuk-input__suffix" aria-hidden="true">
              {suffix}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
