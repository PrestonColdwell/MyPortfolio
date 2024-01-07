import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import About from './components/pages/About.jsx';
import Experience from './components/pages/Experience.jsx';
import Contact from './components/pages/Contact.jsx';
import MainRouter from './components/MainRouter.jsx';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainRouter />}>
          <Route path='/' element={<About />}/>
          <Route path='/experience' element={<Experience />}/>
          <Route path='/contact' element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
