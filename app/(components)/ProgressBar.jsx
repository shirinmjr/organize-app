import { faTicketSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-blue-400">
            <div className="bg-blue-600 h-5 rounded-full"
                style={{ width: `${progress}0%` }}>

            </div>
        </div >
    );
};
export default ProgressBar;