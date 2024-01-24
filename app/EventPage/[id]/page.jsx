import AddQuestion from "@/app/(components)/(form)/DecisionQuestion";
import GetUserInfo from "@/app/(components)/(form)/GetUserInfo";
import WhoToInvite from "@/app/(components)/(form)/WhoToInvite";

const page = async ({ params }) => {
    return (
        <div className="form-container p-8 rounded shadow-md">
            <form action="#" method="post">
                <div className="mb-4">
                    <h2 >What is your event name?</h2>
                    <input type="text" id="eventName" name="eventName" className="w-full px-3 py-2 border rounded text-blue-600" required />
                </div>
                <AddQuestion />
                <WhoToInvite />
                <GetUserInfo />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
            </form>


        </div>


    );
};

export default page;