"use client";

import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function CreateToDo() {
  const [todoText, setTodoText] = useState("");
  const [priority, setPriority] = useState("");

  const todosCollectionRef = collection(db, "todos");

  async function onSubmitTodo(event) {
    event.preventDefault();
    if (todoText === "" || priority === "") {
      alert("Please fill out all the fields before adding the todo.");
    } else {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString("en-GB");
      try {
        await addDoc(todosCollectionRef, {
          description: todoText,
          priority: priority,
          date: formattedDate,
        });
      } catch (err) {
        console.error(err);
      }
      location.reload();
    }
  }

  return (
    <form onSubmit={onSubmitTodo}>
      <div className="grid justify-items-center m-4">
        <label
          htmlFor="text"
          className="block mb-2 text-lg sm:text-3xl text-center font-medium text-gray-900 dark:text-white"
        >
          Your To Do
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
          Select priority
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
          Add ToDo
        </button>
      </div>
    </form>
  );
}
