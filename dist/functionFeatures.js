"use strict";
let userInfo1;
let userInfo2;
let userInfo3;
userInfo1 = () => {
    console.log("my name is samsul arefin");
};
userInfo2 = (name) => {
    console.log(`my name is ${name}`);
};
userInfo3 = (name, age) => {
    return `my name is ${name} and age is ${age}`;
};
userInfo1();
userInfo2("samsul arefin");
console.log(userInfo3("samsul arefin", 32));
