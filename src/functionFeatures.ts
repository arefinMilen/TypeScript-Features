let userInfo1 : () =>void;
let userInfo2 : (name:string) => void;
let userInfo3 : (name:string ,age:number) => string;


userInfo1 = () =>{
console.log("my name is samsul arefin")
}

userInfo2 = (name:string) =>{
console.log(`my name is ${name}`)
}

userInfo3 = (name:string, age:number) =>
{
return `my name is ${name} and age is ${age}`
}
userInfo1()
userInfo2("samsul arefin")
console.log(userInfo3("samsul arefin",32));