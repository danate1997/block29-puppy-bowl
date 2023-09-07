import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import AllPlayers from './Components/AllPlayers'
import NavBar from './Components/NavBar'
import NewPlayerForm from './Components/NewPlayerForm'
import SinglePlayer from './Components/SinglePlayer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { puppyApi } from './PuppyApi.jsx'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <BrowserRouter>
    <Provider store = {store}>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer/>} />
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
