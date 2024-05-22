import TopProductCard from "../../comopnents/TopProductCard";

function TopProduct() {
    let products=[1,2,3,4,5,6,7,8,9,10]
    return ( 
        <>
          <div className="space-x-16 ms-16 text-3xl"><h1>Top Products</h1></div>
        <div className="flex justify-center px-10 mb-3   flex-wrap">
            {products.map(i=>(
   <TopProductCard/>
            ))}
     
        </div>
       
        </>
     );
}

export default TopProduct;