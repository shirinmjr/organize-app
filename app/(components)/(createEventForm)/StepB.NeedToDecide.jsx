"use client";
import { useRouter } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import generateUniqueId from '@/app/util/generateUniqueId';
import { set } from 'mongoose';


const NeedToDecide = ({ callBack }) => {

    const initialQuestionList = {
        id: "",
        question: "",
        type: "",
        options: [],
    };
    const router = useRouter();
    const questionsRef = useRef();

    const [questions, setQuestions] = useState([]);
    // const [selectedType, setSelectedType] = useState('');

    useEffect(() => {

        console.log("questions in useEffect", questions);

    }, [questions]);


    const createQuestion = (e) => {

        const question = {};
        e.preventDefault();
        // const newElement = document.createElement('div');
        // newElement.innerHTML = ' <input type="text" />';
        // Append the new element to the container
        //  questionsRef.current.appendChild(newElement);
        const questionId = generateUniqueId();
        question.id = questionId;


        setQuestions(questions => [...questions, question]);

    };

    // const handleTextField = (e) => {
    //     const textValue = e.target.value;
    //     const nameValue = e.target.name;

    //     console.log("changing text  for", nameValue, "value", textValue);

    // };


    const createTextfield = () => {

        const newElement = document.createElement('div');
        newElement.innerHTML = '<label>Please Explain: </label><input type="text" />';

        // Append the new element to the container
        questionsRef.current.appendChild(newElement);
    };

    // const handleSelectChange = (e) => setSelectedType(e.target.value);

    const handleSelectChange = (e, id) => {
        const selectedType = e.target.value;
        switch (selectedType) {
            case "single":
            case "multiple":
            case "top3":
                //     console.log("Creating Single choice question");
                //     createRadio();
                //     break;
                // case "multiple":
                //     console.log("Creating multiple choice question");


                console.log("select type: ", selectedType, "for question: ", id);
                // const question = questions.find(question => question.id === id);
                questions.forEach((question, index) => {
                    if (question.id === id) {
                        questions[index].type = selectedType;

                    }
                });
                setQuestions([...questions]);
                //  createOptions();
                break;
            case "explain":
                console.log("Creating Text question");
                createTextfield();
                break;
            default:
                console.log("No Type Was Selected");
        }
    };

    const createCheckBox = () => {
        const newElement = document.createElement('div');
        newElement.innerHTML = '[]<input type="text" />';

        // Append the new element to the container
        questionsRef.current.appendChild(newElement);
    };
    const createRadio = () => {
        const newElement = document.createElement('div');
        newElement.innerHTML = `<div className="flex bg-black">
        ( ) <input type="text" />
        ( ) <input type="text" />
        ( ) <input type="text" />
        ( ) <input type="text" />
        </div> `;

        // Append the new element to the container
        questionsRef.current.appendChild(newElement);
    };







    return (
        <div className="q-title flex flex-col h-screen mx-5 m-10">
            <div className='flex gap-7'>
                <h3 className="mb-4">What still needs to be decided for your event?</h3>
                <h2>
                    Add&nbsp;<FontAwesomeIcon icon={faCirclePlus}
                        className='text-blue-600 hover:cursor-pointer hover:text-blue-00 '
                        onClick={createQuestion}
                    />
                </h2>
            </div>

            {questions.map((question) => {
                return (
                    <div key={question.id} >
                        <div className='flex text-xl text-blue-600'>
                            <input
                                type="text"
                                id={question.id}
                                name="question"
                                className="text-field w-full  py-2  text-border-3 rounded text-blue-600" required
                            />

                            <select
                                id="type"
                                name="type"
                                onChange={(event) => handleSelectChange(event, question.id)}
                                className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-500"
                            >
                                <option value="">Select</option>
                                <option value="single">Single Choice</option>
                                <option value="multiple">Multiple Choice</option>
                                <option value="top3">Top Three</option>
                                <option value="explain">Explain it</option>
                            </select>
                        </div>
                        <div className='flex'>
                            <input
                                className='text-field py-2  text-border-3 rounded text-blue-600'
                            />
                            <h2>
                                <FontAwesomeIcon icon={faCirclePlus}
                                    className='text-blue-600 hover:cursor-pointer hover:text-blue-00 '
                                    onClick={createQuestion}
                                />
                            </h2>
                        </div>
                    </div>
                );


            })}

            <div ref={questionsRef}>

                {/* <button type='submit' className='text-black border-x-white'>Save</button> */}



            </div>
        </div>
    );
};

export default NeedToDecide;

