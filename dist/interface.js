"use strict";
let users = [];
let user1 = {
    id: 1,
    name: "samsul",
    age: 23,
};
let user2 = {
    id: 2,
    name: "arefn",
    age: 33,
};
let user3 = {
    id: 3,
    name: "milen",
    age: 43,
};
users.push(user1);
users.push(user2);
users.push(user3);
const printUserInfo = (user) => {
    console.log(`UserId : ${user.id}, Name : ${user.name} , Age : ${user.age}`);
};
users.forEach((user) => printUserInfo(user));
