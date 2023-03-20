
import './App.css';
import Home from './pages/login/home';
import Header from './component/header';
import Sidebar from './component/sidebar';
import TableView from './pages/Userlisting/table';
import Index from './pages/Userlisting/index';
import Form from './pages/Userlisting/form';
import Delete from './pages/Userlisting/delete';
import Next from './pages/Userlisting/next';

import {
  Routes,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/asdf" element={<Home/>}></Route>
        <Route path="/header" element={<Header/>}></Route>
        <Route path="/sidebar" element={<Sidebar/>}></Route>
        <Route path="/table" element={<TableView/>}></Route>
        <Route path="/index" element={<Index/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/delete" element={<Delete/>}></Route>
        <Route path="/next" element={<Next/>}></Route>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
