"use Client";
import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';


export default function GetUserAuth() {

    const [code, setCode] = useState('');

    // Call our callback when code = 6 chars
    // useEffect(() => {
    //     if (code.length === 5) {
    //        if (typeof callback === 'function') callback(code);
    //        resetCode();
    //    }
    // }, [code]); //eslint-disable-line

    // Listen for external reset toggle
    // useEffect(() => {
    //    resetCode();
    //  }, [reset]); //eslint-disable-line

    // Refs to control each digit input element
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    // Reset all inputs and clear state
    const resetCode = () => {
        inputRefs.forEach(ref => {
            ref.current.value = '';
        });
        inputRefs[0].current.focus();
        setCode('');
    };

    // Handle input
    function handleInput(e, index) {
        const input = e.target;
        const previousInput = inputRefs[index - 1];
        const nextInput = inputRefs[index + 1];

        //Stacking up the user input
        const newCode = [...code];
        // Convert lowercase letters to uppercase
        if (/^[a-z]+$/.test(input.value)) {
            const uc = input.value.toUpperCase();
            newCode[index] = uc;
            inputRefs[index].current.value = uc;
        } else {
            newCode[index] = input.value;
        }
        setCode(newCode.join(''));

        input.select();

        if (input.value === '') {
            // If the value is deleted, select previous input, if exists
            if (previousInput) {
                previousInput.current.focus();
            }
        } else if (nextInput) {
            // Select next input on entry, if exists
            nextInput.current.select();
        }
    }

    // Handle backspace key
    function handleKeyDown(e, index) {
        const input = e.target;
        const previousInput = inputRefs[index - 1];
        const nextInput = inputRefs[index + 1];

        if ((e.keyCode === 8 || e.keyCode === 46) && input.value === '') {
            e.preventDefault();
            setCode((prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1));
            if (previousInput) {
                previousInput.current.focus();
            }
        }
    }

    // Capture pasted characters
    const handlePaste = (e) => {
        const pastedCode = e.clipboardData.getData('text');
        if (pastedCode.length === 5) {
            setCode(pastedCode);
            inputRefs.forEach((inputRef, index) => {
                inputRef.current.value = pastedCode.charAt(index);
            });
        }
    };

    return (
        <div className="flex flex-col items-start mt-4">
            <div className='q-title flex flex-col my-5'>
                <h3>
                    Please verify your phone number:
                </h3>
            </div>
            <div className='mb-4'>
                We have sent a temporary verification code to your phone number ending in 6680. Enter the code to continue.
            </div>
            <div className='mb-4'>
                <h4>Didn’t receive a code?</h4>
            </div>
            <div className="flex gap-2 relative items-center mb-4">
                {[0, 1, 2, 3, 4].map((index) => (
                    <input
                        className="text-2xl w-14 h-14 flex bg-blue-100  text-blue-60 rounded-full border-4 border-blue-600  shadow-lg p-2 text-center mb-4"
                        key={index}
                        type="text"
                        maxLength={1}
                        onChange={(e) => handleInput(e, index)}
                        ref={inputRefs[index]}
                        autoFocus={index === 0}
                        onFocus={e => e.target.select()}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                    // disabled={isLoading}
                    />
                ))}
                {code.length ?
                    <div> <FontAwesomeIcon icon={faX}
                        className='text-red-600 hover:cursor-pointer hover:text-blue-00 m-2 '
                        onClick={resetCode}
                    />
                    </div>
                    : <></>
                }
            </div>

            <div>
                <button
                    className="flex flex-row  bg-blue-500 btn text-white rounded hover:bg-blue-700 justify-start"
                    onClick={resetCode}//should change to callback resend a new code!!!
                >
                    Send a New Code
                </button>
            </div>
        </div >
    );

}