import { clone } from 'ramda';

const sortCards = (type, property, cards) => {
  const sortedCards = clone(cards);

  if (type.toLowerCase() === 'ascending') {
    return sortedCards.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  }
  return sortedCards.sort((a, b) => (a[property] < b[property] ? 1 : -1));
};

const filterCards = (filters, cards) => {
  let filteredCards = clone(cards);

  // status filter
  if (filters.statusFilter) {
    filteredCards = filteredCards.filter(
      (card) => (filters.statusFilter === 'active' ? card.isActive : !card.isActive),
    );
  }

  // search by title filter
  if (filters.searchTitleFilter) {
    filteredCards = filteredCards.filter(
      (card) => card.title.toLowerCase().indexOf(
        filters.searchTitleFilter.toLowerCase(),
      ) > -1,
    );
  }

  // search by country filter
  if (filters.searchCountryFilter) {
    filteredCards = filteredCards.filter(
      (card) => card.country.toLowerCase().indexOf(
        filters.searchCountryFilter.toLowerCase(),
      ) > -1,
    );
  }

  if (filters.dateRange.startDate && filters.dateRange.endDate) {
    filteredCards = filteredCards.filter(
      (card) => +card.startDate >= +filters.dateRange.startDate
                && +card.startDate <= +filters.dateRange.endDate,
    );
  }

  return filteredCards;
};

export { filterCards, sortCards };
