//5번 문제

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evennum = numbers.filter(num => num % 2 === 0);
// 짝수 배열을 새롭게 정의. numbers 배열에 필터를 사용하여 배열 안의 요소들을 num으로 정의.
// num을 2로 나누었을 때 나머지가 0이 되면 새로운 배열인 evennum에 들어가게 함.

console.log(evennum);
// 출력.