const DynamicQuestionForm = async ({ params }) => {
    return (
        <div class="form-container p-8 rounded shadow-md">
            <form action="#" method="post">
                <div class="mb-4">
                    <label for="eventName" class="block text-sm font-bold mb-2 ">What is your event name?</label>
                    <input type="text" id="eventName" name="eventName" class="w-full px-3 py-2 border rounded text-blue-600" required />
                </div>

                <div class="mb-4">
                    <label class="block text-sm font-bold mb-2">What still needs to be decided for your event?</label>
                    <textarea id="eventDetails" name="eventDetails" class="w-full px-3 py-2 border rounded" rows="4" required></textarea>
                </div>
                <div class=" mb-4">
                    <label class="block text-sm font-bold mb-2">How do you want then to answer?</label>
                    <div className="flex flex-row">
                        <div class="flex">
                            <input type="radio" id="option1" name="decision" value="option1" class="form-radio" required />
                            <label for="option1" class="ml-2">Select Many</label>
                        </div>

                        <div class="flex">
                            <input type="radio" id="option2" name="decision" value="option2" class="form-radio" required />
                            <label for="option2" class="ml-2">Select One</label>
                        </div>

                        <div class="flex">
                            <input type="radio" id="option3" name="decision" value="option3" class="form-radio" required />
                            <label for="option3" class="ml-2">Explain</label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
            </form>


        </div>


    );
};

export default DynamicQuestionForm;