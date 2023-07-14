import bcrypt from "bcryptjs";

const Users = [
  {
    name: "Sachin chauhan",
    email: "Chauhansahab85@gmail.com",
    password: bcrypt.hashSync("Asus@4141", 10),
    isAdmin: true,
  },
  {
    name: "Mohit rathore",
    email: "rathoremohit2100@gmail.com",
    password: bcrypt.hashSync("Asus@4141", 10),
    isAdmin: false,
  }
];

export default Users;
