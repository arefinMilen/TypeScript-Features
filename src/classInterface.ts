interface IuserInterface {

formatUser : ()=> string
}

class User implements IuserInterface {
    constructor(private fullName :string , private age :number)
    { }
    formatUser =() =>
        {
            return `name is ${this.fullName} and Age is ${this.age}`
        }

   
}

let user = new User ("samsul arefin",33);
console.log(user.formatUser())
