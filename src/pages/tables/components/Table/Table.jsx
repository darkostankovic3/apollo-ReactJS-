/* eslint-disable react/jsx-props-no-spreading */
// TODO Find this error
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Template,
  TemplatePlaceholder,
  TemplateConnector,
} from '@devexpress/dx-react-core';
import {
  IntegratedPaging,
  PagingState,
  CustomPaging,
  SearchState,
  IntegratedFiltering,
  IntegratedSorting,
  SortingState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table as DevExpressTable,
  PagingPanel,
  TableHeaderRow,
  Toolbar,
  SearchPanel,
} from '@devexpress/dx-react-grid-material-ui';
import CircularProgress from '../../../../components/CircularProgress/CircularProgress';

import TableHeader from '../TableHeader/TableHeader';
import Widget from '../../../../components/Widget/Widget';
import useStyles from './Table.styles';

function determineColumnExtensions(columns) {
  function determineAlignment(type) {
    switch (type) {
      case 'string':
        return 'left';
      case 'number':
      case 'date':
        return 'right';
      default:
        return 'center';
    }
  }
  return columns.map(({ name, type }) => ({
    columnName: name,
    align: determineAlignment(type),
    wordWrapEnabled: type === 'string' ? false : null,
  }));
}

function Table({
  title,
  subtitle,
  columns,
  data,
  hasPaging,
  rowsPerPage,
  hasSearch,
  // for dynamic data sources
  isLoading,
  onCurrentPageChange,
  onSortingChange,
  onSearchChange,
  totalRecordCount,
  // for demo
  demoSelector,
}) {
  const classes = useStyles();
  const tableColumnExtensions = determineColumnExtensions(columns);

  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (page) => {
    if (onCurrentPageChange) {
      onCurrentPageChange(page);
    }
    setCurrentPage(page);
  };

  const [sorting, setSorting] = useState([]);
  const handleSortingChange = (sortingInfo) => {
    if (onSortingChange) {
      onSortingChange(sortingInfo[0]);
    }
    // reset current page when sorting changes
    setCurrentPage(0);
    setSorting(sortingInfo);
  };

  const [searchValue, setSearchState] = useState('');
  const handleSearchChange = (newSearchValue) => {
    if (onSearchChange) {
      onSearchChange(newSearchValue);
    }
    // reset current page when search changes
    setCurrentPage(0);
    setSearchState(newSearchValue);
  };

  const ToolbarComponent = ({ ...restProps }) => (
    <Toolbar.Root
      {...restProps}
      className={classes.toolbar}
    />
  );

  const TableComponentBase = ({ ...restProps }) => (
    <DevExpressTable.Table
      {...restProps}
      className={classes.tableBase}
    />
  );

  return data && columns ? (
    <Widget noContainerPadding className={classes.tableWrapper}>
      <Grid
        rows={data}
        columns={columns}
      >
        <SearchState
          value={searchValue}
          onValueChange={handleSearchChange}
        />
        <SortingState
          sorting={sorting}
          onSortingChange={handleSortingChange}
        />
        {hasPaging && (
          <PagingState
            currentPage={currentPage}
            onCurrentPageChange={handlePageChange}
            pageSize={rowsPerPage}
          />
        )}
        <IntegratedSorting />
        {!onSearchChange && <IntegratedFiltering /> }
        {/* if the total record count is declared, assume the user wants to use an external API */}
        {hasPaging && (() => (totalRecordCount ? (
          <CustomPaging
            totalCount={totalRecordCount}
          />
        ) : (
          <IntegratedPaging />
        )))()}

        <DevExpressTable
          tableComponent={TableComponentBase}
          columnExtensions={tableColumnExtensions}
        />
        <TableHeaderRow showSortingControls={data && data.length} />
        {hasSearch ? (<Toolbar />) : (<Toolbar rootComponent={ToolbarComponent} />)}
        {hasSearch && (<SearchPanel />)}
        <Template name="toolbarContent">
          <TemplateConnector>
            {() => (<TableHeader title={title} subtitle={subtitle} />)}
          </TemplateConnector>
          <TemplatePlaceholder />
          {/* This option selector is for demo purposes and not needed for real usage */}
          {demoSelector}
        </Template>

        { hasPaging && (<PagingPanel />) }
      </Grid>
      {isLoading && (
        <div className={classes.loading}>
          <CircularProgress
            className={classes.loadingIcon}
            type="indeterminate"
          />
        </div>
      )}
    </Widget>
  ) : null;
}

Table.defaultProps = {
  subtitle: '',
  data: [],
  hasSearch: false,
  hasPaging: false,
  isLoading: false,
  onCurrentPageChange: null,
  onSortingChange: null,
  onSearchChange: null,
  totalRecordCount: null,
  demoSelector: null, // empty component
};

Table.propTypes = {
  /* Title in the header of the table */
  title: PropTypes.string.isRequired,
  /* Subtitle in the header of the table */
  subtitle: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  })).isRequired,
  /* The rows of hte table. The data must match with the columns declaration */
  data: PropTypes.arrayOf(PropTypes.object),
  /* Whether to show the search input or not */
  hasSearch: PropTypes.bool,
  hasPaging: PropTypes.bool,
  /* How many rows of data should be shown per page */
  rowsPerPage: PropTypes.number.isRequired,
  /* used to indicate if the data is being loaded such as
  when the data is provided from an external API call */
  isLoading: PropTypes.bool,
  /* callback for when the current selected page changes */
  onCurrentPageChange: PropTypes.func,
  /* callback for when sorting is selected for a column */
  onSortingChange: PropTypes.func,
  /* callback for when a search value is changed */
  onSearchChange: PropTypes.func,
  /* How many total records there are for the table - used for external data fetching */
  totalRecordCount: PropTypes.number,
  /* Used for demo purposes. Not needed for production usage */
  demoSelector: PropTypes.element,
};

export default React.memo(Table);
