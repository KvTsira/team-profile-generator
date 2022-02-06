
//employee
class Employee {
    constractor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
};

getName() {
    return this.name;
}

getID() {
    return this.id;
};

getEmail() {
    return this.email;
};

NODE_MODULES.exports = Employee;