import React, { useState } from "react";
import Header from "../Components/Header";
import { TbMoodBoy } from "react-icons/tb";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (!taskName.trim()) return;
    setTasks([...tasks, taskName]);
    setTaskName("");
  };

  const deleteTask = (pos) => {
    if (confirm(`Are you sure you want to delete task ${pos + 1}?`)) {
      const newList = tasks.filter((_, index) => index !== pos);
      setTasks(newList);
    }
  };

  const editTask = (pos) => {
    setTaskName(tasks[pos]);
    const newList = tasks.filter((_, index) => index !== pos);
    setTasks(newList);
  };

  return (
    <div
      className="relative min-h-screen text-gray-900 bg-white"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 28px),
          repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 28px),
          radial-gradient(circle at center, rgba(0,0,0,0.03), transparent 50%)
        `,
      }}
    >
      <Header />
      <div className="pt-32 px-4">
        <div className="bg-white w-full sm:w-[450px] md:max-w-3xl mx-auto pt-6 p-6 sm:p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-center">To-Do List</h1>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Enter a new task..."
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-black backdrop-blur-sm bg-white/10 text-black placeholder-black"
            />
            <button
              onClick={addTask}
              className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              Add
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left border-collapse">
              <thead className="bg-gray-300 rounded-t-2xl backdrop-blur-md border-t-2 border-black">
                <tr>
                  <th className="py-2 px-3 text-sm md:text-base">S/N</th>
                  <th className="py-2 px-3 text-sm md:text-base">Task</th>
                  <th className="py-2 px-3 text-sm md:text-base">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/5 transition"
                  >
                    <td className="py-2 px-3">{index + 1}</td>
                    <td className="py-2 px-3">{task}</td>
                    <td className="py-2 px-3 flex gap-2">
                      <button
                        onClick={() => editTask(index)}
                        className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTask(index)}
                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {tasks.length === 0 && (
                  <tr>
                    <td colSpan="3" className="py-4 text-center text-gray-500">
                      No tasks yet. Add your first task!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
