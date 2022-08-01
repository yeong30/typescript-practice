//tuple

let person: {
  name: string;
  age: number;
  addr: [string, number]; //tuple
  admin?: Role;
} = {
  name: "john",
  age: 30,
  addr: ["yongs-street", 19],
};

//person.addr = ["lodeo", "zero"]; - not access

enum Role {
  ADMIN,
  USER,
  VISITOR,
}
//enum
person.admin = Role.ADMIN;

if (person.admin === Role.ADMIN) {
  console.log("hello! admin");
}
