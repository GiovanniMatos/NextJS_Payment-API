

export default function CheckoutCreditCard(){
    return(
        <>
        <form>
            <div className="lg:mb-4 mb-1">
                <input type="number" id="number" className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Card Number"/>
            </div>
            <div className="lg:mb-4 mb-1">
                <input type="number" id="exp_month" className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Exp Month"/>
            </div>
            <div className="lg:mb-4 mb-1">
                <input type="number" id="exp_year" className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Exp Year"/>
            </div>
            <div className="lg:mb-4 mb-1">
                <input type="number" id="cvc" className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="CVC"/>
            </div>
            <button type="submit" className="ml-[-1.5rem] lg:ml-0 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay Now</button>
        </form>
        </>
    )
}

