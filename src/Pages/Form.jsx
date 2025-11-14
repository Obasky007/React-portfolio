import React, { useState } from "react";
import Header from "../Components/Header";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    comment: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  const [errors, setErrors] = useState({});
  const validate = () => {
    const addError = {};
    if (!form.username) {
      addError.usernameError = "Username is Required";
    }
    if (!form.email) {
      addError.email = "email is Required";
    }
    if (!form.comment) {
      addError.comment = "Pls, leave a comment";
    }
    return addError;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const check = validate();

    if (Object.keys(check).length > 0) {
      setErrors(check);
    } else {
      setForm({
        username: "",
        email: "",
        comment: "",
      });
      setErrors({});
    }
  };
  return (
    <>
      <div className="min-h-screen text-gray-800">
        <Header />
        <div className="pt-[120px] ">
          <div className="glass-nav w-[450px] md:max-w-3xl mx-auto shadow-xl">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5  px-8 pb-8 rounded-xl"
            >
              <h1 className="text-black font-bold text-4xl text-center py-4">
                Form Validation
              </h1>
              <div className="flex flex-col">
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="border-b border-black bg-transparent focus:outline-none pl-2"
                />
                <span className="text-red-500 text-center">
                  {errors.usernameError}
                </span>
              </div>
              <div className="flex flex-col">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border-b border-black bg-transparent focus:outline-none pl-2"
                />
                <span className="text-red-500 text-center">{errors.email}</span>
              </div>
              <div className="flex flex-col">
                <label>Comment:</label>
                <textarea
                  name="comment"
                  id="20"
                  value={form.comment}
                  onChange={handleChange}
                  className="border border-gray-700 bg-transparent focus:outline-none pl-2"
                ></textarea>
                <span className="text-red-500 text-center">
                  {errors.comment}
                </span>
              </div>
              <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
