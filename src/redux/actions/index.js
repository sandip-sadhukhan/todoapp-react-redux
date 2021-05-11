import { ADD_TODO, REMOVE_TODO } from '../constants/types'

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
