import moment from 'moment';

export const dates = [
  {id: 1, value: moment().format('YYYY-MM-DD'), name: 'today'},
  {id: 1, value: moment().add(1, 'day').format('YYYY-MM-DD'), name: 'tomorrow'},
  {
    id: 1,
    value: moment().add(2, 'day').format('YYYY-MM-DD'),
    name: 'after 2 days',
  },
  {
    id: 1,
    value: moment().add(3, 'day').format('YYYY-MM-DD'),
    name: 'after 3 days',
  },
  {
    id: 1,
    value: moment().add(4, 'day').format('YYYY-MM-DD'),
    name: 'after 4 days',
  },
];
