
const Employee = require('../lib/employee');
//create a new employee object
const employee= new Employee("tsira", '123456', "testemail@testdomain.com");

//test for constructor
test('test if the employee object constructor is correct', () => {
    expect(employee.name).toBe('tsira');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('testemail@testdomain.com');
});


//test for methods
test('test if getName gets the employee name', () => {
    expect(employee.getName()).toBe('tsira');
});


test('test if getID gets the employee ID', () => {
    expect(employee.getId()).toBe('123456');
});

test('test if getEmail gets the employee email', () => {
    expect(employee.getEmail()).toBe('testemail@testdomain.com');
});

test('test if getEmail gets the employee role', () => {
    expect(employee.getRole()).toBe('Employee');
});