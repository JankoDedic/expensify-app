import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  expect(selectExpensesTotal([])).toBe(0);
});

test('should correctly add up a single expense', () => {
  expect(selectExpensesTotal([expenses[0]])).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  const a1 = expenses[0].amount;
  const a2 = expenses[1].amount;
  const a3 = expenses[2].amount;
  expect(selectExpensesTotal(expenses)).toBe(a1 + a2 + a3);
});