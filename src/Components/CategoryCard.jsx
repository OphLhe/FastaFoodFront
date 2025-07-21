import {Button} from 'react-bootstrap';

const CategoryCard = (catNames) => {
 
    return ( 
        <>
        <Button  
        className='buttonCatCard'
        key={catNames} 
        value={catNames.catnames.categoryName}>
          {catNames.catnames.categoryName}
        </Button>
        </>
    );
}
 
export default CategoryCard;
