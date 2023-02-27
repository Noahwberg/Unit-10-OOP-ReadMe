const Manager = require('../lib/Manager');

test('Can set office number using the constructor argument', () => {
  const testValue = 1234567890;
  const e = new Manager('testManager', 74, 'testManager@test.com', testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('The getRole() method should return "Manager"', () => {
  const testValue = 'Manager';
  const e = new Manager('testManager', 74, 'testManager@test.com', 1234567890);
  expect(e.getRole()).toBe(testValue);
});

test('Can get office number using the getOffice() method', () => {
  const testValue = 1234567890;
  const e = new Manager('testManager', 74, 'testManager@test.com', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});