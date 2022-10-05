import React, { useState, useEffect } from 'react';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import {
  generateRows,
  employeeTaskValues,
  globalSalesValues,
} from './demo-data/generator';
import makeFakeServer from './demo-data/fakeServer/fakeServer';
import {
  HeaderSubtitleDisplayOptions,
  DynamicRowsOptions,
  PaginationOptions,
} from './demo-data/DemoSelectors/DemoSelectors';

import Widget from '../../components/Widget/Widget';
import Table from './components/Table/Table';

function renderBasicTable() {
  const originalTitle = 'Apollo Table';
  const originalSubtitle = 'Basic Table Example';

  const [header, setHeader] = useState({
    title: originalTitle,
    subtitle: originalSubtitle,
  });
  const [dropDownSelection, setDropDownSelection] = useState(1);

  function onDropDownSelection(dropDownSelectionValue) {
    if (dropDownSelectionValue === 2) {
      setHeader({ title: originalTitle, subtitle: '' });
    } else {
      setHeader({ title: originalTitle, subtitle: originalSubtitle });
    }
    setDropDownSelection(dropDownSelectionValue);
  }

  return (
    <Table
      title={header.title}
      subtitle={header.subtitle}
      columns={[
        { name: 'priority', title: 'Priority', type: 'string' },
        { name: 'status', title: 'Status', type: 'string' },
        { name: 'subject', title: 'Subject', type: 'string' },
        { name: 'startDate', title: 'Start Date', type: 'date' },
        { name: 'dueDate', title: 'Due Date', type: 'date' },
      ]}
      data={
        generateRows({ columnValues: employeeTaskValues, length: 8 })
      }
      rowsPerPage={10}
      // {/* This attribute is for demo purposes and is not needed for real usage */}
      demoSelector={
        (
          <HeaderSubtitleDisplayOptions
            dropDownSelection={dropDownSelection}
            onDropDownSelection={onDropDownSelection}
          />
)
      }
    />
  );
}

function renderEmptyTable() {
  const [dropDownSelection, setDropDownSelection] = useState(0);
  const [data, setData] = useState(generateRows({ columnValues: globalSalesValues, length: 0 }));
  const [subtitle, setSubtitle] = useState('No Data to Display');
  const [rowsPerPage, setRowsPerPage] = useState(0);

  function onDropDownSelection(dropDownSelectionValue) {
    setData(generateRows({ columnValues: globalSalesValues, length: dropDownSelectionValue }));
    setRowsPerPage(dropDownSelectionValue);
    if (dropDownSelectionValue === 1) {
      setSubtitle('One Row of Data Displayed');
    } else if (dropDownSelectionValue === 10) {
      setSubtitle('Ten Rows of Data Displayed');
    } else {
      setSubtitle('No Data to Display');
    }
    setDropDownSelection(dropDownSelectionValue);
  }

  return (
    <Table
      title="Dynamic Rows"
      subtitle={subtitle}
      columns={[
        { name: 'region', title: 'Region', type: 'string' },
        { name: 'sector', title: 'Sector', type: 'string' },
        { name: 'customer', title: 'Customer', type: 'string' },
        { name: 'product', title: 'Product', type: 'string' },
        { name: 'amount', title: 'Sale Amount', type: 'number' },
      ]}
      data={data}
      rowsPerPage={rowsPerPage}
        // {/* This attribute is for demo purposes and is not needed for real usage */}
      demoSelector={
          (
            <DynamicRowsOptions
              dropDownSelection={dropDownSelection}
              onDropDownSelection={onDropDownSelection}
            />
  )
        }
    />
  );
}

function renderPaginationTable() {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <Table
      title="Table with Pagination"
      columns={[
        { name: 'priority', title: 'Priority', type: 'string' },
        { name: 'status', title: 'Status', type: 'string' },
        { name: 'subject', title: 'Subject', type: 'string' },
        { name: 'startDate', title: 'Start Date', type: 'date' },
        { name: 'dueDate', title: 'Due Date', type: 'date' },
      ]}
      data={generateRows({ columnValues: employeeTaskValues, length: 88 })}
      hasPaging
      rowsPerPage={rowsPerPage}
        // {/* This attribute is for demo purposes and is not needed for real usage */}
      demoSelector={
          (
            <PaginationOptions
              dropDownSelection={rowsPerPage}
              onDropDownSelection={setRowsPerPage}
            />
  )
        }
    />
  );
}

// this simulates a server running on the backend
makeFakeServer();
// construct a well formed URL for fetching table data
const createApiUrl = (size, skip, sortingColumn, sortingDirection, search) => {
  const BASE = '/api/table';
  const hasParams = size || skip;
  if (hasParams) {
    const params = [];
    if (size != null) {
      params.push(`size=${size}`);
    }
    if (skip != null) {
      params.push(`skip=${skip}`);
    }
    if (sortingColumn) {
      params.push(`sortingColumn=${sortingColumn}`);
    }
    if (sortingDirection) {
      params.push(`sortingDirection=${sortingDirection}`);
    }
    if (search) {
      params.push(`search=${search}`);
    }
    const queryParams = params.join('&');
    return `${BASE}?${queryParams}`;
  }
  return BASE;
};

function renderDynamicDataExample() {
  const pageSize = 10;
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalRecordCount, setTotalRecordCount] = useState(0);
  const [sortingColumn, setSortingColumn] = useState();
  const [sortingDirection, setSortingDirection] = useState();
  const [searchTerm, setSearchTerm] = useState();

  function loadData(size, skip, columnName, direction, search) {
    setLoading(true);
    const apiURL = createApiUrl(size, skip, columnName, direction, search);
    fetch(apiURL)
      .then((res) => res.json())
      .then(({ data, total }) => {
        setTableData(data);
        setTotalRecordCount(total);
        setLoading(false);
      });
  }

  useEffect(() => {
    // initial load
    loadData(pageSize, currentPage);
  }, []);

  const onPageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    loadData(pageSize, selectedPage, sortingColumn, sortingDirection, searchTerm);
  };

  const onSortingChange = ({ columnName, direction }) => {
    setSortingColumn(columnName);
    setSortingDirection(direction);
    loadData(pageSize, 0, columnName, direction, searchTerm);
  };

  const onSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
    loadData(pageSize, 0, sortingColumn, sortingDirection, searchValue);
  };

  return (
    <Table
      title="Table with Dynamnic Data Source"
      columns={[
        { name: 'priority', title: 'Priority', type: 'string' },
        { name: 'status', title: 'Status', type: 'string' },
        { name: 'subject', title: 'Subject', type: 'string' },
        { name: 'startDate', title: 'Start Date', type: 'date' },
        { name: 'dueDate', title: 'Due Date', type: 'date' },
      ]}
      data={tableData}
      hasPaging
      rowsPerPage={pageSize}
      isLoading={loading}
      onCurrentPageChange={onPageChange}
      onSortingChange={onSortingChange}
      onSearchChange={onSearchChange}
      totalRecordCount={totalRecordCount}
      hasSearch
    />
  );
}
export default function ApolloTables() {
  return (
    <>
      <Grid container spacing={6}>
        {/* BASIC TABLE */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {renderBasicTable()}
        </Grid>
        {/* EMPTY TABLE */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {renderEmptyTable()}
        </Grid>
        {/* TABLE WITH PAGINATION */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {renderPaginationTable()}
        </Grid>
        {/* TABLE WITH SEARCH */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Table
            title="Table with Search"
            subtitle="This is a really long subtitle. This shows how long subtitles will look in the app."
            columns={[
              { name: 'priority', title: 'Priority', type: 'string' },
              { name: 'status', title: 'Status', type: 'string' },
              { name: 'subject', title: 'Subject', type: 'string' },
              { name: 'startDate', title: 'Start Date', type: 'date' },
              { name: 'dueDate', title: 'Due Date', type: 'date' },
            ]}
            data={generateRows({ columnValues: employeeTaskValues, length: 10 })}
            rowsPerPage={10}
            hasSearch
          />
        </Grid>
        {/* TABLE WITH EXTERNAL DATA */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {renderDynamicDataExample()}
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Widget noBodyPadding disableWidgetMenu>
            <Typography display="inline">
              <b>Designer/Dev Notes:</b>

            </Typography>
            <Typography display="inline">
              <br />
              Examples:
              <a href="https://devexpress.github.io/devextreme-reactive/demos/">Link to Demos</a>
              <br />
              Features:
              <a href="https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/getting-started/">Link to Demos</a>
            </Typography>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
