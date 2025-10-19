import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from "./context/CartContext/CartProvider";


function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<ItemListContainer titulo={"Bienvenidos a mi tienda"} />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />

            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
