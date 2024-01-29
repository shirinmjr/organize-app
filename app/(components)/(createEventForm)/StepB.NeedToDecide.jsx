"use client";
import { useRouter } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import generateUniqueId from '@/app/util/generateUniqueId';


const NeedToDecide = ({ callBack }) => {
    const router = useRouter();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        console.log("questions in useEffect", questions);
    }, [questions]);


    const createQuestion = () => {
        const question = {};
        const questionId = generateUniqueId();
        question.id = questionId;
        question.options = [];
        setQuestions(questions => [...questions, question]);
    };

    const handleTextFieldChange = (e, id) => {
        const textValue = e.target.value;
        const nameValue = e.target.name;
        console.log("updating ", nameValue, " for: ", id, " with value ", textValue);
        questions.forEach((question, index) => { if (question.id === id) questions[index][nameValue] = textValue; });
        setQuestions([...questions]);
    };

    const handleSelectChange = (e, id) => {
        const selectedType = e.target.value;
        console.log("select type: ", selectedType, "for question: ", id);

        switch (selectedType) {
            case "single":
            case "multiple":
            case "top3":
                questions.forEach((question, index) => { if (question.id === id) questions[index].type = selectedType; });
                setQuestions([...questions]);
                createOption();
                break;
            case "explain":
                questions.forEach((question, index) => { if (question.id === id) questions[index].type = selectedType; });
                setQuestions([...questions]);
                break;
            default:
                console.log("No Option Type Selected");
        }
    };

    const createOption = () => {
        console.log("creating new option");
        const options = [];
        return options;

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
                        <div className='flex text-xl w-full text-blue-600'>
                            <input
                                className="text-field w-full  py-3  mb-4 text-border-3 rounded text-blue-600" required
                                type="text"
                                id={question.id}
                                name="question"
                                onChange={(event) => handleTextFieldChange(event, question.id)}
                            />
                        </div>
                        <div className='flex flex-col-2' >
                            How do people to answer:
                            <select
                                className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-500"
                                id="type"
                                name="type"
                                onChange={(event) => handleSelectChange(event, question.id)}
                            >
                                <option value="">Select</option>
                                <option value="single">Single Choice</option>
                                <option value="multiple">Multiple Choice</option>
                                <option value="top3">Pick Top Three</option>
                                <option value="explain">Explain it</option>
                            </select>
                        </div>
                        <div className='flex'>
                            <h2>
                                Add&nbsp;Options <FontAwesomeIcon icon={faCirclePlus}
                                    className='text-blue-600 hover:cursor-pointer hover:text-blue-00 '
                                    onClick={createOption}
                                />

                                {question.options && question.options.map((option, index) => {
                                    return (<div key={index}>
                                        <input type='text'
                                            className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-500"
                                            id="option"
                                            name="option" />
                                    </div>);
                                })}
                            </h2>

                        </div>

                    </div>

                );


            })}



            {/* <button type='submit' className='text-black border-x-white'>Save</button> */}




            <hr />
        </div>
    );
};

export default NeedToDecide;

