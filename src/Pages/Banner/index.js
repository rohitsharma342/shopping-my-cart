function Banner() {
    return ( 
        <>
        <div className="w-full flex justify-center mt-10 mb-10 z-0">
            <img src="../banner3.jpg" className=" rounded-lg opacity-50"/>
           
        </div>
        <div className="text-center absolute left-[500px] bottom-[100px]"> 
            <h1 className="text-5xl font-bold ">Explore Our Best In One <br/> Winter Collection</h1>
            <button className="bg-[#31473A] text-white px-10 py-3 mt-5">Explore</button>
            </div>
        </>
     );
}

export default Banner;