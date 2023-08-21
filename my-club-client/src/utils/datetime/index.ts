import moment from 'moment';

export const formatDateTime = (value: any, format?: string) => {
  return moment(value).format(format ?? 'DD/MM/YYYY');
};

export const getStartDateOfCurrentMonth = () => {
  return moment().startOf('month').startOf('day');
};

export const getEndDateOfCurrentMonth = () => {
  return moment().endOf('month').endOf('day');
};

export const getStartDateOfMonth = (month: number) => {
  const currentYear = new Date().getFullYear();
  return moment()
    .year(currentYear)
    .month(month - 1)
    .startOf('month')
    .startOf('day');
};

export const getEndDateOfMonth = (month: number) => {
  const currentYear = new Date().getFullYear();
  return moment()
    .year(currentYear)
    .month(month - 1)
    .endOf('month')
    .endOf('day');
};

export const getListPreviousMonth = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  return Array.from({ length: currentMonth })
    .map((v, i) => i + 1)
    .reverse();

  // const previousMonths = [];

  // for (let i = 0; i < numMonths; i++) {
  //   previousMonths.push(currentDate.clone().subtract(i + 1, 'months'));
  // }

  // return previousMonths;
};

export default {
  formatDateTime,
};
