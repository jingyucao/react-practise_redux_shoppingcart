import classes from './CartButton.module.css';
import {cartToggleActions} from "../../store/cartToggle";
import {useDispatch, useSelector} from "react-redux";

const CartButton = () => {

  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cartItem.totalQuantity)

  const toggleCartHandler = () => {
    dispatch(cartToggleActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
