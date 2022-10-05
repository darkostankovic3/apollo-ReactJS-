import { Server } from 'miragejs';
import {
  generateRows,
  employeeTaskValues,
} from '../generator';

/* Paginates fake data if pagination query params are available */
function paging(fullDataset, pageSizeParam, skipParam) {
  if (pageSizeParam != null && skipParam != null) {
    const pageSize = parseInt(pageSizeParam, 10);
    const skip = parseInt(skipParam, 10);

    const start = pageSize * skip;
    const end = start + pageSize;
    return fullDataset.slice(start, end);
  }
  return fullDataset;
}

const toLowerCase = (value) => String(value).toLowerCase();
const doesRowContain = (columns, searchTerm, row) => columns.reduce((anyMatches, nextColumnKey) => {
  if (anyMatches === columns[0]) {
    // this is the first value that needs to be checked, the rest will be accumulated
    return toLowerCase(row[anyMatches]).indexOf(toLowerCase(searchTerm)) > -1;
  }
  return !!(anyMatches === true
    || toLowerCase(row[nextColumnKey]).indexOf(toLowerCase(searchTerm)) > -1);
});

function searching(columnValues, fullDataset, searchValueParam) {
  if (searchValueParam) {
    // see if any value in the row fuzzy matches our search value term
    return fullDataset.filter(
      (row) => doesRowContain(columnValues, searchValueParam, row),
    );
  }
  return fullDataset;
}

function sorting(fullDataset, sortByColumnParam, sortingDirectionParam) {
  if (sortByColumnParam && sortingDirectionParam) {
    // reference: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    const compareValues = (key, order = 'asc') => function innerSort(a, b) {
      // eslint-disable-next-line no-prototype-builtins
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };

    fullDataset.sort(compareValues(sortByColumnParam, sortingDirectionParam));
  }
  return fullDataset;
}

export default function makeFakeServer() {
  const server = new Server({
    routes() {
      this.namespace = '/api';
      this.timing = 2000; // simulates a slow api response

      this.get('/table', (_schema, { queryParams }) => {
        // this can be modified to mock how many total available records exist in the backend DB
        const totalAvailableRecords = 88;

        const allData = generateRows({
          columnValues: employeeTaskValues,
          length: totalAvailableRecords,
        });
        // sort first, then search, then paginate -- order is important here
        const sortedData = sorting(
          allData,
          queryParams.sortingColumn,
          queryParams.sortingDirection,
        );
        const searchedData = searching(
          Object.keys(employeeTaskValues),
          sortedData,
          queryParams.search,
        );
        const paginatedData = paging(searchedData, queryParams.size, queryParams.skip);

        return {
          data: paginatedData,
          total: searchedData.length,
        };
      });
    },
  });

  return server;
}
