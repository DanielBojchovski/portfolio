"use client";

import { useState } from "react";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";

export default function ToDos({ result }) {
  const [showDeleteConfirmationButtons, setShowDeleteConfirmationButtons] =
    useState(false);
  async function deleteTodo(id) {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
    location.reload();
  };
  return (
    <div
      className={`p-2 mt-1 mx-1 cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-xl rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group ${
        result.priority === "High" ? "bg-red-500" : "bg-lime-600"
      }`}
    >
      <Link href={`todos/todo/${result.id}`}>
        <p className="text-2xl line-clamp-2">{result.description}</p>
        <h2 className="text-gray-900 text-lg font-bold underline">
          Priority: {result.priority}
        </h2>
        <p className="flex items-center">{result.date}</p>
      </Link>

      {!showDeleteConfirmationButtons && (
        <div className="flex justify-center">
          <button
            className="mt-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg border-2 border-blue-900 duration-300 mx-2"
            onClick={() => setShowDeleteConfirmationButtons(true)}
          >
            Delete
          </button>
        </div>
      )}
      {showDeleteConfirmationButtons && (
        <div>
          <div className="flex justify-center">
            <button
              className="mt-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg border-2 border-blue-900 duration-300 mx-2"
              onClick={() => deleteTodo(result.id)}
            >
              Yes, i want to delete this todo.
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="mt-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg border-2 border-blue-900 duration-300 mx-2"
              onClick={() => setShowDeleteConfirmationButtons(false)}
            >
              No, i changed my mind.
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
