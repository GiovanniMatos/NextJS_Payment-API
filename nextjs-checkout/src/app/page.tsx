// import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4 pt-6">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 xl:w-1/3 p-6 text-lg">
          <img src="iphone-img-teste.jpg" alt="Image" className="w-full h-full object-cover object-center"/>
        </div>
        <div className="w-full lg:w-1/2 xl:w-2/3 p-6 text-lg">
          <h2 className="text-2xl font-bold mb-2">Product name</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed et libero id justo ullamcorper vulputate vel et mauris. 
            Nulla facilisi. Donec quis turpis et lectus ullamcorper rutrum.
          </p>
          <form>
            <div className="mb-4">
              <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name"/>
            </div>
            <div className="mb-4">
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email"/>
            </div>
            <div className="mb-4">
              <input type="text" id="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Address"/>
            </div>
            <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}
