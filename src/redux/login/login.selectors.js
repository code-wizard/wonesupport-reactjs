import { createSelector } from 'reselect';

const selectUser = state => state.login;

export const selectUserSuccessful = createSelector(
    [selectUser],
    login => login.isSuccessful
)