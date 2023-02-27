const Employee = require('../lib/Employee');

test('Can initiate Employee object', () => {
  const e = new Employee();
  expect(typeof(e)).toBe('object');
});

test('Can set name using the constructor', () => {
  const name = 'testEmployee';
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test('Can set id using the constructor', () => {
  const testValue = 74;
  const e = new Employee('testEmployee', testValue);
  expect(e.id).toBe(testValue);
});

test('Can set email using the constructor', () => {
  const testValue = 'testEmployee@test.com';
  const e = new Employee('testEmployee', 74, testValue);
  expect(e.email).toBe(testValue);
});

test('Can get the name using the getName() method', () => {
  const testValue = 'testEmployee';
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test('Can get the id using the getId() method', () => {
  const testValue = 74;
  const e = new Employee('testEmployee', testValue);
  expect(e.getId()).toBe(testValue);
});

test('Can get the email using the getEmail() method', () => {
  const testValue = 'testEmployee@test.com';
  const e = new Employee('testEmployee', 74, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('Can get the role using the getRole() method', () => {
  const testValue = 'Employee';
  const e = new Employee('testEmployee', 74, 'testEmployee@test.com');
  expect(e.getRole()).toBe(testValue);
});