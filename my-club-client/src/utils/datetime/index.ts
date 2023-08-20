import moment from 'moment';

export const formatDateTime = (value: any, format?: string) => {
  return moment(value).format(format ?? 'DD/MM/YYYY');
};

export const getStartDateOfMonth = () => {
  return moment().startOf('month').startOf('day');
};

export const getEndDateOfMonth = () => {
  return moment().endOf('month').endOf('day');
};

export default {
  formatDateTime,
};
