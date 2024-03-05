const ProgressBar = ({ step, totalSteps }) => {
    const progress = (step / totalSteps) * 100;//Percentage of the progress
    return (
        <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-blue-400">
            <div className="bg-brandBlue h-5 rounded-full"
                style={{ width: `${progress}%` }}>
            </div>
        </div >
    );
};
export default ProgressBar;