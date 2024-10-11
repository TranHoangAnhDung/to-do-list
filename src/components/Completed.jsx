import React from "react";

const Completed = ({ jobs, setJobs, handleChecked }) => {
  const completedJobs = jobs
    ? jobs.filter((job) => job.completed === false)
    : [];
  const handleDeleteTask = (id) => setJobs(jobs.filter((job) => job.id !== id));
  const handleDeleteAll = () => {
    setJobs(jobs.filter((job) => job.completed));
  };
  return (
    <div className="text-left mt-2 font-semibold ">
      <ul className="w-full ">
        {completedJobs &&
          completedJobs.map((job) => (
            <li className="w-full flex gap-3 relative" key={job.id}>
              <input
                type="checkbox"
                className="border-slate-100 border"
                onChange={() => handleChecked(job.id)}
                checked={!job.completed}
              />
              <p
                className={
                  job.completed ? "" : "text-decoration-line: line-through"
                }
              >
                {job.task}
              </p>
              <button
                className="absolute top-0 right-0 hover:text-red-500 transition-all"
                onClick={() => handleDeleteTask(job.id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </li>
          ))}
      </ul>
      {completedJobs.length > 0 && (
        <button
          className="mt-5 block float-end p-2 bg-red-500 hover:bg-red-700 rounded-md text-white text-sm"
          onClick={() => handleDeleteAll()}
        >
          <i className="fa fa-trash"></i> Delete All
        </button>
      )}
    </div>
  );
};

export default Completed;
