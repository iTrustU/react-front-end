import React from 'react'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { Container, ItemContainer } from './styledComponents'
import { signOutHandler } from '../../actions'
import {Font} from '../../components'

const AuthenticatedMenu = [
	{ title: 'home', url: '/' },
	{ title: 'Logout', url: '' }
]
const unAuthenticatedMenu = [
	{ title: 'home', url: '/' },
	{ title: 'login', url: '/signin' },
	{ title: 'register', url: '/signup' }
]
const renderItem = props => {
	if (!props.userData.isAuthenticate) {
		return AuthenticatedMenu.map(menu => {
			if (menu.title.toLowerCase() !== 'logout') {
				return (
					<Link to={menu.url} key={menu.title}>
					<ItemContainer>
						<Font size={18} text={menu.title}/>
					</ItemContainer>
					</Link>
				)
			}
			return (
				<ItemContainer  key={menu.title} onClick={() => props.dispatch(signOutHandler(props.history))}>
					<Font size={18} text={menu.title} />
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
