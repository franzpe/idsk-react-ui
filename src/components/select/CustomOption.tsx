import React from 'react';
import { components, OptionProps } from 'react-select';
import { OptionType } from './SelectTypes';

import './CustomOption.scss';

/**
 *
 * More effective for large data sets
 *
 * @param param0
 * @returns
 */
const CustomOption = ({ children, ...props }: OptionProps<OptionType<any>, any, any>) => {
  // eslint-disable-next-line no-unused-vars
  const { onMouseMove, onMouseOver, ...rest } = props.innerProps;

  const newProps = { ...props, innerProps: rest };

  return (
    <components.Option {...(newProps as any)} className="custom-option">
      {children}
    </components.Option>
  );
};

export default CustomOption;
