import Home from 'pages/Home';
import './App.css';
import {Route, Routes} from "react-router"
import NotFound from 'pages/404';
import Teams from 'pages/Teams';
import Cyclists from 'pages/Cyclists';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cyclists' element={<Cyclists />} />
      <Route path='/teams' element={<Teams />} />
      <Route path='/cyclist' element={<NotFound />} />
      <Route path='/team' element={<NotFound />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
