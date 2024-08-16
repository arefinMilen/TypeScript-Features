interface Iuser {
    id :number
    name:string
    age:number
}

let users :Iuser[ ] = []

let user1 : Iuser =

{
    id : 1,
    name : "samsul",
    age : 23,
}
let user2 : Iuser =

{
    id : 2,
    name : "arefn",
    age : 33,
}


let user3 : Iuser =

{
    id : 3,
    name : "milen",
    age : 43,
}

users.push(user1)
users.push(user2)
users.push(user3)

const printUserInfo =  (user:Iuser) =>  
{
console.log(`UserId : ${user.id}, Name : ${user.name} , Age : ${user.age}`)
}

users.forEach ( (user) => printUserInfo(user))