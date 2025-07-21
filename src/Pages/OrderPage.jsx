import { Button } from 'react-bootstrap';
import { useState , useEffect} from 'react';
import {order} from "../Services/orderServices"
import {categoryName} from "../Services/stocksServices"
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../Components/categoryCard';
import Navbar from '../Components/Navbar'

const OrderPage = () => {

    const navigate = useNavigate();
    const [catNames, setCatName] = useState([]);
    // const [products, setProducts] = useState([]);

    const logout = async () => {
        localStorage.removeItem('token')
        alert('Déconneté.e avec succés')
        navigate('/')
    }

    const fetchCategoryName = async () => {
        try {
            const res = await categoryName()
            setCatName(res.data) 
            console.log(res.data);
        } catch (error) {
            console.error('Error fetching categoryName');
        }
    };

    // const fetchProducts= async () => {
    //     try {
    //       const resP = await stocks()
    //       setProducts(resP.data)
    //       console.log(resP.data)
    //     } catch (error) {
    //       console.error('Error fetching products');
    //     }
    // };

    useEffect (() => {
        // 
        fetchCategoryName()
    }, [])
    
    return ( 
        <>

        <Navbar/>

        <div className='navButtons'>
            <Button className='handleButton' onClick={() => (navigate('/stocks'))}>Stocks</Button>
            <Button className='handleButton'>Employé.es</Button>
            <Button className='handleButton'>Statistiques</Button>
        </div>

        <h3>Commandes</h3>
        
        <div className='catCard'>
        {catNames.map((catName) => (
            <CategoryCard catnames = {catName}>
                {catName.categoryName}
            </CategoryCard>
        ))}
        </div>

        </>
    );
}
 
export default OrderPage;