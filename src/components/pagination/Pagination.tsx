import cx from 'classnames';
import { ButtonLink } from 'components/Button';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.scss';

/**
 *
 * {@link https://hmcts-design-system.herokuapp.com/components/pagination}
 */

const PAGE_COUNT = 10;

interface PaginationProps {
  currentPage?: number;
  pageCount?: number;
  perPage?: number;
  onPageChange?: (pageNum: number) => void;
  isLoading?: boolean;
  total?: number;
}

const Pagination = ({
  pageCount = PAGE_COUNT,
  onPageChange,
  currentPage = 0,
  perPage = 10,
  isLoading,
  total
}: PaginationProps) => {
  // Zero indexed page
  const [currPage, setCurrPage] = useState(currentPage);
  const [goTo, setGoTo] = useState((currentPage + 1).toString());

  // Set page from outside of the component
  useEffect(() => {
    if (currentPage !== currPage) {
      setCurrPage(currentPage);
      setGoTo((currentPage + 1).toString());
    }
  }, [currentPage]);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrPage(selectedItem.selected);
    setGoTo((selectedItem.selected + 1).toString());

    if (onPageChange) {
      onPageChange(selectedItem.selected);
    }
  };

  const handleGoToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setGoTo(value);
  };

  const confirmGoTo = () => {
    const goToCasted = Number(goTo);

    if (goToCasted && goToCasted >= 1 && goToCasted <= pageCount) {
      setCurrPage(Number(goTo) - 1);

      if (onPageChange) {
        onPageChange(Number(goTo) - 1);
      }
    } else {
      setGoTo((currPage + 1).toString());
    }
  };

  const handleGoToBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    confirmGoTo();
  };

  const handleGoToKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      confirmGoTo();
    }
  };

  const showTotal = total !== undefined && total > 0;

  return (
    <nav className={cx('pagination', { ['pagination-disabled']: isLoading })} id="pagination-label">
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <p className="govuk-visually-hidden" aria-labelledby="pagination-label">
          Pagination navigation
        </p>

        <ButtonLink
          role="button"
          aria-disabled="true"
          className="pagination__button pagination__link"
          onClick={() => handlePageChange({ selected: 0 })}
        >
          <i className="fa fa-angle-double-left" />
        </ButtonLink>

        <ReactPaginate
          breakLabel={null}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          marginPagesDisplayed={0}
          containerClassName="pagination__list"
          pageLinkClassName="pagination__link"
          pageClassName="pagination__item pagination__item--page"
          nextLabel=""
          nextClassName="pagination__item"
          nextLinkClassName="pagination__link fa fa-angle-right pagination__button"
          previousLabel=""
          previousClassName="pagination__item "
          previousLinkClassName="pagination__link fa fa-angle-left pagination__button"
          activeLinkClassName="pagination__item--active"
          activeClassName="pagination__item pagination__item--active"
          breakClassName="pagination__item pagination__item--dots"
          onPageChange={handlePageChange}
          forcePage={currPage}
        />

        <ButtonLink
          role="button"
          aria-disabled="true"
          className="pagination__button pagination__link "
          onClick={() => {
            if (pageCount > 1) {
              handlePageChange({ selected: pageCount - 1 });
            }
          }}
        >
          <i className="fa fa-angle-double-right" />
        </ButtonLink>

        <div className="pagination__item pagination__go-to">
          <span className="pagination__go-to--label">Ísť na: </span>
          <input
            className="govuk-input pagination__go-to--input"
            type="number"
            value={goTo}
            onChange={handleGoToChange}
            onBlur={handleGoToBlur}
            onKeyPress={handleGoToKeyPress}
          />
        </div>
      </div>
      {showTotal && (
        <p className="pagination__results">
          Záznamy <b>{currPage * perPage + 1}</b> až{' '}
          <b>
            {currPage + 1 === pageCount
              ? total! - currPage * perPage + currPage * perPage
              : (currPage + 1) * perPage}
          </b>{' '}
          z <b>{total}</b>
        </p>
      )}
    </nav>
  );
};

export default Pagination;
