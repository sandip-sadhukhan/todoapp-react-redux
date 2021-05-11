import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
	const todosState = useSelector((state) => state.todoReducer)

	return (
		<header>
			<div className='py-3 text-center bg-primary text-white'>
				<h3>Todo List with Redux {`(${todosState.length})`}</h3>
			</div>
		</header>
	)
}

export default Header
