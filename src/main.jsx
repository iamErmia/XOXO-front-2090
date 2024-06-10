import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage from './components/LoginPage.jsx'
import Scores from './components/Scores.jsx'
import GameDesign from './components/GameDesign.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<App/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/scores" element={<Scores/>}></Route>
        <Route path="/game" element={<GameDesign/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
