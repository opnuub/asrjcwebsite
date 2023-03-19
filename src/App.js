import React from 'react'

import { Container } from 'react-bootstrap'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import RPScreen from './screens/RPScreen';

function App() {
  return (
    <HashRouter>
      <Header />
      <main className='py-4'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/rp' element={<RPScreen />} exact />
          </Routes>
        </Container>
      </main>
    </HashRouter>
  );
}

export default App;
