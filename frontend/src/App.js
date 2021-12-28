
import './App.css';
import NavBar from './Nav/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Collection from './Nav/Collection';

function App() {
  return (
    <>
    
<Router>
  <Routes>
      <Route path='/' exact element={<NavBar/>}/>
      <Route path='/category/:name' element={<Collection/>}/>
  </Routes>
</Router>


    </>


  );
}

export default App;
