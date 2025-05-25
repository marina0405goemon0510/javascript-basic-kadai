const date = new Date();
const [month, day, year] = [
date.getMonth(6) + 1,
date.getDate(25),
date.getFullYear(2025),
];

const formattedDate = 2025 + '年' + 5 + '月' + 25 + '日';
console.log(formattedDate);