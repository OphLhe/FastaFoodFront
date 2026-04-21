import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { order } from "../Services/orderServices";
import { categoryName, stocks } from "../Services/stocksServices";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../Components/categoryCard";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";

const OrderPage = () => {
  const navigate = useNavigate();
  const [catNames, setCatName] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);

  const logout = async () => {
    localStorage.removeItem("token");
    alert("Déconneté.e avec succés");
    navigate("/");
  };

  const fetchCategoryName = async () => {
    try {
      const res = await categoryName();
      setCatName(res.data);
    } catch (error) {
      console.error("Error fetching categoryName");
    }
  };

  const fetchProducts = async () => {
    try {
      const resP = await stocks();
      setProducts(resP.data);
      console.log(resP.data);
    } catch (error) {
      console.error("Error fetching products");
    }
  };

  useEffect(() => {
    fetchCategoryName();
    fetchProducts();
  }, []);

  const filteredProducts = selectedCategoryName
    ? products.filter(
        (product) => product.categoryName === selectedCategoryName,
      )
    : products;

  return (
    <>
      <div className="navButtons">
        <Button className="handleButton" onClick={() => navigate("/stocks")}>
          Stocks
        </Button>
        <Button className="handleButton">Employé.es</Button>
        <Button className="handleButton">Statistiques</Button>
      </div>

      <h2>Commandes</h2>

      <div className="catCard">
        <Button
          className="buttonCatCard"
          onClick={() => setSelectedCategoryName(null)}
        >
          Tous les produits
        </Button>
        {catNames.map((catName) => (
          <CategoryCard
            key={catName.idCategory}
            catname={catName}
            onClick={() => setSelectedCategoryName(catName.categoryName)}
          />
        ))}
      </div>

      <div className="prodCard">
        {filteredProducts.map((product) => (
          <ProductCard key={product.idProduct} productname={product} />
        ))}
      </div>
    </>
  );
};

export default OrderPage;
