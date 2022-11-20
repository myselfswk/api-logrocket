import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import ShowBookList from './components/ShowBookList';
import CreateBook from './components/CreateBook';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowBookList />} />
        <Route path='/create-book' element={<CreateBook />} />
        <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
        <Route path='/show-book/:id' element={<ShowBookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
