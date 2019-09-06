/* eslint-disable func-names */
const moment = require('moment');
const jalaaliHelper = require('./helpers/jalaali');
const stringHelper = require('./helpers/stringHelper');
require('moment/locale/fa');

const persianJalaliMonths = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];

// Moment formats that should have the Jalali date added
const jalaliFormats = ['D MMMM YYYY', 'LL'];

moment.updateLocale('fa', {
  // eslint-disable-next-line object-shorthand
  postformat: function(string) {
    const str = jalaaliHelper.addJalaliDate(
      'fa',
      persianJalaliMonths,
      jalaliFormats,
      string
    );

    return stringHelper.useEasternNumerals(str);
  },
});
