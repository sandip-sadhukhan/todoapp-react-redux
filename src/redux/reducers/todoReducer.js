import { ADD_TODO, LOAD_TODO, REMOVE_TODO } from '../constants/types'

const initializeState = []

const generateId = () => {
	let id = new Date().toISOString()
	id.concat(Math.floor(Math.random() * 100))
	return id
}

const saveDataToLocalStorage = (state) => {
	localStorage.setItem('todos', JSON.stringify(state))
}

const getDataFromLocalStorage = () => {
	if (localStorage.getItem('todos')) {
		let getState = JSON.parse(localStorage.getItem('todos'))
		return getState
	} else {
		localStorage.setItem('todos', JSON.stringify(initializeState))
		return initializeState
	}
}

const todoReducer = (state = initializeState, action) => {
	let newState = [...state]
	switch (action.type) {
		case LOAD_TODO:
			return getDataFromLocalStorage()
		case ADD_TODO:
			newState.push({
				id: generateId(),
				body: action.payload,
			})
			break
		case REMOVE_TODO:
			newState = newState.filter((todo) => todo.id !== action.payload)
			break
		default:
			return newState
	}
	saveDataToLocalStorage(newState)
	return newState
}

export default todoReducer
