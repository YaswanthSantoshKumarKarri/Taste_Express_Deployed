import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from "./Pages/Home/Home"
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import LogIn from './Pages/SignOprPages/LogIn/LogIn';
import Menu from './Pages/Menu/Menu';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage'
import MenuList from './Components/MenuList/MenuList';
import DashBoard from './Pages/Dashboard/DashBoard';
import CartPage from './Pages/CartPage/CartPage';
import PaymentSuccess from './Pages/PaymentSuccessPage/PaymentSuccess';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/logIn' element={<LogIn />}/>
        <Route path='/AboutUs' element={<AboutUsPage />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/Menu' element={<Menu />}/>
        <Route path='/Menu/MenuList' element={<MenuList/> }/>
        <Route path='/Cart' element={<CartPage/> }/>
        <Route path='/Dash-board' element={<DashBoard/> }/>
        <Route path='/PaymentSuccess' element={<PaymentSuccess/>  }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App; 