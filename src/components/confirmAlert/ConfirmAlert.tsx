import { MouseEvent } from 'react';
import { ReactConfirmAlertProps } from 'react-confirm-alert';

import { Button, ButtonLink } from 'components/Button';

import 'react-confirm-alert/src/react-confirm-alert.css';
import './ConfirmAlert.scss';

//Designed by https://github.com/alphagov/govuk-design-system-backlog/issues/30

export type ReactConfirmAlertPropsExtended = {
  buttons?: { label: string; onClick?: () => void; className?: string; asLink?: boolean }[];
} & Omit<ReactConfirmAlertProps, 'buttons'>;

const ConfirmAlert = ({
  title,
  message,
  buttons,
  onClose
}: ReactConfirmAlertPropsExtended & { onClose: () => void }) => {
  const handleBtnClick = (onClick?: () => void) => (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick();
    }
    onClose();
  };

  return (
    <div className="confirm-alert-body">
      {title && <h3 className="govuk-heading-m">{title}</h3>}
      {message && <p>{message}</p>}
      <div className="confirm-alert-buttons">
        {buttons?.map(({ asLink, onClick, label }, idx) => {
          return !asLink ? (
            <Button key={idx} onClick={handleBtnClick(onClick)}>
              {label}
            </Button>
          ) : (
            <ButtonLink key={idx} onClick={handleBtnClick(onClick)}>
              {label}
            </ButtonLink>
          );
        })}
      </div>
    </div>
  );
};

export default ConfirmAlert;
