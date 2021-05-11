import React, { useState } from 'react'
import { addTodo } from '../redux/actions/index'
import { useDispatch } from 'react-redux'

const InputTodo = () => {
	const [todoInput, setTodoInput] = useState('')

	const dispatch = useDispatch()

	const inputKeyPressHandler = (e) => {
		if (e.key === 'Enter') {
			addTodoHandler()
		}
	}

	const addTodoHandler = () => {
		if (todoInput.trim() !== '') {
			dispatch(addTodo(todoInput))
			setTodoInput('')
		}
	}

	return (
		<div className='row'>
			<div className='col-md-6 col-sm-12 mx-auto'>
				<div className='card card-body'>
					<h4 className='text-center mb-2'>Add Todo</h4>
					<input
						type='text'
						className='form-control'
						placeholder='Enter todo...'
						value={todoInput}
						onChange={(e) => setTodoInput(e.target.value)}
						onKeyPress={inputKeyPressHandler}
					/>
					<button
						onClick={addTodoHandler}
						className='btn btn-success my-2 btn-block'
						disabled={todoInput.trim() === ''}
					>
						Add Task
					</button>
				</div>
			</div>
		</div>
	)
}

export default InputTodo
