import Image from "next/image";
import startImage from "../../assets/images/start@3x.png";
import get_started_logo from "../../assets/images/get_started_logo.png";
import Link from "next/link";

const GetStarted = () => {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen mx-5">
            <div className="flex flex-col mb-3">
                <div >
                    <Image
                        alt="app logo"
                        src={get_started_logo}
                        width={220}
                        height={100}
                    />
                </div>
                <br />
                <div className="mt-50">
                    <Image
                        alt="get started image"
                        src={startImage}
                        width={650}
                        height={366}
                    />
                    <h1 className="">Make a difference,</h1>
                    <h2>together</h2>
                    <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                        <p>We empower communities to <b>get things done</b></p>
                    </div>
                    <Link href={`/EventPage/New`}>
                        <input type="submit" className="btn text-blue 400 shadow-lg p-3 m-2" value={"Get Started!"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;