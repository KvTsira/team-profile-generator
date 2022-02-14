


const Manager = require('../lib/manager');
const manager = new Manager('lindsey', '234567', 'manager@gmail.com', '123');

//test for the constructor
test('test the manager object constructor', () => {
    expect(manager.name).toBe('lindsey');
    expect(manager.id).toBe('234567');
    expect(manager.email).toBe('manager@gmail.com');
    expect(manager.officeNumber).toBe('123');
});

//test for the methods
test('test if the getName methods returns the name', () => {
    expect(manager.getName()).toBe('lindsey');
});

test('test if the getID methods returns the ID', () => {
    expect(manager.getId()).toBe('234567');
});

test('test if the getEmail methods returns the email', () => {
    expect(manager.getEmail()).toBe('manager@gmail.com');
});

test('test if the getOfficeNumber methods returns the Office Number', () => {
    expect(manager.getOfficeNumber()).toBe('123');
});

test('test if the getRole methods returns the Manager', () => {
    expect(manager.getRole()).toBe('Manager');
});