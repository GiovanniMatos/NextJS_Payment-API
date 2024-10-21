"use client";

import { useState } from "react";

export default function CheckoutPix(){
    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
      if (!navigator.clipboard) {
        // Handle fallback for older browsers
        return;
      }
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Text copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy text:',   
        err);
        });
    };
  
    const handleClick = () => {
      const textToCopy = PixCode; 
      handleCopy(textToCopy);
      setCopied(true); 
    };

    const PixCode = 'your-pix-code-here';
    return(
        <>
        <div className="bg-gray-800 h-[14rem] w-[14rem] mx-auto "/>
        <input
        className="w-[20rem] md:w-[30rem] lg:w-[30rem] pt-2 pb-2 pl-4 border-zinc-300 border-[0.5px] rounded-[4px] mt-3 text-gray-800"
        type="text"
        defaultValue={PixCode}
        readOnly
        />
        <button onClick={handleClick} className="font-bold text-white bg-green-500 pl-4 pr-4 pt-1 pb-1 rounded-md mt-1 flex mx-auto">
            {copied ? 'Copiado!' : 'Copiar código'}
        </button>
        </>
    )
}