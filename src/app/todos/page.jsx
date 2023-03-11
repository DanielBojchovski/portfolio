"use client";

import { useState, useEffect } from "react";
import CreateToDo from "@/components/CreateToDo";
import ToDos from "@/components/ToDos";
import { db } from "../../config/firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const todosCollectionRef = collection(db, "todos");

  async function getTodosList() {
    try {
      const data = await getDocs(todosCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTodosList();
  }, []);

  return (
    <div>
      <CreateToDo />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {todos.map((todo) => (
          <ToDos key={todo.id} result={todo} />
        ))}
      </div>
    </div>
  );
}
