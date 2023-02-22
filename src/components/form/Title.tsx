import React, { HTMLAttributes } from 'react';

type Props = { showRequired?: boolean } & HTMLAttributes<HTMLDivElement>;

const FormTitle = ({ children, className, showRequired = true }: Props) => {
  return (
    <h1 className={className}>
      {children}
      {showRequired && (
        <div className="govuk-phase-banner">
          <p className="govuk-phase-banner__content">
            <span className="govuk-phase-banner__text">* Polia označené hviezdičkou sú povinné</span>
          </p>
        </div>
      )}
    </h1>
  );
};

export default FormTitle;
