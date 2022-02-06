

const Engineer = require('../lib/engineer');
const engineer = new Engineer('james', '234567', 'engineer@gmail.com', 'engineerGitHub');

//test for the constructor
test('test the engineer object constructor', () => {
    expect(engineer.name).toBe('james');
    expect(engineer.id).toBe('234567');
    expect(engineer.email).toBe('engineer@gmail.com');
    expect(engineer.githubAddress).toBe('engineerGitHub');
});

//test for the methods
test('test if the getName methods returns the name', () => {
    expect(engineer.getName()).toBe('james');
});

test('test if the getID methods returns the ID', () => {
    expect(engineer.getId()).toBe('234567');
});

test('test if the getEmail methods returns the email', () => {
    expect(engineer.getEmail()).toBe('engineer@gmail.com');
});

test('test if the getGithubAddress methods returns the github address', () => {
    expect(engineer.getGithubAddress()).toBe('engineerGitHub');
});

test('test if the getRole methods returns the engioneer', () => {
    expect(engineer.getRole()).toBe('Engineer');
});