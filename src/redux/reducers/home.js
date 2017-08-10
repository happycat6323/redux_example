export const user = (state = {}, action) => {
  switch (action.type) {
    case 'HANDLE_USER_TMP_CHANGE':
      let user = Object.assign({}, action.user)
      return user
    default:
      return state
  }
}

export const users = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return [...state, action.user]
    default:
      return state
  }
}