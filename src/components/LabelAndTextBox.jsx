import React from "react";

export default function LabelAndTextBox(props) {
  return (
    <div className="grid sm:grid-cols-7 mt-5">
      <div className="grid col-span-7 sm:col-span-3 justify-items-center sm:justify-items-end items-center">
        <label className="text-gray-700 dark:text-cyan-500 text-xl font-bold">{ props.labelText }</label>
      </div>
      <div className="grid col-span-7 sm:col-span-4 justify-items-start">
        <input
          type="text"
          placeholder= { props.textBoxPlaceholder }
          disabled = { props.disabled }
          onChange = { props.functionToExecuteOnChange }
          value = { props.value }
          className="shadow-lg border-2 border-blue-300 rounded-lg  py-2 px-3 text-gray-700 dark:text-cyan-500 text-xl mx-2 sm:w-3/5 w-full text-center"
        />
      </div>
    </div>
  );
}
