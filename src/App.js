import { BrowserRouter as Router , Routes ,Route } from "react-router-dom"
import Home from "./Home";
import ProductView from "./comopnents/ProductView";
import Navbar from "./Pages/Navbar";
import Login from "./Pages/Auth/Login";
import VerifyOtp from "./Pages/Auth/VerifyOtp";
import Register from "./Pages/Auth/Register/Register";
import Profile from "./Pages/Profile.js";
import AllProduct from "./Pages/Products/AllProduct.js";
function App() {
    return ( 
<>
<Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product-view" element={<ProductView/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/verify" element={<VerifyOtp/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/products/all" element={<AllProduct/>}></Route>
    </Routes>
</Router>
</>
     );
}

export default App;