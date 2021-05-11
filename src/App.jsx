import Header from './components/header'
import InputTodo from './components/inputTodo'
import MyTodos from './components/myTodos'

function App() {
	return (
		<div>
			<Header />
			<div className='container my-2'>
				<InputTodo />
				<MyTodos />
			</div>
		</div>
	)
}

export default App
