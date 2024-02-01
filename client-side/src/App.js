import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Home from './components/home/Home';
import Task from './components/task/Task';
import Header from './components/common/Header'
import Footer from './components/common/Footer';
import Search from './components/search/Search';
import { useState } from 'react';


function App() {
  const [search, setSearch] = useState(false)
  return (
    <>
      <Header setSearch={setSearch} search={search}  />
      
      <Routes>
        <Route path='/' element={<Home search={search} setSearch={setSearch}/>}></Route>
        <Route path='/task' element={<Task/>}></Route>
        <Route path='/profile' element={<About/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
