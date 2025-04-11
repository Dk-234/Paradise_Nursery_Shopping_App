import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListing />} /> {/* Ensure this is correct */}
            <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
    </Router>
);

export default App;
