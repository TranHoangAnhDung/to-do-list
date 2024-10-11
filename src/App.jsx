import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import All from "./components/All";
import Active from "./components/Active";
import Completed from "./components/Completed";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  //Add new details
  const handleSubmit = () => {
    if (job) {
      setJobs((prev) => {
        const newJobs = [
          ...prev,
          {
            id: jobs.length,
            task: job,
            completed: true,
          },
        ];
        return newJobs;
      });
      setJob("");
    } else {
      window.alert("input new job");
    }
  };
  // handle Checked
  const handleChecked = (id) => {
    console.log(id);
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, completed: !job.completed } : job
      )
    );
  };

  return (
    <>
      <div className="flex  items-center justify-center">
        <div className="flex-col w-[500px] mx-auto items-center justify-center text-center">
          <h1 className="text-3xl  font-bold ">#todo</h1>
          {/* nav */}
          <nav className="flex flex-row justify-around text-black group font-semibold">
            <Link to="/">
              <button className="p-2 active:border-b-blue-500 focus:border-b-blue-500 border-b-4 border-b-transparent transition-all">
                All
              </button>
            </Link>
            <Link to="/active">
              <button className="p-2 active:border-b-blue-500 focus:border-b-blue-500 border-b-4 border-b-transparent transition-all">
                Active
              </button>
            </Link>
            <Link to="/Completed">
              <button className="p-2 active:border-b-blue-500 focus:border-b-blue-500 border-b-4 border-b-transparent transition-all">
                Completed
              </button>
            </Link>
          </nav>
          <hr className="w-full border-slate-300 mt-1" />
          <Routes>
            <Route
              path="/"
              element={
                <All
                  job={job}
                  setJob={setJob}
                  handleSubmit={handleSubmit}
                  jobs={jobs}
                  handleChecked={handleChecked}
                />
              }
            />
            <Route
              path="/active"
              element={
                <Active
                  job={job}
                  setJob={setJob}
                  handleSubmit={handleSubmit}
                  jobs={jobs}
                  handleChecked={handleChecked}
                />
              }
            />
            <Route
              path="/Completed"
              element={
                <Completed
                  jobs={jobs}
                  setJobs={setJobs}
                  handleChecked={handleChecked}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
