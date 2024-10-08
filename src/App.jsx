import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, Routes} from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const Url = "https://backend-0qox.onrender.com";
  return (
    <div className="app">
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add Url={Url}/>}/>
          <Route path="/list" element={<List Url={Url}/>}/>
          <Route path="/orders" element={<Orders Url={Url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;