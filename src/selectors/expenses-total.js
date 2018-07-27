const plus = (lhs, rhs) => lhs + rhs;

export default (expenses) => expenses
    .map((expense) => expense.amount)
    .reduce(plus, 0);