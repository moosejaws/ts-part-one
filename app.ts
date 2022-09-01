enum Role {admin, read_only, author}

const person = {

    name: "reina",
    age: 26,
    hobbies: ["hiking", "skiing", "reading", "chess"],
    role: Role.admin

}

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby);
}

if (person.role === Role.admin) {
    console.log("is admin")
}