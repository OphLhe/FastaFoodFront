import { Button } from 'react-bootstrap';
import imageFastaFood from '../assets/logo_fastaFood.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {login} from '../Services/employeeService';
import '../Styles/loginPage.css'

const LoginPage = () => {

    const navigate = useNavigate(); 
    const [employeeData, setEmployeeData] = useState({firstName:'', lastName:'', password:''});

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await login(employeeData);
            localStorage.setItem('token', response.data.token);
            alert('Connecté.e')
            navigate('/employee/welcome')
        } catch (error) {
            console.error('login failed', error);
            alert('Connexion echouée, essayez à nouveau.') 
        }
    }

    return ( 
    <>
        <div className='logoLogin'>
            <img src={imageFastaFood} onClick={() => {navigate('/')}}/>
        </div>

        <h3>Connexion</h3>

        <form onSubmit={handleSubmit} className="floating-form">
            
            <div className="floating-label-group">
                <input type="text" 
                className='floating-input' 
                placeholder='' 
                value = {employeeData.firstName}
                onChange={(e) => setEmployeeData({...employeeData, firstName: e.target.value})}
                required />
                <label className="floating-label">Prénom</label>
            </div>
            <div className="floating-label-group">
                <input type="text" 
                className='floating-input' 
                placeholder='' 
                value = {employeeData.lastName}
                onChange={(e) => setEmployeeData({...employeeData, lastName: e.target.value})}
                required />
                <label className="floating-label">Nom</label>
            </div>
            <div className="floating-label-group">
                <input type="password"  
                className='floating-input' 
                placeholder='' 
                value = {employeeData.password}
                onChange={(e) => setEmployeeData({...employeeData, password: e.target.value})}
                required />
                <label className="floating-label">Mot de passe</label>
            </div>
        
            <Button type="submit" className='submitButton'>
                Submit
            </Button>
        </form>
    </>
    );
}
 
export default LoginPage;