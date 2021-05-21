import moment from 'moment';

export const currencyFormatter = (currency: any): string =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  }).format(currency);

export const integerFormatter = (number: any): string =>
  new Intl.NumberFormat().format(number);

export const dateFormatter = (date: string | number): string => moment(date).format('DD MMM, YYYY');
