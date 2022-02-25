import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {cartItemActions} from "../../store/cartItem";
import {useDispatch, useSelector} from "react-redux";

const ProductItem = (props) => {
  const {title, price, description} = props;

  const cartItemQuantity = useSelector(state => state.cartItem.number)

  const dispatch = useDispatch();
  const addItemHandler = () => {
    console.log(cartItemQuantity);
    dispatch(cartItemActions.addItem())
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
