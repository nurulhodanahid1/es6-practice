const ages1 = [12, 34, 32, 44, 55, 33, 21, 32];
const ages2 = [23, 44, 32, 34, 43, 43, 32];
const ages3 = [34, 45, 33];
const allAges = ages1.concat(ages2).concat([1]).concat(ages3);
const allAges2 = [...ages1, ...ages2, 1, ...ages3];
console.log(allAges);
console.log(allAges2);

//// // //
const business = 648;
const minister = 455;
const sochip = 444;
const maximum = Math.max(business, minister, sochip);
console.log(maximum);

// // //// 
const takaPoisa = [23, 33, 44, 55, 55];
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);