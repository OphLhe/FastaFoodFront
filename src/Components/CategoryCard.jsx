import {Button} from 'react-bootstrap';

const CategoryCard = ({catname}) => {
 
    return ( 
        <>
        <Button  
        className='buttonCatCard'
        value={catname.idCategory}>
          {catname.categoryName}
        </Button>
        </>
    );
}
 
export default CategoryCard;
