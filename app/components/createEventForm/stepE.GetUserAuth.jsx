"use Client";
import React, { useState, useEffect } from 'react';

export default function GetUserAuth() {

    return (
        <div>
            <div>
                <div className='q-title flex flex-col mx-5 m-10'>
                    <h3>
                        Last step, what is your name and phone number?
                    </h3>
                    <div>
                        We have sent a temporary verification code to your phone number ending in 6680. Enter the code to continue.
                    </div>
                    <div className='flex flex-row justify-start items-center'>
                        <input type="number" className=' w-14 h-14 bg-blue-100  text-blue-60 p-2 rounded-full border-4 border-blue-600  shadow-lg' />
                        <input type="number" className=' w-14 h-14 bg-blue-100  text-blue-60 p-2 rounded-full border-4 border-blue-600  shadow-lg' />
                        <input type="number" className=' w-14 h-14 bg-blue-100  text-blue-60 p-2 rounded-full border-4 border-blue-600  shadow-lg' />
                        <input type="number" className=' w-14 h-14 bg-blue-100  text-blue-60 p-2 rounded-full border-4 border-blue-600  shadow-lg' />
                        <input type="number" className=' w-14 h-14 bg-blue-100  text-blue-60 p-2 rounded-full border-4 border-blue-600  shadow-lg' />
                    </div>
                    <div className='mt-4 mb-4'>
                        <h4>Didn’t receive a code?</h4>
                    </div>
                    <div>
                        <button
                            className="flex flex-row  bg-blue-500 btn text-white rounded hover:bg-blue-700 justify-start"
                            onClick={(e) => sendAuth()}
                        >
                            Verify phone number
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}