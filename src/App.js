// App.js
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './components/Accueil';
import Reservation from './components/Reservation';
import Menu from './components/Menu';
import Galerie from './components/Galerie';
import NoPage from './components/NoPage';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext'; // Import CartProvider

function App() {
  return (
      <CartProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Accueil />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
      </CartProvider>
  );
}

export default App;
