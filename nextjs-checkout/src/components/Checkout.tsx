"use client";

import { useState } from 'react';
import CheckoutCreditCard from "./Checkout/CheckoutCreditCard";
import CheckoutPix from "./Checkout/CheckoutPix"

export default function Checkout() {
    const [activeTab, setActiveTab] = useState("creditCard"); // Estado para a aba ativa

    const tabs = [
        { label: "Credit Card", value: "creditCard" },
        { label: "Pix", value: "pix" },
        { label: "PayPal", value: "paypal" }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "creditCard":
                return <CheckoutCreditCard />;
            case "pix":
                return <CheckoutPix />; // Adicione o componente para Pix
            case "paypal":
                return <div>Conteúdo para PayPal</div>; // Adicione o componente para PayPal
            default:
                return <CheckoutCreditCard />;
        }
    };

    return (
        <>
            <h2 className="text-3xl font-bold mb-4">Checkout</h2>
            <div className="lg:flex flex-wrap lg:justify-center lg:items-center">
                <img src="iphone-img-teste.jpg" alt="Image" className="w-full h-[15rem] lg:w-[31rem] lg:h-[22rem] object-cover object-center lg:mb-3" />
                <div className="w-full lg:w-1/2 xl:w-2/3 p-6 text-lg">
                    <h2 className="text-2xl font-bold mb-2 text-left ml-[-1.5rem] lg:ml-[0.20rem]">Product name</h2>
                    <ul className="flex space-x-4 mb-4 ml-[-1.5rem] lg:ml-[0.20rem]">
                        {tabs.map((tab) => (
                            <li key={tab.value} className={`cursor-pointer ${activeTab === tab.value ? 'font-bold' : ''}`} onClick={() => setActiveTab(tab.value)}>
                                {tab.label}
                            </li>
                        ))}
                    </ul>
                    {renderContent()}
                </div>
            </div>
        </>
    );
}