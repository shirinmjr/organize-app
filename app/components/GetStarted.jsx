import Image from "next/image";
import startImage from "../../assets/images/start@3x.png";
import get_started_logo from "../../assets/images/get_started_logo.png";
import ButtonLight from "../components/inputs/ButtonLight";
import Link from "next/link";

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-5">
      <div className="flex flex-col mb-3">
        <div className="mt-50">
          <Image
            alt="get started image"
            src={startImage}
            width={650}
            height={366}
          />
          <h1 className="">Make a difference,</h1>
          <h2>together</h2>
          <div className="">
            <p>
              We empower communities to <strong>get things done</strong>
            </p>
          </div>
          <Link href={`/event-page/new`}>
            <ButtonLight> Get Started!</ButtonLight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
