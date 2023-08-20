import moment from 'moment';

export const formatDateTime = (value: any, format?: string) => {
  return moment(value).format(format ?? 'DD/MM/YYYY');
};

export default {
  formatDateTime,
};
