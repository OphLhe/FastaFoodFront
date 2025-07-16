import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import AccountPage from './Pages/AccountPage';
import WelcomePage from './Pages/WelcomePage';
import StocksPage from './Pages/StocksPage';
import '../src/Styles/homePage.css'
import './Styles/loginPage.css'
import './Styles/accountPage.css'
import './Styles/welcomePage.css'
import './Styles/orderPage.css'
import './Styles/stocksPage.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/> 
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>          
          <Route path='/employee' element={<AccountPage/>}/>
          <Route path='/employee/welcome' element={<WelcomePage/>}/>            
          <Route path='/stocks' element={<StocksPage/>}/>            
        </Routes>
      </Router>
    </>
  )
}

export default App
