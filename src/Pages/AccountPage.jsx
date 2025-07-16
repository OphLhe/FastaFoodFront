import {useNavigate } from 'react-router-dom';
import imageFastaFood from '../assets/logo_fastaFood.png'
import { getEmployee, updatePassword } from '../Services/employeeService';
import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';




const AccountPage = () => {

    const navigate = useNavigate();
    const [employeeInfos, setEmployeeInfos] = useState([]);
    const [modalPassword ,setModalPassword] = useState(false);
    const [formPassword, setFormPassword] = useState({oldPassword:'', newPassword:''});

    const fetchEmployeeInfos = async () => {
        try {
            const res = await getEmployee();
            setEmployeeInfos(res.data)
                        
        } catch (error) {
            console.error('Error fetching employee infos')
        }
    }

    const handleUpdatePassword = async (e) => {
        e.preventDefault(); 
        try {
            if(formPassword.oldPassword != formPassword.newPassword){
                const res = await updatePassword(formPassword);
                localStorage.removeItem('token');
                alert('Mot de passe modifié avec succés')
                navigate('/login');
            }else {
                alert('Le mot de passe est identique')
            }
        } catch (error) {
            console.error("Error updating password :", error);
        }
    }

    useEffect(() => {
        fetchEmployeeInfos()
    },[])

    return ( 
    <>

    <div className='logoAccount'>
        <img src={imageFastaFood} onClick={() => {navigate('/')}}/>
    </div>

    <h3>Compte</h3>

    <div className='listAccount'>
        <ul className='infoAccount'>
            <li><strong>Nom :</strong> <span className='infoEmployee'>{employeeInfos.firstName}</span></li>
            <li><strong>Prénom :</strong>  <span className='infoEmployee'>{employeeInfos.lastName}</span></li>
            <li><strong>Email :</strong> <span className='infoEmployee'>{employeeInfos.mail}</span></li>
            <li><strong>Password :</strong> 
            <Button onClick={()=>setModalPassword(true)}
            className='modifyPassword'> Modifier Password</Button>
            </li>
        </ul>
    </div>

    <Modal className='modal' show={modalPassword} onHide={() => setModalPassword(false)}>
        <Form onSubmit={handleUpdatePassword}>
            <Modal.Header>
                <Modal.Title>Modifier mot de passe</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalContent'>
                <Form.Group className='formLabel'>
                    <Form.Label>ancien mot de passe</Form.Label>
                    <Form.Control
                        className='inputAccount'
                        type="password"
                        value={formPassword.oldPassword}
                        onChange={(e) => setFormPassword({ ...formPassword, oldPassword: e.target.value })}
                        required
                    />
                </Form.Group>
                <Form.Group className='formLabel'>
                    <Form.Label >nouveau mot de passe</Form.Label>
                    <Form.Control
                        className='inputAccount'
                        type="password"
                        value={formPassword.newPassword}
                        onChange={(e) => setFormPassword({ ...formPassword, newPassword: e.target.value })}
                        required
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className='modalFooter'>
                <Button className='buttonAccount' onClick={() => setModalPassword(false)}>Annuler</Button>
                <Button className='buttonAccount' type="submit">Enregistrer</Button>
            </Modal.Footer>
        </Form>
    </Modal>
    </>
    );
}

 
export default AccountPage;