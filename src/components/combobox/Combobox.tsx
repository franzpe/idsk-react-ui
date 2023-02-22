import React, { forwardRef, InputHTMLAttributes } from 'react';
import cx from 'classnames';

export type ComboBoxProps = {
  wrapperClassName?: string;
  labelClassName?: string;
  error?: string;
  label?: string;
  listId?: string;
  options?: OptionType[];
} & InputHTMLAttributes<HTMLInputElement>;

type OptionType = {
  id: string;
  name: string;
};

const ComboBox = forwardRef<HTMLInputElement, ComboBoxProps>(
  ({ wrapperClassName, labelClassName, label, id, options, className, listId, error, ...restProps }, ref) => {
    return (
      <div className={cx('govuk-form-group', wrapperClassName, { 'govuk-form-group--error': error })}>
        {label && (
          <label className={cx('govuk-label', labelClassName)} htmlFor={id}>
            {label}
          </label>
        )}
        {error && (
          <span id={id + '-error'} className="govuk-error-message">
            <span className="govuk-visually-hidden">Error:</span> {error}
          </span>
        )}
        <input
          list={listId}
          ref={ref}
          id={id}
          className={cx('govuk-input', className, { 'govuk-input--error': error })}
          {...restProps}
        />
        <datalist id={listId}>
          {options?.map((opt, i) => {
            return <option key={opt.id}>{opt.name}</option>;
          })}
        </datalist>
      </div>
    );
  }
);

export default ComboBox;
