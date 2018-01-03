export default {
  authReducer: (state = {}, action) => {
    switch (action.type) {
      case 'AUTH_SUCCESS':
        return {
          ...state,
          isAuthenticated: true
        }
      case 'AUTH_FAIL':
        return {
          ...state,
          isAuthenticated: false
        }
      case 'STORE_USER_DATA':
        return {
          ...state,
          userData: action.payload.userData
        }
      default:
        return state
    }
  }
}
