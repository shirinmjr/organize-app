const ProgressBar = ({ step, totalSteps }) => {
    const progress = (step / totalSteps) * 100;//Percentage of the progress
    console.log("we are on step", progress);
    return (
        <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-blue-400">
            <div className="bg-blue-600 h-5 rounded-full"
                style={{ width: `${progress}%` }}>

            </div>
        </div >
    );
};
export default ProgressBar;