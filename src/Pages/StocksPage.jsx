import { Button } from 'react-bootstrap';
import imageFastaFood from '../assets/logo_fastaFood.png'
import { useNavigate } from 'react-router-dom';

const StocksPage = () => {
    const navigate = useNavigate();

    const logout = async () => {
        localStorage.removeItem('token')
        alert('Déconneté.e avec succés')
        navigate('/')
    };

  return (
    <>
      <div className="headerWelcome">
        <img
          className="logoWelcome"
          src={imageFastaFood}
          onClick={() => {
            navigate("/");
          }}/>
        <h6>WELCOME </h6>
        <div className="welcomeButtons">
          <Button className="headerButtons" onClick={logout}>
            Déconnexion
          </Button>
          <Button className="headerButtons" 
          onClick={() => {navigate("/employee");}}>Compte
          </Button>
        </div>
      </div>
      <div className="navButtons">
        <Button className="handleButton">Gestion des commandes</Button>
        <Button className="handleButton">Gestion des employé.es</Button>
        <Button className="handleButton">Statistiques</Button>
      </div>
      <div className='stocks'>
        <h3>Stocks</h3>
          <Button className='addProductButton'>+</Button>
      </div>    

    </>
  );
};

export default StocksPage;
