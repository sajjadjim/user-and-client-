import './App.css'
import User from './Components/User'


const DataPromise = fetch('http://localhost:3000/users').then(res => res.json())

function App() {
  return (
    <>
    <div>
      <User DataPromise={DataPromise}></User>
    </div>
    </>
  )
}

export default App
