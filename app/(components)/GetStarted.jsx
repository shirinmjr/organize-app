// import {Images} from "@/assets/images"
import Image from "next/image";
import startImage from "../../assets/images/start@3x.png";
const GetStarted = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen mx-5">
            <div className="flex mb-3">
                <div>
                    <Image
                        alt="get started image"
                        src={startImage}
                        width={650}
                        height={366}
                    />
                    <h2 className="">Make a difference,</h2>
                    <h3>together</h3>
                    <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                        <p>We empower communities to <b>get things done</b></p>
                    </div>
                    <input type="submit" className="btn bg-white shadow-lg p-3 m-2" value={"Get Started!"} />
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
