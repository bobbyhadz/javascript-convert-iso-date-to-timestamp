// EXAMPLE 1 - Convert an ISO Date to a Timestamp using JavaScript

const isoStr = '2022-07-21T09:35:31.820Z';

const date = new Date(isoStr);

const timestamp = date.getTime();
console.log(timestamp); // 👉️ 165839613182

// ------------------------------------------------------------------

// // EXAMPLE 2 - Removing the offset from the timestamp

// const isoStr1 = '2022-07-21T09:35:31.820Z';

// const date = new Date(isoStr1);

// const timestampWithOffset = date.getTime();

// const offset = date.getTimezoneOffset() * 60 * 1000;
// console.log(offset); // 👉️ -10800000
// const timestampWithoutOffset = timestampWithOffset - offset;

// const dateWithOffset = new Date(timestampWithOffset);
// console.log(dateWithOffset); // 👉️ Thu Jul 21 2022 12:35:31 GMT+0300

// const dateWithoutOffset = new Date(timestampWithoutOffset);
// console.log(dateWithoutOffset); // 👉️ Thu Jul 21 2022 15:35:31 GMT+0300

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using getTime() to avoid mutating dates

// const isoStr = '2022-07-21T09:35:31.820Z';

// const date = new Date(isoStr);
// console.log(date); // 👉️ Thu Jul 21 2022 12:35:31 GMT+0300

// const timestamp = date.getTime();
// console.log(timestamp); // 👉️ 165839613182

// const dateCopy = new Date(timestamp);
// console.log(dateCopy); // 👉️ Thu Jul 21 2022 12:35:31 GMT+0300
