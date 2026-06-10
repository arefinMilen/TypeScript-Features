class Person {
  constructor(public name: string) {

  }
}

class Employee extends Person {
  constructor(name: string) {
    super(name)
  }
  getValue() {
    console.log(this.name);
}
}
let p1 = new Employee("samsul");
p1.getValue();

