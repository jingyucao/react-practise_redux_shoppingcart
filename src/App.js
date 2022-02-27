import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {uiActions} from "./store/uiSlice";
import {Fragment} from "react";

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const toggleCart = useSelector(state => state.ui.toggleCart);
  const cart = useSelector(state => state.cartItem);
  const notification = useSelector(state => state.ui.notification);

  //we can't use async function directly in useEffect, so we should build a function to hold the async function

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      }))
      const response = await fetch('https://react-http-8b31d-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        })
      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }
      dispatch(uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      )
    }

    if (isInitial === true) {
      isInitial = false;
      return
    }
    //this inInitial helps to check if it is the first time that the component been rendered
    //if it is the first time, we will return before we continue to send the cart data.

    sendCartData().catch(error => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        })
      )
    });
  }, [cart])

  //the difference between POST and PUT is, PUT will overwrite the existing data

  return (
    <Fragment>
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}/>}
      <Layout>
        {toggleCart && <Cart/>}
        <Products/>
      </Layout>
    </Fragment>

  );
}

export default App;
