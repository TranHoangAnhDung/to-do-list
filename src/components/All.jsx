import React from "react";
const All = ({ job, setJob, handleSubmit,jobs,handleChecked }) => {

  return (
    <>
      {/* Add input */}
      <div className="w-full mt-5">
        <div className="flex items-center">
          <input
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md p-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Add details"
            type="text"
            value={job}
            onChange={(event) => {
              setJob(event.target.value);
              // console.log(event.target.value);
            }}
          />
          <button
            className="rounded-md bg-blue-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
            onClick={() => handleSubmit()}
          >
            Add
          </button>
        </div>
      </div>
      {/* All */}
      <div className="text-left mt-2 font-semibold ">
        <ul className="">
          {jobs && jobs.map((job) => (
            <li className=" flex gap-3" key={job.id}>
              <input
                type="checkbox"
                className="border-slate-100 border"
                onChange={() => handleChecked(job.id)}
                checked={!job.completed}
              />
              <p className={job.completed ? '' : 'text-decoration-line: line-through'}>{job.task}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default All;
