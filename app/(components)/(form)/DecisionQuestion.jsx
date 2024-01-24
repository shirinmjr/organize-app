"use client";
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DecisionQuestion = () => {
    const router = useRouter();
    const questionsRef = useRef();

    const [selectedType, setSelectedType] = useState('');

    const createQuestion = (e) => {
        e.preventDefault();
        console.log("current", questionsRef.current);
        console.log(selectedType);

        const newElement = document.createElement('div');
        newElement.innerHTML = '<input type="text" />';

        // Append the new element to the container
        questionsRef.current.appendChild(newElement);

    };







    const handleSelectChange = (e) => setSelectedType(e.target.value);

    return (
        <div>
            <div className="mb-4  ">
                <h1 className="block text-sm font-bold mb-2">What still needs to be decided for your event?</h1>
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

                    This is where questions go



                </div>
            </div>
        </div>

    );
};

export default DecisionQuestion;

