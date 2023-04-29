import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList/>} exact></Route>
          <Route path='/adduser' element={<AddUser/>}exact></Route>
          <Route path='/edituser' element={<EditUser/>}exact></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
