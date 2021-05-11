import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadTodo, removeTodo } from '../redux/actions/index'

const MyTodos = () => {
	const todosState = useSelector((state) => state.todoReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		// load todos
		dispatch(loadTodo())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const deleteButtonHandler = (id) => {
		dispatch(removeTodo(id))
	}
	return (
		<div className='row mt-2'>
			<div className='col-md-6 col-sm-12 mx-auto'>
				<div className='card card-body'>
					<h4 className='text-center mb-4'>My Todos</h4>
					<ul className='list-group'>
						{todosState.length === 0 ? (
							<div className='alert alert-danger'>
								No Todo Found!
							</div>
						) : null}
						{todosState.map((todo) => (
							<li className='list-group-item' key={todo.id}>
								<div className='d-flex justify-content-between'>
									<span>{todo.body}</span>
									<button
										onClick={() =>
											deleteButtonHandler(todo.id)
										}
										className='btn btn-danger btn-sm'
									>
										&times;
									</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default MyTodos
