import axios from 'axios';
import SidebarToggle from '../components/SidebarToggle';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';

const HomePage = ({ products }) => (
  <div>
    <SidebarToggle>
      <p>Sidebar Content</p>
    </SidebarToggle>
    <Banner />
    <ProductList products={products} />
  </div>
);

export async function getServerSideProps() {
  try {
    console.log('Fetching products...');
    // Fetch products from third-party API
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log('Response:', response);
    const products = response.data;
    console.log('Products:', products); // Log products to check the fetched data

    return {
      props: {
        products
      }
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: []
      }
    };
  }
}

export default HomePage;
