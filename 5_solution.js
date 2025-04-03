//5번 문제

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter를 사용하여 리스트요소를 나머지 연산하여 0인 조건을 만족하는게 여러개여도 전부 출력함
const filtered = numbers.filter(number => number%2 === 0); 
console.log(filtered) //filtered 출력