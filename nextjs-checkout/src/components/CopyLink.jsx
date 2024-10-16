"use client";

import { CIcon } from '@coreui/icons-react';
import { cilCopy, cilShareAlt } from '@coreui/icons';

export default function CopyLink(){
    return(
        <>
        <div className="flex">
            <h1 className="font-bold text-2xl mr-2">Share</h1>
            <CIcon icon={cilShareAlt} className="w-6"/>
        </div>
        <div className="flex bg-gray-800 pt-2 pb-2 lg:w-[40%]">
            <input type="text"
            defaultValue="something here will be copied"
            className="ml-3 text-lg pl-2 text-black rounded-l-sm" />

            <button className="pr-4 pt-2 pb-2 rounded-r-sm bg-orange-600 flex">
                <h1 className="ml-4 mr-1 font-bold">Copy</h1>
                <CIcon icon={cilCopy} className="w-6"/>
            </button>
        </div>
        </>
    )
}