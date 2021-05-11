import './global.css'

function App() {
  return (
    <div >
      <header>
        <div className="py-3 text-center bg-primary text-white">
          <h3>Todo List with Redux</h3>
        </div>
      </header>

      <div className="container my-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 mx-auto">
            <div className="card card-body">
              <h4 className="text-center mb-2">Add Todo</h4>
              <input type="text" className="form-control" placeholder="Enter todo..."/>
              <button className="btn btn-success my-2 btn-block">Add Task</button>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 col-sm-12 mx-auto">
            <div className="card card-body">
              <h4 className="text-center mb-4">My Todos</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <span>
                      Item 1
                    </span>
                    <button className="btn btn-danger btn-sm">&times;</button>
                  </div>
                  </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <span>
                      Item 2
                    </span>
                    <button className="btn btn-danger btn-sm">&times;</button>
                  </div>
                  </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <span>
                      Item 3
                    </span>
                    <button className="btn btn-danger btn-sm">&times;</button>
                  </div>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
