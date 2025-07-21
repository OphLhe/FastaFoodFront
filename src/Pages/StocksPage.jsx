import { Button, Form, Modal } from "react-bootstrap";
import imageFastaFood from "../assets/logo_fastaFood.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {addStocks , categoryName, stocks} from "../Services/stocksServices"
import Navbar from '../Components/Navbar'

const StocksPage = () => {
  const navigate = useNavigate();
  const [productInfos, setProductInfos] = useState({unit:'', stock:'', criticalStock:'', priceHttc:'', nameProduct:'', categoryId:''})
  const [modalAddProduct ,setModalAddProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [catNames, setCatName] = useState([]);
  const [showAllColumns, setShowAllColumns] = useState(false);

  const toggleColumns = () => {
    setShowAllColumns(!showAllColumns);
  };

  const handleResize = () => {

    if(window.innerWidth >= 768) {
      setShowAllColumns(true)
    } else{
      setShowAllColumns(false)
    }
    window.addEventListener ('resize', handleResize);
    return() => window.removeEventListener('resize', handleResize);
  }

  const logout = async () => {
    localStorage.removeItem("token");
    alert("Déconneté.e avec succés");
    navigate("/");
  };

  const handleSubmit = async () => {
    try {
    await addStocks(productInfos) 
    alert('produit ajouté') 
    } catch (error) {
    console.log(error)
    alert("echec lors de l'ajout")
    }
  };

  const fetchProducts= async () => {
    try {
      const resP = await stocks()
      setProducts(resP.data)
      console.log(resP.data)
    } catch (error) {
      console.error('Error fetching products');
    }
  };

  const fetchCategoryName = async () => {
    try {
      const res = await categoryName()
      setCatName(res.data) 
    } catch (error) {
      console.error('Error fetching categoryName');
    }
  };

  useEffect (() => {
    fetchCategoryName()
    fetchProducts()
    handleResize()
  }, [])
 
  return (
    <>
      <Navbar/>

      <div className="navButtons">
        <Button className="handleButton" onClick={() => (navigate('/order'))}>Commandes</Button>
        <Button className="handleButton">Employé.es</Button>
        <Button className="handleButton">Statistiques</Button>
      </div>

      <div className="stocks">
        <h3>Stocks</h3>
        <Button className="addProductButton" onClick={() => setModalAddProduct(true)}>+</Button>
      </div>
      <Button onClick={toggleColumns} className="toggleColumnsButton">
        {showAllColumns ? 'Voir moins': 'Voir plus'}
      </Button>
      <div className="tableProduct">
      <table className="table">
        <thead>
          <tr>
            <th>Id produit</th>
            <th>Nom du Produit</th>
            <th>Categorie</th>
            {showAllColumns && (
            <>
              <th>En Stock</th>
              <th>Unité</th>
              <th>Prix Unitaire</th>
            </>
            )}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.idProduct}</td>
              <td>{product.nameProduct}</td>
              <td>{product.categoryName}</td>
              {showAllColumns && (
              <>
                <td >{product.stock}</td>
                <td>{product.unit}</td>
                <td>{product.priceHttc}</td>
              </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Button onClick={toggleColumns} className="toggleColumnsButton">
        {showAllColumns ? 'Voir moins': 'Voir plus'}
      </Button>

      <Modal className='modal' 
      show={modalAddProduct} 
      onHide={() => setModalAddProduct(false)}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header>
            <Modal.Title>Ajouter un produit</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContent'>
            <Form.Group className='formLabel'>
              <Form.Label>Nom du produit</Form.Label>
              <Form.Control 
              value={productInfos.nameProduct}
              onChange={(e) => setProductInfos ({... productInfos, nameProduct: e.target.value})}
              className='inputAccount'/>
            </Form.Group>
            <Form.Group className='formLabel'>
              <Form.Label>En stock</Form.Label>
              <Form.Control 
              value={productInfos.stock}
              onChange={(e) => setProductInfos ({... productInfos, stock: e.target.value})}
              className='inputAccount'
              type="number"/>
            </Form.Group >
            <Form.Group className='formLabel'>
              <Form.Label>Unité</Form.Label>
              <Form.Control 
              value={productInfos.unit}
              onChange={(e) => setProductInfos ({... productInfos, unit: e.target.value})}
              className='inputAccount'/>
            </Form.Group>
            <Form.Group className='formLabel'>
              <Form.Label>Stock minimum autorisé</Form.Label>
              <Form.Control 
              value={productInfos.criticalStock}
              onChange={(e) => setProductInfos ({... productInfos, criticalStock: e.target.value})}
              className='inputAccount'
              type="number"/>
            </Form.Group>
            <Form.Group className='formLabel'>
              <Form.Label>Prix en €</Form.Label>
              <Form.Control 
              value={productInfos.priceHttc}
              onChange={(e) => setProductInfos ({... productInfos, priceHttc: e.target.value})}
              className='inputAccount'
              type="number"/>
            </Form.Group>
            <Form.Group className='formLabel'>
              <Form.Label>Categorie Produit</Form.Label>
              <Form.Select
              className='inputAccount'
              onChange={(e) => setProductInfos({...productInfos, categoryId: e.target.value})}>
                <option>Open this select menu</option>
                {catNames.map((catName, index) => (
                  <option key={index} value={catName.idCategory}>
                    {catName.categoryName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
           
          </Modal.Body>
          <Modal.Footer className='modalFooter'>
            <Button className='buttonAccount'
            onClick={()=>setModalAddProduct(false)}>
              Annuler
            </Button>
            <Button className='buttonAccount'
            type="submit">
              Enregistrer
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default StocksPage;
