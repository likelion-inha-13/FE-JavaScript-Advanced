//4번 문제

class Person {
    constructor(name, hobby) {
      this.name = name;
      this.hobby = hobby;
    }
  
    getPerson() {
      console.log(`이름: ${this.name}, 취미: ${this.hobby}`);
    }
}

const boyeon = new Person("보연", "영화 감상");
// "boyeon"이라는 새로운 사람을 정의, Person class를 이용하여 순서대로 이름, 취미를 작성함.

boyeon.getPerson();
// 출력.