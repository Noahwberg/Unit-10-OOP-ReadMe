const Intern = require('../lib/Intern');

test('Can set school using the constructor argument', () => {
  const testValue = 'GA Tech';
  const e = new Intern('testIntern', 74, 'testIntern@test.com', testValue);
  expect(e.school).toBe(testValue);
});

test('The getRole() method should return "Intern"', () => {
  const testValue = 'Intern';
  const e = new Intern('testIntern', 74, 'testIntern@test.com', 'GA Tech');
  expect(e.getRole()).toBe(testValue);
});

test('Can get school via getSchool()', () => {
  const testValue = 'GA Tech';
  const e = new Intern('testIntern', 74, 'testIntern@test.com', testValue);
  expect(e.getSchool()).toBe(testValue);
});