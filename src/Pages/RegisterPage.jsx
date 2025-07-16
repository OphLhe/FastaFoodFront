import imageFastaFood from '../assets/logo_fastaFood.png'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../Services/employeeService';
import ('../Styles/registerPage.css')

const RegisterPage = () => {

    const navigate = useNavigate(); 

    const [employeeData, setEmployeeData] = useState({firstName:'', lastName:'', mail:'', password:'', role:''});

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            await register(employeeData);
            alert('Employé.e ajouté.e avec succés')
            navigate('/login')
        } catch (error) {
            console.error('register failed', error);
            alert('Ajout employé.e échoué, essayez à nouveau.') 
        }
    }

    return ( 
    <>
        <div className='logoRegister'>
            <img src={imageFastaFood} onClick={() => {navigate('/')}}/>
        </div>

        <h3>Inscription</h3>

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
                <input type="mail" 
                className='floating-input' 
                placeholder='' 
                value = {employeeData.mail}
                onChange={(e) => setEmployeeData({...employeeData, mail: e.target.value})}
                required />
                <label className="floating-label">Email</label>
            </div>
            <div className="floating-label-group">
                <input type="text" 
                className='floating-input' 
                placeholder='' 
                value = {employeeData.role}
                onChange={(e) => setEmployeeData({...employeeData, role: e.target.value})}
                required />
                <label className="floating-label">Rôle</label>
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
        
            <Button type="submit" className='submitButtonRegister'>
                Submit
            </Button>
        </form>
    </>
    );
}
 
export default RegisterPage;