

export default function Checkout() {
    return (
      <>
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
            Nulla facilisi. Donec quis turpis et lectus ullamcorper rutrum..
            </p>
            <form>
            <div className="mb-4">
                <input type="number" id="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Card Number"/>
            </div>
            <div className="mb-4">
                <input type="number" id="exp_month" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Exp Month"/>
            </div>
            <div className="mb-4">
                <input type="number" id="exp_year" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Exp Year"/>
            </div>
            <div className="mb-4">
                <input type="number" id="cvc" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="CVC"/>
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay Now</button>
            </form>
        </div>
        </div>
      </>
    );
  }
  