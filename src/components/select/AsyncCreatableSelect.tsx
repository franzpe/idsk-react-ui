import { forwardRef, useState } from 'react';
import RSelect, { Props } from 'react-select/async-creatable';
import { OptionTypeBase, GroupTypeBase, OptionsType } from 'react-select';
import cx from 'classnames';
import debounce from 'lodash.debounce';

import FormGroup from 'components/form/FormGroup';

import './Select.scss';
import InfoIcon from '../icon/InfoIcon';

export type SelectProps = {
  label?: string;
  hint?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  loadOptions?: (
    inputValue: string,
    callback: (options: ReadonlyArray<OptionsType<any> | GroupTypeBase<any>>) => void
  ) => Promise<ReadonlyArray<OptionsType<any> | GroupTypeBase<any>>> | void;
} & Props<OptionTypeBase, boolean>;

const AsyncCreatableSelect = forwardRef<any, SelectProps>(
  (
    {
      id,
      label,
      hint,
      error,
      className,
      labelHint,
      wrapperClassName,
      'aria-describedby': ariaDescribedBy,
      noOptionsMessage,
      loadingMessage,
      loadOptions,
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
            {labelHint && <InfoIcon title={labelHint} />}
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
          noOptionsMessage={noOptionsMessage || (() => 'Nenašla sa žiadna možnosť')}
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

export default AsyncCreatableSelect;
