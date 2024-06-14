const currentYear = new Date().getFullYear();

// how this operates: We split the date string by its separator '.'.
// When we get one part, we need to add all of them now.
// With two parts, we may need to add one
// With three parts, all separators are already set
// With two or three parts, we may need to add leading zeroes to some of them
function formatDate(str) {
  const parts = str.split('.');
  switch (parts.length) {
    case 1:
      // no separators. Returning directly as
      // creating parts would make this unnecessarily complicated
      if (str.length === 2) {
        return str + '.';
      }
      if (str.length === 3) {
        return str.slice(0, 2) + '.' +
               str.slice(2);
      }
      if (str.length === 4) {
        return str.slice(0, 2) + '.' +
               str.slice(2) + '.';
      }
      if (str.length >= 5) {
        return str.slice(0, 2) + '.' +
               str.slice(2, 4) + '.' +
               buildYear(str.slice(4));
      }
      return str;
    case 2:
      if (parts[0].length < 2) {
        parts[0] = '0' + parts[0];
      }
      if (parts[1].length === 2) {
        parts[1] += '.';
      } else if (parts[1].length > 2) {
        const month = parts[1].slice(0, 2);
        const year = buildYear(parts[1].slice(2));
        parts[1] = month;
        parts.push(year);
      }
      break;
    case 3:
      if (parts[0].length < 2) {
        parts[0] = '0' + parts[0];
      }
      if (parts[1].length < 2) {
        parts[1] = '0' + parts[1];
      }
      parts[2] = buildYear(parts[2]);
      break;
  }

  return parts.join('.');
}

function buildYear(year) {
  if (year.length === 2 && parseInt(year) + 2000 <= currentYear) {
    return '20' + year;
  }
  if (year.length === 2) {
    return '19' + year;
  }

  return year;
}

module.exports = {
  formatDate
};
