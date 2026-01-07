import React, { useState } from "react";
import Header from "../Components/Header";
import { TbMoodBoy } from "react-icons/tb";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
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
              onKeyPress={handleKeyPress}
              className="flex-1 px-4 py-2 rounded-lg border border-black backdrop-blur-sm bg-white/10 text-black placeholder-black"
            />
            <button
              onClick={addTask}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition flex items-center gap-2"
            >
              <IoMdAdd size={20} />
              Add
            </button>
          </div>

          <div className="max-h-[300px] overflow-y-auto rounded-lg border border-gray-200">
            <table className="w-full table-auto text-left border-collapse">
              <thead className="bg-gray-300 sticky top-0 backdrop-blur-md border-b-2 border-black">
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
                        className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition"
                        title="Edit task"
                      >
                        <FiEdit2 size={18} />
                      </button>
                      <button
                        onClick={() => deleteTask(index)}
                        className="p-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
                        title="Delete task"
                      >
                        <FiTrash2 size={18} />
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
