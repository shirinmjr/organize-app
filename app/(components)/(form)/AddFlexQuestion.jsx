"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AddFlexQuestion = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState('');



    const handleRadioChange = (event) => {
        console.log("change radio");
        const value = event.target.value;
        setSelectedOption(value);
        console.log(value);
    };
    return (
        <div>
            <div class="mb-4  ">
                <h1 class="block text-sm font-bold mb-2">What still needs to be decided for your event?</h1>
                <label className='text-xl'>Add Question&nbsp;</label>
                <FontAwesomeIcon icon={faCirclePlus}
                    className='text-blue-600 hover:cursor-pointer hover:text-blue-00 '
                //  onClick={addFlexQuestion}
                />
                <div className='border rounded px-5 m-auto'>
                    <div class=" mb-4">
                        <textarea id="eventDetails" name="eventDetails" class="text-blue-600 w-full rounded" rows="2" required></textarea>
                        <label class="block text-sm font-bold mb-2">How do you want then to answer?</label>

                        <div className="flex flex-row">
                            <div class="flex">
                                <input
                                    type="radio"
                                    id="option1"
                                    name="decision"
                                    value="option1"
                                    class="form-radio"
                                    required
                                    checked={selectedOption === 'option1'}
                                    onChange={handleRadioChange}

                                />
                                <label for="option1" class="ml-2">Select Many</label>
                            </div>

                            <div class="flex">
                                <input
                                    type="radio"
                                    id="option2"
                                    name="decision"
                                    value="option2"
                                    class="form-radio"
                                    required
                                    checked={selectedOption === 'option2'}
                                    onChange={handleRadioChange} />
                                <label for="option2" class="ml-2">Select One</label>
                            </div>

                            <div class="flex">
                                <input type="radio"
                                    id="option3"
                                    name="decision"
                                    value="option3"
                                    class="form-radio"
                                    required
                                    checked={selectedOption === 'option3'}
                                    onChange={handleRadioChange}
                                />
                                <label for="option3" class="ml-2">Explain</label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    );
};

export default AddFlexQuestion;

