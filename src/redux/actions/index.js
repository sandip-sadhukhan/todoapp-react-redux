import { ADD_TODO, LOAD_TODO, REMOVE_TODO } from '../constants/types'

export const loadTodo = () => {
	return {
		type: LOAD_TODO,
	}
}

export const addTodo = (body) => {
	return {
		type: ADD_TODO,
		payload: body,
	}
}

export const removeTodo = (id) => {
	return {
		type: REMOVE_TODO,
		payload: id,
	}
}
