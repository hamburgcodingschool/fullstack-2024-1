const currentYear = new Date().getFullYear();

function formatDate(str) {
  // dd
  if (str.length === 2 && !str.includes('.')) {
    return `${str}.`;
  }
  // ddm
  if (str.length === 3 && !str.includes('.')) {
    return `${str.slice(0, 2)}.${str.slice(2)}`;
  }
  // ddmm
  if (str.length === 4 && !str.includes('.')) {
    return `${str.slice(0, 2)}.${str.slice(2)}.`;
  }
  // dd.mm
  if (str.length === 5 && str[2] === '.' && str[4] !== '.') {
    return `${str}.`;
  }
  // ddmmy+
  if (str.length >= 5 && !str.includes('.')) {
    return `${str.slice(0, 2)}.${str.slice(2, 4)}.${buildYear(str.slice(4))}`;
  }
  // dd.mm.y+
  if (str.length >= 7 && str[2] === '.' && str[5] === '.') {
    return `${str.slice(0, 6)}${buildYear(str.slice(6))}`;
  }
  // d. || d.m
  if (str.length >= 2 && str.length <= 3 && str[1] === '.') {
    return `0${str}`;
  }
  // d.m.
  if (str.length === 4 && str[1] === '.' && str[3] === '.') {
    return `0${str.slice(0, 2)}0${str.slice(2)}`;
  }
  // dd.m.
  if (str.length === 5 && str[2] === '.' && str[4] === '.') {
    return `${str.slice(0, 3)}0${str.slice(3)}`;
  }
  // d.mm.
  if (str.length === 5 && str[1] === '.' && str[4] === '.') {
    return `0${str}`;
  }
  // d.m.y+
  if (str.length >= 5 && str[1] === '.' && str[3] === '.') {
    return `0${str.slice(0, 2)}0${str.slice(2, 4)}${buildYear(str.slice(4))}`;
  }
  // dd.m.y+
  if (str.length >= 6 && str[2] === '.' && str[4] === '.') {
    return `${str.slice(0, 3)}0${str.slice(3, 5)}${buildYear(str.slice(5))}`;
  }
  // d.mm.y+
  if (str.length >= 6 && str[1] === '.' && str[4] === '.') {
    return `0${str.slice(0, 5)}${buildYear(str.slice(5))}`;
  }
  // dd.mmy+
  if (str.length >= 6 && str[2] === '.' && str[5] !== '.') {
    return `${str.slice(0, 5)}.${str.slice(5)}`;
  }

  return str;
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
  formatDate,
};
