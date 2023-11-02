import { useState } from 'react'
// import './App.css'
import StopWatch from './Components/Stopwatch'
import { BrowserRouter  , Routes , Route } from 'react-router-dom'
import Fetch from './Components/Fetch'
import Autosuggestions from './Components/AutoSuggestion'
import Swap from './Components/Swap'
import DictionaryFormat from './Components/DictionaryApp'
import Todo from './Components/Todo'
import Gallery from './components copy/Gallery'
import Like from './components copy/Like'
import New from './components copy/New'
import Weather from './Components/Weather'
import Navigation from './Components/Navigation'
import FormValidation from './Components/FormValidation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
       <Navigation />
          <Routes>
               <Route path='/' element = "Page not found" />
               <Route path='/stopwatch' element = {<StopWatch/>} />
               <Route path='/fetch' element = {<Fetch/>} />
               <Route path='/autosuggestion' element = {<Autosuggestions/>} />
               <Route path='/formvalidation' element = {<FormValidation/>} />
               <Route path='/dictionary' element = {<DictionaryFormat/>} />
               <Route path='/Todo' element = {<Todo/>} />
               <Route path='/Weather' element = {<Weather/>} />
               <Route path='/Gallery' element = {<Gallery/>} />
               <Route path='/Like' element = {<Like/>} />
               <Route path='/New' element = {<New/>} />
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
