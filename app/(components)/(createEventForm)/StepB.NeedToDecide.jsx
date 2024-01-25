"use client";
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NeedToDecide = () => {
    const router = useRouter();
    const questionsRef = useRef();

    const [selectedType, setSelectedType] = useState('');

    const createQuestion = (e) => {
        e.preventDefault();
        console.log("current", questionsRef.current);
        console.log("select type", selectedType);

        const newElement = document.createElement('div');
        newElement.innerHTML = ' <input type="text" />';

        // Append the new element to the container
        questionsRef.current.appendChild(newElement);
        switch (selectedType) {
            case "s":
                console.log("Creating Single choice question");
                createRadio();
                break;
            case "m":
                console.log("Creating multiple choice question");

                createCheckBox();
                break;
            case "t":
                console.log("Creating Text question");
                createTextfield();
                break;
            default:
                console.log("No Type Was Selected");
        }


    };

    const createTextfield = () => {

        const newElement = document.createElement('div');
        newElement.innerHTML = '<label>Please Explain: </label><input type="text" />';

        // Append the new element to the container
        questionsRef.current.appendChild(newElement);
    };
    const createCheckBox = () => {
        const newElement = document.createElement('div');
        newElement.innerHTML = '[]<input type="text" />';

        // Append the new element to the container
        questionsRef.current.appendChild(newElement);
    };
    const createRadio = () => {
        const newElement = document.createElement('div');
        newElement.innerHTML = `<div className="flex">
        ( ) <input type="text" />
        ( ) <input type="text" />
        ( ) <input type="text" />
        ( ) <input type="text" />
        </div> `;

        // Append the new element to the container
        questionsRef.current.appendChild(newElement);
    };






    const handleSelectChange = (e) => setSelectedType(e.target.value);

    return (
        <div>
            <div className="mb-4  ">
                <h1 className="">What still needs to be decided for your event?</h1>
                <div className='flex text-xl text-blue-600'>
                    <select
                        id="type"
                        name="type"

                        onChange={(event) => handleSelectChange(event)}
                        className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-500"
                    >
                        <option value="">Select</option>
                        <option value="s">Single Choice</option>
                        <option value="m">Multiple Choice</option>
                        <option value="t">Explain it</option>
                    </select>
                    Question Add&nbsp;

                    <FontAwesomeIcon icon={faCirclePlus}
                        // type='submit'
                        className='text-blue-600 hover:cursor-pointer hover:text-blue-00 '
                        onClick={createQuestion}
                    />

                </div>
                <div ref={questionsRef}>

                    <button type='submit' className='text-black border-x-white'>Save</button>



                </div>
            </div>
        </div>

    );
};

export default NeedToDecide;

