import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Book 1',
    description: 'First book',
  },
  {
    id: 'p2',
    price: 4,
    title: 'Book 2',
    description: 'Second book',
  },
];

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => {
          const { id, price, title, description } = product;
          return (
            <ProductItem
              id={id}
              key={id}
              title={title}
              price={price}
              description={description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
