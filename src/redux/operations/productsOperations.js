import axios from 'axios';
import productsActions from '../actions/productsActions';

axios.defaults.baseURL = "https://product-list-f8fe2-default-rtdb.firebaseio.com";

const addNewProduct = product => async dispatch => {
  dispatch(productsActions.addNewProductRequest());

  try {
    const { data } = await axios.post('/products.json', product);
    dispatch(
      productsActions.addNewProductSuccess({ ...product, id: data.name }),
    );
  } catch (error) {
    dispatch(productsActions.addNewProductError(error));
  }
};

const getProducts = () => async dispatch => {
  dispatch(productsActions.getProductsRequest());

  try {
    const { data } = await axios.get('/products.json');
    if (data) {
      const products = Object.keys(data).map(key => ({
        ...data[key],
        id: key,
      }));
      dispatch(productsActions.getProductsSuccess(products));
    }
  } catch (error) {
    dispatch(productsActions.getProductsError(error));
  }
};



const productsOperations = {
  addNewProduct,
  getProducts,
  // deleteProduct,
  // editProduct,
};
export default productsOperations;