import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User component loaded");

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "Enes", "Bora", "Balikesir");
let user2 = new User(2, "Ali Etka", "Bora", "Balikesir");

userService.add(user1);
userService.add(user2);

console.log(userService.list());
console.log(userService.getById(1));

userService.getById(1);

let customer = { id: 1, firstName: "Engin" };

//prototyping
customer.lastName = "Bora";

console.log(customer.lastName);
