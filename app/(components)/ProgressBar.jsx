import { faTicketSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ProgressBar = () => {
    return (
        <nav className="p-4 event-progressbar">
            <div className="flex justify-evenly items-center ">

                <Link href="1">
                    <FontAwesomeIcon icon={faTicketSimple} className="icon" />
                </Link>
                <Link href="2">
                    <FontAwesomeIcon icon={faTicketSimple} className="icon" />
                </Link>
                <Link href="3">
                    <FontAwesomeIcon icon={faTicketSimple} className="icon" />
                </Link>
                <Link href="4">
                    <FontAwesomeIcon icon={faTicketSimple} className="icon" />
                </Link>

            </div>
        </nav>
    );
};

export default ProgressBar;