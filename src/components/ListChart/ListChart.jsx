/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import {
  Grid,
  TableHeaderRow,
  TableRowDetail,
  Table,
} from '@devexpress/dx-react-grid-material-ui';
import { zipObj } from 'ramda';

import { DataTypeProvider, RowDetailState } from '@devexpress/dx-react-grid';
import RowDetail from './RowDetail';

// https://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects
// https://stackoverflow.com/questions/5223/length-of-a-javascript-object
const getLargestObjectInArray = (array) => Math.max(...array.map((o) => Object.keys(o).length));

const DataProvider = ({ columns }) => (
  <>
    {columns.map(({ name: colName }) => (
      <DataTypeProvider
        key={`data-for-${colName}`}
        formatterComponent={({ value }) => value}
        for={[colName]}
      />
    ))}
  </>
);

function ListChart(props) {
  const {
    className, rows, columnNames, rowDetail = false, showHeader = true,
  } = props;

  const numOfCols = getLargestObjectInArray(rows);

  const filledColumnNames = columnNames || Array(numOfCols).fill().map((_, i) => `col${i}`);

  const columns = Array(numOfCols).fill().map((_, i) => ({ name: filledColumnNames[i], title: '' }));

  // rename rows to be consistent
  // https://stackoverflow.com/questions/22015684/how-do-i-zip-two-arrays-in-javascript
  const consistentRows = rows.map(
    (row) => zipObj(
      columns.map(
        (column) => column.name,
      ), Object.values(row),
    ),
  );

  const [expandedRowIds, setExpandedRowIds] = useState([]);

  const columnExtensions = numOfCols === 1
    ? [{ columnName: filledColumnNames[0], wordWrapEnabled: true }]
    : [
      ...filledColumnNames.slice(0, -1).map(
        (colName) => (
          { columnName: colName, wordWrapEnabled: true }
        ),
      ),
      {
        columnName: filledColumnNames[filledColumnNames.length - 1],
        align: 'right',
        wordWrapEnabled: true,
      },
    ];

  return (
    <div className={className}>
      <Grid rows={consistentRows} columns={columns}>
        <RowDetailState
          expandedRowIds={expandedRowIds}
          onExpandedRowIdsChange={setExpandedRowIds}
        />
        {/* Table Column Extensions */}
        <Table columnExtensions={columnExtensions} />

        {/* Header */}
        {showHeader && <TableHeaderRow />}

        {/* Main content */}
        <DataProvider columns={columns} />

        {/* Row detail (for accordion rows) */}
        {rowDetail && (
        <TableRowDetail
          contentComponent={RowDetail}
        />
        )}
      </Grid>
    </div>
  );
}

export default ListChart;
