import React from 'react';
import cx from 'classnames';

import MaterialIcon, { MaterialIconProps } from './MaterialIcon';

import './InfoIcon.scss';

const InfoIcon = ({ size, className, ...restProps }: MaterialIconProps) => {
  return (
    <MaterialIcon size={size || 'tiny'} className={cx('info-icon', className)} {...restProps}>
      info
    </MaterialIcon>
  );
};

export default InfoIcon;
