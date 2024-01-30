
import './App.css';
import District from './Component/District'
import Parent from './Component/Parent'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/ConditionalRendering/Home'
import Switch from './Component/Room/Switch';
import MessegeOne from './Component/Example/MessegeOne';
import Name from './Component/WorkOne/Name';

function App() {
  return (
    <Routes>
      <Route path="/District" element={<District/>} />
      <Route path="/Parent" element={<Parent/>} />
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Switch" element={<Switch/>}/>
      <Route path="/MessegeOne" element={<MessegeOne/>}/>
      <Route path="/Name" element={<Name/>}/>
    </Routes>




  );
}

export default App;
