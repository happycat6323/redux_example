export const handleUserTmpChange = (user) => {
  return {
    type: 'HANDLE_USER_TMP_CHANGE',
    user
  }
}

export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    user
  }
}