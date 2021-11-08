import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User component loaded");

let userService = new UserService();

let user1 = new User();
userService.add();

userService.getById(1);
userService.list();




let customer = { id: 1, firstName: "Engin" };

//prototyping
customer.lastName = "Bora";

console.log(customer.lastName);
