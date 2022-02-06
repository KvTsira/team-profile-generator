


const Intern = require('../lib/intern');
const intern = new Intern('theresa', '234567', 'intern@gmail.com', 'MIT');

//test for the constructor
test('test the intern object constructor', () => {
    expect(intern.name).toBe('theresa');
    expect(intern.id).toBe('234567');
    expect(intern.email).toBe('intern@gmail.com');
    expect(intern.school).toBe('MIT');
});

//test for the methods
test('test if the getName methods returns the name', () => {
    expect(intern.getName()).toBe('theresa');
});

test('test if the getID methods returns the ID', () => {
    expect(intern.getId()).toBe('234567');
});

test('test if the getEmail methods returns the email', () => {
    expect(intern.getEmail()).toBe('intern@gmail.com');
});

test('test if the getSchool methods returns the school name', () => {
    expect(intern.getSchool()).toBe('MIT');
});

test('test if the getRole methods returns the Intern', () => {
    expect(intern.getRole()).toBe('Intern');
});