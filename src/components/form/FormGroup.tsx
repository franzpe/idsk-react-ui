import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

const FormGroup = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cx('govuk-form-group', className)}>{children}</div>;
};

export default FormGroup;
