"use Client";
import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "@/app/components/inputs/Button";
import InputWrapper from "../inputs/InputWrapper";

export default function GetUserAuth() {
  const [code, setCode] = useState("");

  // Call our callback when code = 6 chars
  // useEffect(() => {
  //     if (code.length === 5) {
  //        if (typeof callback === 'function') callback(code);
  //        resetCode();
  //    }
  // }, [code]); //eslint-disable-line

  // Listen for external reset toggle
  // useEffect(() => {
  //    resetCode();
  //  }, [reset]); //eslint-disable-line

  // Refs to control each digit input element
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // Reset all inputs and clear state
  const resetCode = () => {
    inputRefs.forEach((ref) => {
      ref.current.value = "";
    });
    inputRefs[0].current.focus();
    setCode("");
  };

  // Handle input
  function handleInput(e, index) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    //Stacking up the user input
    const newCode = [...code];
    // Convert lowercase letters to uppercase
    if (/^[a-z]+$/.test(input.value)) {
      const uc = input.value.toUpperCase();
      newCode[index] = uc;
      inputRefs[index].current.value = uc;
    } else {
      newCode[index] = input.value;
    }
    setCode(newCode.join(""));

    input.select();

    if (input.value === "") {
      // If the value is deleted, select previous input, if exists
      if (previousInput) {
        previousInput.current.focus();
      }
    } else if (nextInput) {
      // Select next input on entry, if exists
      nextInput.current.select();
    }
  }

  // Handle backspace key
  function handleKeyDown(e, index) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    if ((e.keyCode === 8 || e.keyCode === 46) && input.value === "") {
      e.preventDefault();
      setCode((prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1));
      if (previousInput) {
        previousInput.current.focus();
      }
    }
  }

  // Capture pasted characters
  const handlePaste = (e) => {
    const pastedCode = e.clipboardData.getData("text");
    if (pastedCode.length === 5) {
      setCode(pastedCode);
      inputRefs.forEach((inputRef, index) => {
        inputRef.current.value = pastedCode.charAt(index);
      });
    }
  };

  return (
    <div className="event-form">
      <h3 className=""> Please verify your phone number:</h3>
      <div className="my-2">
        We have sent a temporary verification code to your phone number ending in 6680. Enter the code to continue.
      </div>
      <InputWrapper>
        <div className="flex items-center my-2">
          <h4>Didn’t receive a code?</h4>
          <div className="flex items-center justify-center p-2">
            <Button
              onClick={resetCode} //should change to callback resend a new code!!!
            >
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                className="text-white hover:cursor-pointer hover:text-blue-00"
                onClick={resetCode}
              />
              &nbsp;Text me a new code
            </Button>
          </div>
        </div>
        <div className="flex gap-2 relative items-center mb-4">
          {[0, 1, 2, 3, 4].map((index) => (
            <input
              className="text-2xl w-12 h-12 flex bg-blue-100  text-blue-60 rounded-full border-4 border-blueBrand  shadow-lg p-2 text-center mb-4 focus:border-princetonOrange  focus:ring focus:ring-orange-200"
              key={index}
              type="text"
              maxLength={1}
              onChange={(e) => handleInput(e, index)}
              ref={inputRefs[index]}
              autoFocus={index === 0}
              onFocus={(e) => e.target.select()}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              // disabled={isLoading}
            />
          ))}
          {code.length ? (
            <div>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-red-600 hover:cursor-pointer hover:text-blue-00 m-2 "
                onClick={resetCode}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </InputWrapper>
    </div>
  );
}
