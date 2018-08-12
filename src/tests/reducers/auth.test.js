import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
  const auth = {
    uid: 'ajfasdlk2ui4y594'
  };
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer(auth, action);
  expect(state).toEqual({});
})