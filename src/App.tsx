import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainRouter from './components/MainRouter';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainRouter />}>
          {/* <Route path='/' element={<About />}/>
          <Route path='/experience' element={<Experience />}/>
          <Route path='/contact' element={<Contact />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
