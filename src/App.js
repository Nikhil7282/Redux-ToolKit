import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { total } from "./features/cart/cartSlice";
import Model from "./components/Model";

function App() {
  const {show}=useSelector((store)=>store.model)
  const dispatch=useDispatch()
  const {cartItems}=useSelector((store)=>store.cart)

  useEffect(()=>{
    dispatch(total())
  },[cartItems])

  return <main>
    {show && <Model/>}
    <Navbar/>
    <CartContainer/>
  </main>
}
export default App;
