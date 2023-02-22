import React, { forwardRef, ReactNode } from 'react';
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';
import cx from 'classnames';

import './TextArea.scss';

export type TextAreaProps = {
  wrapperClassName?: string;
  inputWrapperClassName?: string;
  labelClassName?: string;
  error?: string;
  label?: string | JSX.Element;
  labelBig?: boolean;
  hint?: string | ReactNode;
} & TextareaAutosizeProps;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
      minRows = 3,
      maxRows = 10,
      maxLength = 2000,
      className,
      error,
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
        <TextareaAutosize
          ref={ref}
          id={id}
          className={cx('govuk-textarea', className, { 'govuk-textarea--error': error })}
          aria-describedby={ariaDescribedBy}
          minRows={minRows}
          maxRows={maxRows}
          maxLength={maxLength}
          {...restProps}
        />
      </div>
    );
  }
);

export default TextArea;
