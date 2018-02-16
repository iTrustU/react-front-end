import { push } from 'react-router-redux'
// import firebase from './utils/firebase'
import { post as servicePost } from './service'

export const authenticateSuccess = () => ({
	type: 'AUTH_SUCCESS'
})

export const authenticateFail = () => ({
	type: 'AUTH_FAIL'
})

export const storeUserData = userData => ({
	type: 'STORE_USER_DATA',
	payload: {
		userData
	}
})

export const signOutHandler = (browserHistory, token) => dispatch => {
	localStorage.removeItem('userData')
	dispatch(updateIsAuthenticated(false, {}, browserHistory))
}

export const loginHandler = (event, loginData = {}) => dispatch => {
	const { name } = event.target
	const { email, password } = loginData
	if (name === 'email') {
		servicePost({ url: 'users/custom-login', body: { email, password } })
			.then(res => {
				if (res.data.success) {
					const userData = {
						...res.data,
						deviceToken: localStorage.getItem('pushNotifToken') || ''
					}
					dispatch(updateIsAuthenticated(true, userData))
					servicePost({
						url: 'users/update-device-token',
						access_token: userData.access_token,
						body: {
							email,
							deviceToken: userData.deviceToken
						}
					})
				} else {
					alert(res.data.message)
				}
			})
			.catch(err => {
				console.log(err)
			})
	}
}

export const registerHandler = (loginData = {}) => dispatch => {
	const { email, password, aajiId } = loginData
	servicePost({
		url: 'users/register',
		body: { email, password, insuranceAgentId: aajiId }
	})
		.then(res => {
			if (res.data.status) {
				const userData = {
					...res.data,
					deviceToken: localStorage.getItem('pushNotifToken') || ''
				}
				servicePost({
					url: 'users/update-device-token',
					access_token: userData.access_token,
					body: {
						email,
						deviceToken: userData.deviceToken
					}
				})
				dispatch(updateIsAuthenticated(true, userData))
			} else {
				alert(res.data.message)
			}
		})
		.catch(err => {
			console.log(err)
		})
}

export const updateIsAuthenticated = (
	isAuthenticated,
	userData = {},
	browserHistory = null
) => dispatch => {
	if (isAuthenticated) {
		dispatch(storeUserData(userData))
		dispatch(authenticateSuccess())
		if (browserHistory) {
			browserHistory.push('/dashboard')
		} else {
			// dispatch(push('/dashboard'))
		}
	} else {
		dispatch(authenticateFail())
		// dispatch(storeUserData(userData))
		if (browserHistory) {
			browserHistory.push('/signin')
		} else {
			// dispatch(push('/signin'))
		}
	}
}
