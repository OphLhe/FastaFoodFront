import { Button } from 'react-bootstrap';
import imageFastaFood from '../assets/logo_fastaFood.png'
import { useNavigate } from 'react-router-dom';

function Navbar(){
  const navigate = useNavigate();

  const logout = async () => {
        localStorage.removeItem('token')
        alert('Déconneté.e avec succés')
        navigate('/')
  }
  return (
    <>
    {/* {employeedata.data.firstName} */}
     <div className='headerWelcome'>
          <img className='logoWelcome' 
          src={imageFastaFood} 
          onClick={() => {navigate('/')}}/>
        <h6>WELCOME </h6>
        <div className='welcomeButtons'>
          <Button className='headerButtons' onClick={logout}>Déconnexion</Button>
          <Button className='headerButtons' onClick={() => {navigate('/employee')}}>Compte</Button>
        </div>
      </div>
    </>
  )}


export default Navbar;
