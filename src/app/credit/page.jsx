"use client";

import { useState } from "react";

import Button from "@/components/Button";
import Header from "@/components/Header";
import LabelAndTextBox from "@/components/LabelAndTextBox";

export default function CreditCalculator() {
  const [creditAmount, setCreditAmount] = useState("");
  const [creditRate, setCreditRate] = useState("");
  const [years, setYears] = useState("");
  const [totalInterest, setTotalInterest] = useState("");
  const [totalToReturn, setTotalToReturn] = useState("");
  const [monthlyRate, setMonthlyRate] = useState("");

  function isPositiveNumber(str) {
    return !isNaN(parseFloat(str)) && parseFloat(str) > 0;
  }

  function calculate() {
    if (
      isPositiveNumber(creditAmount) &&
      isPositiveNumber(creditRate) &&
      isPositiveNumber(years)
    ) {
      var myCreditAmount = parseFloat(creditAmount);
      var creditAmountReplacement = myCreditAmount;
      var myCreditRate = parseFloat(creditRate);
      var myYears = parseInt(years);
      var sumOfInterest = 0;
      var sumOfInterestReplacement;
      for (var i = 1; i <= myYears; i++) {
        sumOfInterestReplacement = 0;
        sumOfInterestReplacement +=
          (creditAmountReplacement / 100) * myCreditRate;
        creditAmountReplacement -= sumOfInterestReplacement;
        sumOfInterest += sumOfInterestReplacement;
      }
      setTotalInterest(sumOfInterest.toFixed(2));
      setTotalToReturn((sumOfInterest + myCreditAmount).toFixed(2));
      setMonthlyRate(
        ((sumOfInterest + myCreditAmount) / (myYears * 12)).toFixed(2)
      );
    } else {
      alert("Enter only positive numeric values and fill out all the fields");
      reset();
    }
  }

  function reset(){
    setCreditAmount("");
    setCreditRate("");
    setYears("");
    setTotalInterest("");
    setTotalToReturn("");
    setMonthlyRate("");
  };

  function changeCreditAmount(event) {
    setCreditAmount(event.target.value);
  }

  function changeCreditRate(event) {
    setCreditRate(event.target.value);
  }

  function changeYears(event) {
    setYears(event.target.value);
  }

  return (
    <>
      <Header text="Credit Calculator" />
      <LabelAndTextBox
        labelText="Credit Amount"
        textBoxPlaceholder="Enter credit amount here..."
        disabled={false}
        functionToExecuteOnChange={changeCreditAmount}
        value={creditAmount}
      />
      <LabelAndTextBox
        labelText="Credit Rate"
        textBoxPlaceholder="Enter credit rate here..."
        disabled={false}
        functionToExecuteOnChange={changeCreditRate}
        value={creditRate}
      />
      <LabelAndTextBox
        labelText="Years"
        textBoxPlaceholder="Enter years here..."
        disabled={false}
        functionToExecuteOnChange={changeYears}
        value={years}
      />
      <div className="grid sm:grid-cols-2 mt-5">
        <div className="grid justify-items-center sm:justify-items-end items-center">
          <Button
            className={
              "bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg border-2 border-blue-900 duration-300 mx-2"
            }
            functionToExecuteOnClick={calculate}
            buttonText="Calculate"
          />
        </div>
        <div className="grid justify-items-center sm:justify-start">
          <Button
            className={
              "bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg border-2 border-red-900 duration-300 mx-2"
            }
            functionToExecuteOnClick={reset}
            buttonText="Reset"
          />
        </div>
      </div>

      <LabelAndTextBox
        labelText="Total Interest"
        disabled={true}
        value={totalInterest}
      />

      <LabelAndTextBox
        labelText="Total To Return"
        disabled={true}
        value={totalToReturn}
      />

      <LabelAndTextBox
        labelText="Monthly Rate"
        disabled={true}
        value={monthlyRate}
      />
    </>
  );
}
