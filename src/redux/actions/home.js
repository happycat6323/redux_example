export const handleUserTmpChange = (user) => {
  return {
    type: 'HANDLE_USER_TMP_CHANGE',
    user
  }
}

export function setUser() {
  return (dispatch, state) => {
    dispatch(createUser(state().home.user))
    dispatch(handleUserTmpChange({}))
  }
}

export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    user
  }
}