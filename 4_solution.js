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

const yewon= new Person("예원","넷플릭스로 미드보기");
yewon.getPerson();