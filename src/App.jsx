import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductoFormContainer";
import './App.css'
function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          
            <Header />
            {/*Dejamos fuera del Routes lo que queremos que no se vuelva a renderizar  navegar*/}

            <Routes>

              <Route path="/" element={<ItemListContainer titulo={"Bienvenidos a mi tienda"} />} />
              <Route path="/category/:category" element={<ItemListContainer titulo={"Bienvenidos a mi tienda"} />} />
              
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />}/>
              <Route path="/carrito" element={<Cart />}/>
              <Route path="/admin" element={<ProductFormContainer/>} />

            </Routes>
            {/*Dejamos fuera del Routes lo que queremos que no se vuelva a renderizar  navegar*/}
            <Footer />
          
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
