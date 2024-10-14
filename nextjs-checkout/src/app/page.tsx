// import Image from "next/image";
import Checkout from "../components/Checkout";
import Description from "../components/Description";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4 pt-6">
        <Checkout />
        <div className="w-full h-[2px] bg-orange-700 mb-4"/>
        <h1 className="text-3xl flex font-bold justify-center mb-3">Product Description</h1>
        <Description />
        <div className="w-full h-[2px] bg-orange-700 mt-4 mb-4"/>
        <Footer />
      </div>
    </>
  );
}
