import { ADD_TODO, REMOVE_TODO } from '../constants/types'

const initializeState = []

const generateId = () => {
	let id = new Date().toISOString()
	id.concat(Math.floor(Math.random() * 100))
	return id
}

const todoReducer = (state = initializeState, action) => {
	let newState = [...state]
	switch (action.type) {
		case ADD_TODO:
			newState.push({
				id: generateId(),
				body: action.payload,
			})
			return newState
		case REMOVE_TODO:
			return newState.filter((todo) => todo.id !== action.payload)
		default:
			return newState
	}
}

export default todoReducer
