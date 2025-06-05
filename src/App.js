import './App.css';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net-dt/js/dataTables.dataTables.min.js';
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Routing from './Components/Routing';
import 'react-toastify/dist/ReactToastify.css'; 
import { createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';

 // Authentcation made for Admin Login page
export const loginStatus = createContext()
function App() {

  // Authentcation made for Admin Login page
  const [login, setLogin] = useState(false)

  return (
    <div className="App">
      <loginStatus.Provider value={[login, setLogin]}>
        <Header />
        <Routing /> 
        <Footer />
        <ToastContainer />
      </loginStatus.Provider>
    </div>
  );
}

export default App;
