import {Button} from 'react-bootstrap';

const CategoryCard = ({catname, onClick}) => {
 
    return ( 
        <>
        <Button  
        className='buttonCatCard'
        onClick={()=>onClick(catname.categoryName)}
        value={catname.idCategory}>
          {catname.categoryName}
        </Button>
        </>
    );
}
 
export default CategoryCard;
