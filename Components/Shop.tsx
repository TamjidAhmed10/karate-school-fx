const Shop = () => {
    return (
      <div>
        <div className=" ">
          <h1 className="text-3xl text-center"> Shop</h1>
          <div className=" bg-gray-100 mx-auto grid grid-cols-1 w-80 gap-4 rounded-2xl mt-10">
            <img
              src="/1.jpg"
              alt="ddd"
              className=" h-80 w-full object-cover rounded-2xl"
            />
            <h2 className="text-center text-2xl">Karate-gi- 100 % Cotton</h2>
            <button className="btn w-36 mx-auto">Order Now </button>
          </div>
        </div>
      </div>
    );
}

export default Shop
