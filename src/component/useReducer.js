import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
function App() {
  const initialState = {
    userData: [],
    isLoading: false,
    isError: { status: false, msg: "" }
  }
  // const [data,setData] = useState()
  const reducer = (state, action) => {
    if (action.type === "updated_data") {
      return {
        ...state,
        userData: action.payload
      }

    }
    if (action.type === "loading") {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    if (action.type === "delete") {
      const newUser = state.userData.filter((each) =>
        each.id !== action.payload)
      return {
        ...state,
        userData: newUser
      }

    }

    return state
  }

  const [state, dispatch] = useReducer(reducer, initialState);


  const fetchData = async (url) => {
    dispatch({ type: "loading", payload: true })
    dispatch({ type: "error", payload: { status: false, msg: "" } })
    try {
      const res = await axios.get(url)
      console.log(res)
      const data = res.data
      console.log(data)
      dispatch({ type: "updated_data", payload: data })
      dispatch({ type: "loading", payload: false })
      dispatch({ type: "error", payload: { status: false, msg: "" } })

    } catch (err) {
      dispatch({ type: "error", payload: { status: true, msg: err.message } })
      dispatch({ type: "loading", payload: false })
    }

  }


  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/posts")
  }, [])

  //const [isLoading] = state;

  if (state.isLoading) {
    return (
      <div className="card bg-warning text-center text-white">
        <div className="card-body">
          <p className="text-center">Loading</p>
        </div>
      </div>
    )
  }

  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: id })
  }
  const handleEdit = (id) => {
    dispatch({ type: "edit", payload: id })
    console.log(id)
  }


  return (
    <div>
      <h2 className="text-center">User Information</h2>
      
      {state && state.userData.map((each) => {
        const { id, userId, title, body } = each;
        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col">

                  <div className="card bg-success mt-3 text-white text-center" key={each.id}>
                    <div className="card-body">
                    
                      <p>{id}</p>
                      <p>{userId}</p>
                      <p>{title}</p>
                      <p>{body}</p>
                      <button className="btn btn-warning" onClick={() => handleEdit(id)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div>

      </div>
    </div>
  )
}

export default App