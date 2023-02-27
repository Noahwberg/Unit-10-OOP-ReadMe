const Engineer = require('../lib/Engineer');

test('Can set GitHub Username using the constructor', () => {
  const testValue = 'testGitHub';
  const e = new Engineer('testEngineer', 1, 'testEngineer@test.com', testValue);
  console.log(e);
  expect(e.gitHub).toBe(testValue);
});

test('The getRole() method should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer('testEngineer', 1, 'testEngineer@test.com', 'testGitHub');
  expect(e.getRole()).toBe(testValue);
});

test('Can get GitHub username using the getGithub() method', () => {
  const testValue = 'testGitHub';
  const e = new Engineer('testEngineer', 1, 'testEngineer@test.com', testValue);
  expect(e.getGithub()).toBe(testValue);
});