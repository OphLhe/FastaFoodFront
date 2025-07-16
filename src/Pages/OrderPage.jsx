import { Button } from 'react-bootstrap';
import imageFastaFood from '../assets/logo_fastaFood.png'

const OrderPage = () => {
    
    return ( 
        <>
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
        <div className='handleOrder'>
            <Button className='handleOrderButton'>Gestion des commandes</Button>
        </div>
        </>
    );
}
 
export default OrderPage;