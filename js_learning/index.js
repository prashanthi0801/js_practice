// const arr = [10, 20, 30, 40];

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(arr[i]);
//   }, 2000); // 2s gap
// }
const arr = ["apple", "banana", "cherry", "date"];

arr.forEach((item, index) => {
  setTimeout(() => {
    console.log(item);
  }, index * 1000); // delay increases by 1s each loop
});

