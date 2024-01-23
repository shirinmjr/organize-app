import { NextResponse } from "next/server";
import GetStarted from "./(components)/GetStarted";



const Dashboard = async () => {


  return (
    <div className="p-5">
      <div>

        <div className="mb-4" >

        </div>
        <GetStarted />

      </div>
    </div>
  );
};

export default Dashboard;
