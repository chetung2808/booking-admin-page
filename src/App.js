import './App.css';
import Home from './page/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";  
import Login from './page/login/Login';
import List from './page/list/List';
import New from './page/new/New';
import Single from './page/single/Single';

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
          <Route path="/">
            <Route index element ={<Home/>}/>
     
          <Route path="/login" element = {<Login/>}/> 
          <Route path="users">
          <Route index element = {<List/>}/> 
          <Route path=":userId" element = {<Single/>}/> 
          <Route path="new" element = {<New/>}/> 
          </Route>
          <Route path="hotels">
          <Route index element = {<List/>}/> 
          <Route path=":hotelId" element = {<Single/>}/> 
          <Route path="new" element = {<New/>}/> 
          </Route>

        
          </Route>
        </Routes> 
     
    </Router>
    </div>
  );
}

export default App;
