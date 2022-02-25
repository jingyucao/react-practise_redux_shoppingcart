import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from "react-redux";

function App() {

  const toggleCart = useSelector(state => state.cartToggle.toggleCart);
  const showCart = useSelector(state => state.cartItem.showCart)

  return (
    <Layout>
      {toggleCart && showCart && <Cart/>}
      {/* eslint-disable-next-line react/jsx-key */}
      <Products/>
    </Layout>
  );
}

export default App;
