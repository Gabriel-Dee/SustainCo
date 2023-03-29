import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import Aboutus from './Routes/Aboutus';
import Greencommunities from './Routes/Greencommunities';
import Resources from './Routes/Resources';
import Events from './Routes/Events';
import Blog from './Routes/Blog';
import Loginsignup from './Routes/Loginsignup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/greencommunities" element={<Greencommunities/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/login-signup" element={<Loginsignup/>}/>
      </Routes>
    </div>
  );
}

export default App;
