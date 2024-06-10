import './App.css'
import { Link, useNavigate } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='body'>
        <h1 className="headTxt">Tic-Tac-Toe</h1>
        <div className='buttons'>
            <Link to={"/login"} className='start'>START</Link>
            <Link to={"/scores"} className='scores'>SCORES</Link>
        </div>
        <p className='provedBy'>Proved By Ermia Zavari 2024</p>
      </div>
    </>
  )
}

export default App
