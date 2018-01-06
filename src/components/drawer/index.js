import React from 'react'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { Container, ItemContainer } from './styledComponents'
import { signOutHandler } from '../../actions'

const AuthenticatedMenu = [
	{ title: 'Main', url: '/Main' },
	{ title: 'Profil', url: '/profil' },
	{ title: 'Review', url: '/review' },
	{ title: 'Logout', url: '' }
]
const unAuthenticatedMenu = [
	{ title: 'Main', url: '/Main' },
	{ title: 'login', url: '/login' },
	{ title: 'register', url: '/register' }
]
const renderItem = props => {
	if (!props.userData.isAuthenticated) {
		return AuthenticatedMenu.map(menu => {
			if (menu.title.toLowerCase() !== 'logout') {
				return (
					<ItemContainer>
						<Link to={menu.url}>{menu.title}</Link>
					</ItemContainer>
				)
			}
			return (
				<ItemContainer>
					<button onClick={() => props.dispatch(signOutHandler(props.history))}>
						Sign Out
					</button>
				</ItemContainer>
			)
		})
	}
	return unAuthenticatedMenu.map(menu => {
		return (
			<ItemContainer>
				<Link to={menu.url}>{menu.title}</Link>
			</ItemContainer>
		)
	})
}
const Drawer = props => {
	return <Container show={props.show}>{renderItem(props)}</Container>
}

const mapStateToProps = state => ({
	userData: state.authReducer.userData
})

export default withRouter(connect(mapStateToProps)(Drawer))
