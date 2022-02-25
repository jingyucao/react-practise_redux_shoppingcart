import classes from './CartButton.module.css';
import {cartToggleActions} from "../../store/cartToggle";
import {useDispatch, useSelector} from "react-redux";

const CartButton = () => {

  const dispatch = useDispatch();
  const toggleCartHandler=()=>{
    dispatch(cartToggleActions.toggleCart());
  }
  const cartItem = useSelector(state=>state.cartItem.number)

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span key="cart">My Cart</span>
      <span className={classes.badge} key="number">{cartItem}</span>
    </button>
  );
};

export default CartButton;
