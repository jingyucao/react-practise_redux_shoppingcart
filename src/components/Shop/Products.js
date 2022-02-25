import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'A Song of Ice and Fire',
    description: 'a series of epic fantasy novels',
  },
  {
    id: 'p2',
    price: 12,
    title: 'Harry Potter',
    description: 'the lives of a young wizard',
  },
  {
    id: 'p3',
    price: 18,
    title: 'Dune',
    description: 'science fiction novel',
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => <ProductItem
          title={product.title}
          price={product.price}
          description={product.description}
          key={product.id}
          id={product.id}
        />)}
      </ul>
    </section>
  );
};

export default Products;
