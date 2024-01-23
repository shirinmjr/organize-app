import AddQuestion from "@/app/(components)/(form)/AddFlexQuestion";

const page = async ({ params }) => {
    return (
        <div class="form-container p-8 rounded shadow-md">
            <form action="#" method="post">
                <div class="mb-4">
                    <label for="eventName" class="block text-sm font-bold mb-2 ">What is your event name?</label>
                    <input type="text" id="eventName" name="eventName" class="w-full px-3 py-2 border rounded text-blue-600" required />
                </div>
                <AddQuestion />
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
            </form>


        </div>


    );
};

export default page;