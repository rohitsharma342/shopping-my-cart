import Banner from "../Pages/Banner";
import Category from "../Pages/Category";
import Navbar from "../Pages/Navbar";
import TopProduct from "../Pages/Products/TopProducts";
import Promo1 from "../Pages/Promo/Promo1";

function Home() {
    return ( 
        <>
        {/* <Navbar/> */}
        <Banner/>
        <Category/>
        <TopProduct/>
        <Promo1/>
        </>
     );
}

export default Home;