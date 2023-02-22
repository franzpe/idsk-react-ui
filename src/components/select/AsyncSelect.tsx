import { forwardRef, useState } from 'react';
import RSelect, { Props } from 'react-select/async';
import { GroupTypeBase, OptionTypeBase, OptionsType } from 'react-select';
import cx from 'classnames';
import debounce from 'lodash.debounce';

import FormGroup from 'components/form/FormGroup';

import './Select.scss';

export type SelectProps = {
  label?: string;
  hint?: string;
  error?: string;
  className?: string;
  loadOptions?: (
    inputValue: string,
    callback: (options: ReadonlyArray<OptionsType<any> | GroupTypeBase<any>>) => void
  ) => Promise<ReadonlyArray<OptionsType<any> | GroupTypeBase<any>>> | void;
  wrapperClassName?: string;
} & Props<OptionTypeBase, boolean>;

const AsyncSelect = forwardRef<any, SelectProps>(
  (
    {
      id,
      label,
      hint,
      error,
      className,
      wrapperClassName,
      loadOptions,
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
          loadOptions={loadOptions ? debounce(loadOptions, 800) : undefined}
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

export default AsyncSelect;
