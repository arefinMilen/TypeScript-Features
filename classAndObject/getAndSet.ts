class user {
  constructor(public _name: string, public _age?: number) {}
  get name(){
    return this._name;
  }

  set age(value: number) {
    this._age = value;
  }
}

let u1 = new user("samsul",24);
console.log(u1);