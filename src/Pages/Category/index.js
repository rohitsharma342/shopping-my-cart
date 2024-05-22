import CategoryCard from "../../comopnents/CategoryCard";
import EastIcon from '@mui/icons-material/East';
function Category() {
    let abc=[1,2,3,4,5]
    return ( 
        <>
        <div className="space-x-16 ms-16 text-3xl"><h1>Categories</h1></div>
        <div className="flex flex-wrap items-center justify-center mb-5 space-x-16 mt-16">
      
            {abc.map(i=>(
   <CategoryCard/>
            ))}
           <div className="flex items-center space-x-2">
    <h1>Explore More</h1>
    <EastIcon className="text-white cursor-pointer bg-[#31473A] rounded-full p-3 bounce-right" style={{ fontSize: '3rem' }} />
</div>

        </div>
        </>
     );
}

export default Category;