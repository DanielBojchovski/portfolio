"use client";

import { useState, useEffect } from "react";
import { db } from "../../../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

async function getTodo(id) {
  const todoDoc = await getDoc(doc(db, "todos", id));
  if (todoDoc.exists()) {
    return todoDoc.data();
  } else {
    throw new Error("No such document exists!");
  }
}

export default function Todo({ params }) {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [todoText, setTodoText] = useState("");
  const [priority, setPriority] = useState("");
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    async function fetchTodo() {
      const todoData = await getTodo(params.id);
      setTodo(todoData);
    }
    fetchTodo();
  }, [params.id]);

  async function handleUpdate(event) {
    event.preventDefault();
    if (todoText === "" || priority === "") {
      alert("Please fill out all the fields before adding the todo.");
    } else {
      const todoDoc = doc(db, "todos", params.id);
      await updateDoc(todoDoc, {
        description: todoText,
        priority: priority,
      });
      setShowUpdateForm(false);
      location.reload();
    }
  }

  if (!todo) {
    return <p className="flex justify-center mt-5 text-cyan-500 font-bold text-2xl">Loading todo...</p>;
  }

  return (
    <div className="m-5 p-5">
      <div className="flex justify-center">
        <h2 className="text-4xl mb-3 font-bold text-cyan-500">
          {todo.description}
        </h2>
      </div>
      <div className="flex justify-center">
        <p
          className={`text-3xl mb-3 ${
            todo.priority === "High" ? "text-red-500" : "text-lime-500"
          }`}
        >
          <span className="font-semibold mr-1">Priority:</span>
          {todo.priority}
        </p>
      </div>
      <div className="flex justify-center">
        <p className="mb-3 text-2xl text-yellow-500">
          <span className="font-semibold mr-1">Date:</span>
          {todo.date}
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className="mt-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg border-2 border-blue-900 duration-300 mx-2"
          onClick={() => setShowUpdateForm(true)}
        >
          I want to update this todo.
        </button>
      </div>
      {showUpdateForm && (
        <div>
          <form onSubmit={handleUpdate}>
            <div className="grid justify-items-center m-4">
              <label
                htmlFor="text"
                className="block mb-2 text-lg sm:text-3xl text-center font-medium text-gray-900 dark:text-white"
              >
                Update Your To Do
              </label>
              <textarea
                id="text"
                rows="4"
                className="p-2.5 sm:w-3/5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your to do here..."
                value={todoText}
                onChange={(event) => setTodoText(event.target.value)}
              ></textarea>

              <label
                htmlFor="priority"
                className="mt-2 text-lg sm:text-3xl block mb-2 font-medium text-gray-900 dark:text-white"
              >
                Update priority
              </label>
              <select
                id="priority"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-3/5 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
              >
                <option selected value="">Select priority here...</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
              </select>
              <button
                type="submit"
                className="mt-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg border-2 border-blue-900 duration-300 mx-2"
              >
                Update ToDo
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <button
              className="mt-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg border-2 border-blue-900 duration-300 mx-2"
              onClick={() => setShowUpdateForm(false)}
            >
              Close the update form, i changed my mind.
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
