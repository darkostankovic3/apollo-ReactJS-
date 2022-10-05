import React from 'react';
import ReactPaginate from 'react-paginate';
import useStyles from './styles';

const Pagination = ({ ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <ReactPaginate
        pageClassName={classes.element}
        activeClassName={classes.activeElement}
        containerClassName={classes.container}
        pageLinkClassName={classes.link}
        activeLinkClassName={classes.activeLink}
        previousClassName={classes.prev}
        nextClassName={classes.next}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
};

export default Pagination;
