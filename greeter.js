function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane1", lastName: "User" };
document.body.innerHTML = greeter(user);
