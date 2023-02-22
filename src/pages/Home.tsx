import { Fragment, useState, useCallback, useEffect } from 'react';
import Carousel from '../components/Carousel';
import Filter from '../components/Filter';
import { Product } from '../models/models';

const CATEGORIES = ['dry', 'semi-dry', 'sweet'];

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [state, setState] = useState<{
    products: Product[];
    filters: Set<string>;
  }>({
    products: data,
    filters: new Set(),
  });

  useEffect(() => {
    setLoading(true);
    fetch('/list.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
        setState({
          products: data,
          filters: new Set(),
        });
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setState((previousState) => {
        let filters = new Set(previousState.filters);
        let products = data;
        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        if (filters.size) {
          products = products.filter((product: Product) => {
            return filters.has(product.type);
          });
        }

        return {
          filters,
          products,
        };
      });
    },
    [setState, data]
  );

  return (
    <Fragment>
      <Filter categories={CATEGORIES} onFilterChange={handleFilterChange} />
      {isLoading ? (
        <h3 className="loading">Loading...</h3>
      ) : (
        <Carousel products={state.products} />
      )}
    </Fragment>
  );
};

export default Home;
