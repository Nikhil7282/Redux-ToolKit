import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { total } from "./features/cart/cartSlice";

function App() {
  const dispatch=useDispatch()
  const {cartItems}=useSelector((store)=>store.cart)

  useEffect(()=>{
    dispatch(total())
  },[cartItems])

  return <main>
    <Navbar/>
    <CartContainer/>
  </main>
}
export default App;
