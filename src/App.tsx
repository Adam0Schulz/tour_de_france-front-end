import Home from 'pages/Home';
import './App.css';
import {Route, Routes} from "react-router"
import NotFound from 'pages/404';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cyclists' element={<NotFound />} />
      <Route path='/teams' element={<NotFound />} />
      <Route path='/cyclist' element={<NotFound />} />
      <Route path='/team' element={<NotFound />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
