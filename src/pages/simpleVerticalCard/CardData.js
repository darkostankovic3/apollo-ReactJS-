import moment from 'moment/moment';

const momentInstance = moment();

// Static Data
const cardData = [
  {
    title: 'Card A',
    dueDate: momentInstance.toDate(),
    saveDate: momentInstance.toDate(),
    startDate: momentInstance.toDate(),
    endDate: momentInstance.add(1, 'd').toDate(),
    country: 'United States',
  },
  {
    title: 'Card AB',
    dueDate: momentInstance.add(1, 'd').toDate(),
    saveDate: momentInstance.add(1, 'd').toDate(),
    startDate: momentInstance.add(1, 'd').toDate(),
    endDate: momentInstance.add(2, 'd').toDate(),
    country: 'Canada',
    isStarred: true,
  },
  {
    title: 'Card C',
    dueDate: momentInstance.add(2, 'd').toDate(),
    saveDate: momentInstance.add(2, 'd').toDate(),
    startDate: momentInstance.add(2, 'd').toDate(),
    endDate: momentInstance.add(3, 'd').toDate(),
    country: 'Mexico',
    isActive: true,
  },
  {
    title: 'Card D',
    dueDate: momentInstance.add(3, 'd').toDate(),
    saveDate: momentInstance.add(3, 'd').toDate(),
    startDate: momentInstance.add(3, 'd').toDate(),
    endDate: momentInstance.add(4, 'd').toDate(),
    country: 'Japan',
  },
  {
    title: 'Card E',
    dueDate: momentInstance.add(4, 'd').toDate(),
    saveDate: momentInstance.add(4, 'd').toDate(),
    startDate: momentInstance.add(4, 'd').toDate(),
    endDate: momentInstance.add(5, 'd').toDate(),
    country: 'Australia',
    isActive: true,
    isStarred: true,
  },
  {
    title: 'Card F',
    dueDate: momentInstance.add(5, 'd').toDate(),
    saveDate: momentInstance.add(5, 'd').toDate(),
    startDate: momentInstance.add(5, 'd').toDate(),
    endDate: momentInstance.add(6, 'd').toDate(),
    country: 'Italy',
    isStarred: true,
  },
];

export default cardData;
