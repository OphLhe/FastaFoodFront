import { Button } from "react-bootstrap";
import("../Styles/productCard.css");

const ProductCard = ({ productname }) => {
  return (
    <>
      <div className="productCard" value={productname.idProduct}>
        <span>{productname.categoryName}</span>
        <h3> {productname.nameProduct}</h3>
        <span>
          <strong>Prix :</strong>
          {productname.priceHttc}
        </span>
        <span>
          <strong>En Stock :</strong> {productname.stock}
        </span>
        <div className="numberOrder">
          <input type="number" min={0} max={productname.stock} />
          <Button className="orderButton">+</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
