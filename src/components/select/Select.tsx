import { forwardRef, useState } from 'react';
import RSelect, { OptionTypeBase, Props } from 'react-select';
import cx from 'classnames';

import './Select.scss';
import FormGroup from 'components/form/FormGroup';

export type SelectProps = {
  label?: string;
  hint?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
} & Props<OptionTypeBase, boolean>;

const Select = forwardRef<any, SelectProps>(
  (
    {
      id,
      label,
      hint,
      error,
      className,
      wrapperClassName,
      'aria-describedby': ariaDescribedBy,
      loadingMessage,
      ...restProps
    },
    ref
  ) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <FormGroup className={cx(wrapperClassName, { 'govuk-form-group--error': error })}>
        {label && (
          <label className={cx('govuk-label')} htmlFor={id}>
            {label}
          </label>
        )}
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
        <RSelect
          ref={ref}
          id={id}
          className={cx('react-select-container', className, { 'govuk-input--error': error })}
          classNamePrefix="react-select"
          noOptionsMessage={() => 'Nenašla sa žiadna možnosť'}
          aria-describedby={ariaDescribedBy}
          onKeyDown={e => {
            if (e.key === 'Enter' && !isMenuOpen) {
              e.preventDefault();
            }
          }}
          loadingMessage={(obj => 'Vyhľadávanie...') || loadingMessage}
          menuIsOpen={isMenuOpen}
          onMenuOpen={() => setIsMenuOpen(true)}
          onMenuClose={() => setIsMenuOpen(false)}
          {...restProps}
        />
      </FormGroup>
    );
  }
);

export default Select;
