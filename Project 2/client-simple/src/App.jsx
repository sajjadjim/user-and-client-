import './App.css'
import Users from './Components/Users'

const userDataPromise = fetch('http://localhost:3000/users').then(res => res.json())

function App() {


  return (
    <>
  <Users userDataPromise={userDataPromise}></Users>
    </>
  )
}

export default App
