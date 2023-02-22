import React, { forwardRef, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

export type CheckboxProps = {
  wrapperClassName?: string;
  labelClassName?: string;
  label?: string | ReactNode;
  isSmall?: boolean;
  labelTitle?: string;
  disableLabelCheck?: boolean;
  labelProps?: Omit<LabelHTMLAttributes<HTMLLabelElement>, 'className' | 'title'>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      wrapperClassName,
      labelClassName,
      label,
      labelTitle,
      id,
      isSmall,
      className,
      disableLabelCheck,
      labelProps,
      ...restProps
    },
    ref
  ) => {
    return (
      <div className={cx('govuk-checkboxes__item', wrapperClassName, { [`govuk-checkboxes--small`]: isSmall })}>
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={cx('govuk-checkboxes__input', className)}
          {...restProps}
        />
        {label && (
          <label
            className={cx('govuk-label govuk-checkboxes__label', labelClassName)}
            {...(!disableLabelCheck ? { htmlFor: id } : { style: {} })}
            title={labelTitle}
            {...labelProps}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

export default Checkbox;
