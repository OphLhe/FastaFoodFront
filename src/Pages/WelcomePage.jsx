import { Button } from 'react-bootstrap';
import imageFastaFood from '../assets/logo_fastaFood.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWelcome } from '../Services/employeeService';
import Navbar from '../Components/Navbar'


const WelcomePage = () => {
    const navigate = useNavigate();
    
    const logout = async () => {
        localStorage.removeItem('token')
        alert('Déconneté.e avec succés')
        navigate('/')
    }
    
    return ( 
        <>

        <Navbar/>
        
        <div className='navButtons'>
            <Button className='handleButton' onClick={() => (navigate('/order'))}>Commandes</Button>
            <Button className='handleButton' onClick={() => (navigate('/stocks'))}>Stocks</Button>
            <Button className='handleButton'>Employé.es</Button>
            <Button className='handleButton'>Statistiques</Button>
        </div>
       
        <div className='newClient'>
            <Button className='newClientButtons' onClick={() => (navigate('/order'))}>Nouveau client</Button>
        </div>
        </>
     );
}
 
export default WelcomePage;