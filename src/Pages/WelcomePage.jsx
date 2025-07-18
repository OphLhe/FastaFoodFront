import { Button } from 'react-bootstrap';
import imageFastaFood from '../assets/logo_fastaFood.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWelcome } from '../Services/employeeService';


const WelcomePage = () => {
    const navigate = useNavigate();
    const [employeedata, setEmployeedata] = useState([])
    
    const logout = async () => {
        localStorage.removeItem('token')
        alert('Déconneté.e avec succés')
        navigate('/')
    }

    const fetchEmployeeName = async () => {
        try {
            const res = await getWelcome()
            setEmployeedata(res)
            console.log(res);
            
        } catch (error) {
            console.error('error fetching employee name',error);
    
        }
    }

    useEffect (() => {
        fetchEmployeeName()
    }, []);
    
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
        
        <div className='navButtons'>
            <Button className='handleButton'>Commandes</Button>
            <Button className='handleButton' onClick={() => (navigate('/stocks'))}>Stocks</Button>
            <Button className='handleButton'>Employé.es</Button>
            <Button className='handleButton'>Statistiques</Button>
        </div>
       
        <div className='newClient'>
            <Button className='newClientButtons'>Nouveau client</Button>
        </div>
        </>
     );
}
 
export default WelcomePage;