import { useNavigate } from 'react-router-dom';
import imageFastaFood from '../assets/logo_fastaFood.png'
import Button from 'react-bootstrap/Button';
import '../Styles/homePage.css'

const HomePage = () => {
    const navigate = useNavigate()

    const login = () => {
        navigate('/login')
    }

    const register = () => {
        navigate('/register')
    }

    return (  
        <>
        <div className='logo'>
            <img src={imageFastaFood} onClick={() => {navigate('/')}}/>
        </div>
        <div className='boutonHP'>
             <Button onClick={login}>CONNEXION</Button>
             <Button onClick={register}>INSCRIPTION</Button>
        </div>

        </>
    );
}
 
export default HomePage;