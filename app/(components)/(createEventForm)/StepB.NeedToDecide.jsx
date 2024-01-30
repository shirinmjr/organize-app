"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faX } from '@fortawesome/free-solid-svg-icons';
import generateUniqueId from '@/app/util/generateUniqueId';

const NeedToDecide = ({ callBack, questionsData = [] }) => {
    const [questions, setQuestions] = useState(questionsData);

    useEffect(() => {
        callBack(questions);
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
        questions.forEach((question, index) => {
            if (question.id === id) questions[index][nameValue] = textValue;
        });
        setQuestions([...questions]);
    };

    const handleSelectChange = (e, id) => {
        const selectedType = e.target.value;
        console.log("select type: ", selectedType, "for question: ", id);

        switch (selectedType) {
            case "single":
            case "multiple":
            case "top3":
                questions.forEach((question, index) => {
                    if (question.id === id) questions[index].type = selectedType;
                });
                setQuestions([...questions]);
                break;
            case "explain":
                questions.forEach((question, index) => {
                    if (question.id === id) questions[index].type = selectedType;
                });
                setQuestions([...questions]);
                break;
            default:
                console.log("No Option Type Selected");
        }
    };

    const createOption = (id) => {
        questions.forEach((question, index) => {
            if (question.id === id) questions[index].options.push("");
        });
        setQuestions([...questions]);
    };

    const handleAddOption = (event, questionId, optionIndex) => {
        questions.forEach((question, index) => {
            if (question.id === questionId) questions[index].options[optionIndex] = event.target.value;
        });
        setQuestions([...questions]);
    };
    const handleRemoveOption = (event, questionId, optionIndex) => {
        questions.forEach((question, index) => {
            if (question.id === questionId) questions[index].options.splice(optionIndex, 1);
        });
        setQuestions([...questions]);

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

            {questions && questions.map((question) => {
                return (
                    <div key={question.id} >
                        <div className='flex text-xl w-full text-blue-600'>
                            <input
                                className="text-field w-full  py-3  mb-4 text-border-3 rounded text-blue-600" required
                                type="text"
                                id="question"
                                name="question"
                                value={question.question}
                                onChange={(event) => handleTextFieldChange(event, question.id)}
                            />
                        </div>
                        <div className='flex flex-col-2' >
                            How do people to answer:
                            <select
                                className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-500"
                                id="type"
                                name="type"
                                value={question.type}
                                onChange={(event) => handleSelectChange(event, question.id)}
                            >
                                <option value="">Select</option>
                                <option value="single">Single Choice</option>
                                <option value="multiple">Multiple Choice</option>
                                <option value="top3">Pick Top Three</option>
                                <option value="explain">Explain it</option>
                            </select>
                        </div>
                        {question && question.type != "explain" && <div className='flex'>
                            <h2>
                                Add&nbsp;Options <FontAwesomeIcon icon={faCirclePlus}
                                    className='text-blue-600 hover:cursor-pointer hover:text-blue-00 '
                                    onClick={(event) => createOption(question.id)}
                                />
                            </h2>
                        </div>
                        }

                        {question && question.options && question.type != "explain" &&
                            question.options.map((option, index) => {
                                return (<div key={index} className='flex'>
                                    <input type='text'
                                        className="field-option rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-500"
                                        id="option"
                                        name="option"
                                        value={option}
                                        onChange={(event) => handleAddOption(event, question.id, index)} />

                                    <FontAwesomeIcon icon={faX}
                                        className='text-red-600 hover:cursor-pointer hover:text-blue-00 '
                                        onClick={(event) => handleRemoveOption(event, question.id, index)}
                                    />

                                </div>);
                            })}
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export default NeedToDecide;

