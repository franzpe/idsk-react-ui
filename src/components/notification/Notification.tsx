import React, { HTMLAttributes } from 'react';
import { useState } from 'react';
import cx from 'classnames';

import { ButtonLink } from 'components/Button';

import './Notification.scss';

type Props = { container?: boolean } & HTMLAttributes<HTMLDivElement>;

const Notification = ({ children, className, container = true, ...restProps }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className={cx('notification-wrapper', className)} {...restProps}>
      <div className={cx('notification-container', { 'govuk-width-container': container })}>
        <span>{children}</span>
        <ButtonLink className="notification-close material-icons" onClick={() => setIsOpen(false)}>
          close
        </ButtonLink>
      </div>
    </div>
  );
};

export default Notification;
