import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {cartItemActions} from "../../store/cartItemSlice";
import {useDispatch} from "react-redux";

const ProductItem = (props) => {
  // const cart = useSelector(state => state.cartItem);
  const {title, price, description, id} = props;

  const dispatch = useDispatch();

  const addItemHandler = () => {

    dispatch(cartItemActions.addItemToCart({
        id: id,
        title: title,
        price: price
      }
    ))

    //NEVER mutate redux state, especially not outside a reducer
    //create copy via slice to avoid mutating

    }

    return (
      <li className={classes.item}>
        <Card>
          <header>
            <h3>{title}</h3>
            <div className={classes.price}>${price.toFixed(2)}</div>
          </header>
          <p>{description}</p>
          <div className={classes.actions}>
            <button onClick={addItemHandler}>Add to Cart</button>
          </div>
        </Card>
      </li>
    );
  };

  export default ProductItem;
