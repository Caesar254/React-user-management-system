import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import NavBar from './components/layout/NavBar';
import { BrowserRouter as Router, Route, Routes}from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import ViewUser from './components/user/ViewUser';
function App() {
  return (
    <Router>
    <div >
      <NavBar />
      <Routes>

      <Route exact path = "/" element = {<HomePage />}/>
      <Route exact path="/about" element= {<AboutUs/>} />
      <Route exact path ="/contact" element={<ContactUs />} />
      <Route exact path ="/user/add" element={<AddUser />} />
      <Route exact path ="/user/edit/:userId" element={<EditUser />} />
      <Route exact path ="/user/view/:userId" element={<ViewUser />} />
      <Route path = "*" elemment={<PageNotFound />} />

      </Routes>    
    </div>
    </Router>
  );
}

export default App;
